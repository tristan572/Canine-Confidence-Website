#!/bin/bash
set -e

echo "Building frontend with Vite..."
npx vite build

echo "Building backend with esbuild..."
npx esbuild server/index.ts \
  --platform=node \
  --bundle \
  --format=esm \
  --outfile=server.js \
  --external:@types/\* \
  --external:@tailwindcss/\* \
  --external:@replit/\* \
  --external:esbuild \
  --external:postcss \
  --external:tailwindcss \
  --external:typescript \
  --external:tsx \
  --external:drizzle-kit \
  --external:autoprefixer \
  --external:@babel/preset-typescript \
  --external:lightningcss

echo "Linking public directory..."
rm -f public
ln -s dist/public public

echo "Build complete!"
ls -lh server.js public
