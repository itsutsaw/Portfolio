import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("dist");
const output = resolve("public");

if (!existsSync(source)) {
  throw new Error("The dist directory is missing.");
}

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(source, output, { recursive: true });

console.log("Portfolio prepared in public/ for deployment.");
