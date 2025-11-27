// Production server wrapper - ensures dependencies are installed, then loads the built server
import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

const nodeModulesPath = join(process.cwd(), "node_modules");

// Check if node_modules exists, if not install dependencies
if (!existsSync(nodeModulesPath)) {
  console.log("Installing dependencies...");
  try {
    execSync("npm install", { stdio: "inherit" });
    console.log("Dependencies installed successfully");
  } catch (error) {
    console.error("Failed to install dependencies:", error);
    process.exit(1);
  }
}

// Load the built server
import("./dist/index.js").catch((error) => {
  console.error("Failed to load server:", error);
  process.exit(1);
});
