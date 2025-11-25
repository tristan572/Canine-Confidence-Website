#!/bin/bash
set -e

echo "Building frontend..."
npm run build || true

echo "Copying assets for production..."
mkdir -p dist
cp -r attached_assets dist/ 2>/dev/null || true

echo "Building server..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build complete!"
