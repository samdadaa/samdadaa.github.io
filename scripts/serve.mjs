import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'

const root = new URL('../dist/', import.meta.url).pathname
const port = Number(process.env.PORT || 4173)
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.pdf': 'application/pdf'
}

createServer((req, res) => {
  const pathname = decodeURIComponent((req.url || '/').split('?')[0] || '/')
  const safe = normalize(pathname).replace(/^([.][.][/\\])+/, '')
  let file = join(root, safe)
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) file = join(root, '404.html')
  const ext = extname(file)
  res.writeHead(file.endsWith('404.html') ? 404 : 200, { 'Content-Type': mime[ext] || 'application/octet-stream' })
  res.end(readFileSync(file))
}).listen(port, () => console.log(`Portfolio preview: http://localhost:${port}`))
