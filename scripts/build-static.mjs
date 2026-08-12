// Gera um site 100% estático em ./dist-static (pronto para o public_html da HostGator).
// - Copia tudo de /public
// - Baixa as imagens hospedadas em /__l5e/... para dist-static/images
// - Reescreve os caminhos nos arquivos .html/.css/.js
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "dist-static");
const ORIGIN = process.env.STATIC_ASSET_ORIGIN ?? "http://localhost:8080";
const TEXT_EXT = new Set([".html", ".css", ".js", ".json", ".xml", ".txt", ".webmanifest"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

await rm(OUT, { recursive: true, force: true });
await cp(join(ROOT, "public"), OUT, { recursive: true });

const files = await walk(OUT);
const textFiles = files.filter((f) => TEXT_EXT.has(extname(f).toLowerCase()));

const found = new Set();
const RE = /\/__l5e\/[^"'`)\s>]+/g;
for (const f of textFiles) {
  for (const m of (await readFile(f, "utf8")).matchAll(RE)) found.add(m[0]);
}

await mkdir(join(OUT, "images"), { recursive: true });
const map = new Map();
for (const url of found) {
  const name = basename(url);
  const res = await fetch(ORIGIN + url);
  if (!res.ok) throw new Error(`Falha ao baixar ${url}: ${res.status}`);
  await writeFile(join(OUT, "images", name), Buffer.from(await res.arrayBuffer()));
  map.set(url, `/images/${name}`);
  console.log(`baixado  ${url} -> /images/${name}`);
}

for (const f of textFiles) {
  const src = await readFile(f, "utf8");
  let next = src;
  for (const [from, to] of map) next = next.split(from).join(to);
  if (next !== src) await writeFile(f, next);
}

const total = (await walk(OUT)).length;
const size = (await Promise.all((await walk(OUT)).map(async (f) => (await stat(f)).size))).reduce((a, b) => a + b, 0);
console.log(`\nOK: ${total} arquivos (${(size / 1024 / 1024).toFixed(2)} MB) em dist-static/`);
console.log("Envie o CONTEÚDO de dist-static/ para o public_html da HostGator.");
