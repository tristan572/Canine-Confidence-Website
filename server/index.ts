import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Enable gzip compression - CRITICAL for TTFB
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve attached assets - use absolute path for production reliability
const assetsPath = path.join(__dirname, '..', 'attached_assets');
app.use('/attached_assets', express.static(assetsPath));

// Simple, proven cache headers for optimal performance
app.use((req, res, next) => {
  const path = req.path;
  
  // Hashed assets from Vite - can cache aggressively
  if (/\/[a-z0-9]{8,}\.(js|css|woff2|webp|svg|ico)($|\?)/.test(path)) {
    res.set({
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
  }
  // API endpoints - short cache for freshness
  else if (path.startsWith('/api/')) {
    res.set({
      'Cache-Control': 'public, max-age=300' // 5 minutes
    });
  }
  // HTML and other documents - must validate
  else {
    res.set({
      'Cache-Control': 'public, max-age=3600, must-revalidate' // 1 hour
    });
  }
  next();
});

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
  if (app.get("env") === "development") {
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
