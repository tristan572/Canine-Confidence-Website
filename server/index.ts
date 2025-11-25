import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Enable gzip compression - CRITICAL for TTFB
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve attached assets with long-term caching
app.use('/attached_assets', express.static('attached_assets', {
  maxAge: '1y', // 1 year for content-addressed assets
  immutable: true,
  etag: false
}));

// Cache headers middleware - CRITICAL for performance
app.use((req, res, next) => {
  // Add cache headers for versioned static assets (Vite hashed files)
  if (req.path.match(/\.[a-z0-9]{8,}\.(js|css|woff2|webp|svg|ico)$/i)) {
    res.set({
      'Cache-Control': 'public, max-age=31536000' // 1 year for hashed files
    });
  }
  // Add cache headers for API responses
  else if (req.path.startsWith('/api')) {
    res.set({
      'Cache-Control': 'public, max-age=60' // 60 seconds for API (shorter for freshness)
    });
  }
  // HTML pages with validation - shorter cache for freshness
  else if (req.path === '/' || req.path.endsWith('.html')) {
    res.set({
      'Cache-Control': 'public, max-age=300, must-revalidate' // 5 minutes for HTML
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
