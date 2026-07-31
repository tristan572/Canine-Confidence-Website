import type { Request, Response, NextFunction } from "express";
import { timingSafeEqual } from "crypto";

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Compare against itself so a length mismatch doesn't short-circuit faster than a match.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

// Fails closed: without ADMIN_USERNAME/ADMIN_PASSWORD set, admin routes stay locked.
export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;

  const deny = () => {
    res.set("WWW-Authenticate", 'Basic realm="Canine Confidence Admin"');
    res.status(401).send("Authentication required.");
  };

  if (!expectedUser || !expectedPass) {
    return deny();
  }

  const header = req.headers.authorization;
  if (!header || !header.startsWith("Basic ")) {
    return deny();
  }

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf-8");
  const sepIndex = decoded.indexOf(":");
  if (sepIndex === -1) {
    return deny();
  }

  const user = decoded.slice(0, sepIndex);
  const pass = decoded.slice(sepIndex + 1);

  if (safeCompare(user, expectedUser) && safeCompare(pass, expectedPass)) {
    return next();
  }

  return deny();
}
