#!/bin/bash
set -e

echo "Building frontend with Vite..."
npx vite build

echo "Building backend with esbuild..."
npx esbuild server/index.ts --platform=node --bundle --format=esm --outfile=server.js

echo "Linking public directory..."
rm -f public
ln -s dist/public public

echo "Build complete!"
ls -lh server.js public
