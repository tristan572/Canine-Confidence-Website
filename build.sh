#!/bin/bash
set -e

echo "Installing all dependencies (including dev for build)..."
npm install

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

echo "Preparing production node_modules..."
npm install --production

echo "Build complete!"
ls -lh dist/index.js dist/public/index.html
