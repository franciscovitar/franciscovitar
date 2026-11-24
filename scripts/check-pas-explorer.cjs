const { readFileSync, readdirSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { createHash } = require("node:crypto");
const root = resolve(__dirname, "..");
const manifest = JSON.parse(readFileSync(join(root, "docs/pas-explorer-snapshot.json"), "utf8"));
const actual = [];
function walk(folder) {
  for (const entry of readdirSync(join(root, folder), { withFileTypes: true })) {
    const path = folder + "/" + entry.name;
    if (entry.isDirectory()) walk(path);
    else if (entry.isFile()) actual.push(path);
    else throw new Error("Unexpected asset: " + path);
  }
}
walk("public/pas-explorer");
if (JSON.stringify(actual.sort()) !== JSON.stringify(manifest.files.map(f => f.path).sort())) throw new Error("Snapshot inventory differs");
for (const file of manifest.files) {
  const bytes = readFileSync(join(root, file.path));
  const hash = createHash("sha1").update("blob " + bytes.length + "\0").update(bytes).digest("hex");
  if (hash !== file.gitBlob || bytes.length !== file.bytes) throw new Error("Snapshot drift: " + file.path);
}
console.log("PAS Explorer snapshot matches " + manifest.sourceCommit + " (" + actual.length + " files)");
