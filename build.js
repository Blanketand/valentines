const { execSync } = require("child_process");
const fs = require("fs");

console.log("🚀 Starting Cloudflare Pages Build...");

// Ensure dependencies are installed
if (!fs.existsSync("node_modules")) {
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });
}

// Run the build command (modify this if needed)
console.log("🛠️ Running build command...");
execSync("npm run build", { stdio: "inherit" });

console.log("✅ Build completed successfully!");
