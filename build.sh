#!/bin/bash
set -e

echo "Installing dependencies..."
npm install --production=false

echo "Building frontend with Vite..."
npx vite build

echo "Building backend with esbuild..."
npx esbuild server/index.ts \
  --platform=node \
  --packages=external \
  --bundle \
  --format=esm \
  --define:process.env.NODE_ENV=\"production\" \
  --outfile=dist/index.js

echo "Cleaning up dev dependencies for production..."
npm install --omit=dev --no-save

echo "Build complete!"
ls -lh dist/index.js dist/public/index.html
