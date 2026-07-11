import express, { type Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";
import { requireAdminAuth } from "./adminAuth";
import { registerSeoMiddleware } from "./seo";

function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

function serveStatic(app: express.Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // index: false — otherwise express.static serves index.html for "/" itself,
  // bypassing the per-route meta injection below.
  app.use(express.static(distPath, { index: false }));

  // Serves index.html for client-side routes, with per-route title/description/
  // canonical/JSON-LD injected server-side (react-helmet-async does not take
  // effect in the production build, so every route was shipping homepage meta).
  registerSeoMiddleware(app, distPath);
}

const app = express();

// Repeat visitors get upgraded to https even if the apex-domain redirect
// (configured outside this app, at the DNS/registrar level) is ever insecure.
app.use((req, res, next) => {
  res.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The admin page has no client-side login; gate it at the server so the
// management UI and its data aren't reachable by an unauthenticated visitor.
app.use("/admin", requireAdminAuth);

// Serve attached assets with cache headers for 1 year
app.use('/attached_assets', express.static('attached_assets', {
  maxAge: '1y',
  etag: false,
  lastModified: false
}));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "development") {
    const { setupVite } = await import("./vite-dev");
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
