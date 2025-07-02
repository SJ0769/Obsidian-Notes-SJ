const fs = require("fs");
const path = require("path");

// Root folder of your notes
const CONTENT_DIR = path.join(__dirname, "content");
const INDEX_PATH = path.join(CONTENT_DIR, "index.md");

// Skip the index itself
const EXCLUDE = new Set(["index.md"]);

function getMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = {};

  for (const entry of entries) {
    if (EXCLUDE.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subfiles = getMarkdownFiles(fullPath);
      if (Object.keys(subfiles).length > 0) {
        result[entry.name] = subfiles["."] || [];
      }
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const folder = path.relative(CONTENT_DIR, dir) || ".";
      if (!result["."]) result["."] = [];
      result["."].push(path.relative(CONTENT_DIR, fullPath));
    }
  }

  return result;
}

function generateMarkdownIndex(fileMap) {
  let output = `---\ntitle: SJ's notes on model theory, set theory, and logic\n---\n\n`;

  for (const folder of Object.keys(fileMap).sort()) {
    const section = folder === "." ? "📄 Top-Level Notes" : `📁 ${folder}`;
    output += `## ${section}\n`;

    const files = fileMap[folder];
    for (const file of files) {
      const wikilink = file.replace(/\\/g, "/").replace(/\.md$/, "");
      output += `- [[${wikilink}]]\n`;
    }

    output += `\n`;
  }

  return output;
}

// Build the index
const fileMap = getMarkdownFiles(CONTENT_DIR);
const markdown = generateMarkdownIndex(fileMap);
fs.writeFileSync(INDEX_PATH, markdown);

console.log(`✅ index.md generated with ${Object.values(fileMap).flat().length} links.`);
