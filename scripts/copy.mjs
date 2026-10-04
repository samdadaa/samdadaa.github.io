import { cpSync, copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const dist = resolve(root, 'dist')

mkdirSync(resolve(dist, 'assets'), { recursive: true })
copyFileSync(resolve(root, 'src/styles.css'), resolve(dist, 'assets/styles.css'))
cpSync(resolve(root, 'public'), dist, { recursive: true })

// Version the complete module graph and stylesheet so repeat visitors receive
// the same build even when GitHub Pages or their browser caches older assets.
const assets = resolve(dist, 'assets')
const buildFiles = readdirSync(assets).filter((name) => /\.(js|css)$/.test(name)).sort()
const hash = createHash('sha256')
for (const name of buildFiles) {
  hash.update(name)
  hash.update(readFileSync(resolve(assets, name)))
}
const version = hash.digest('hex').slice(0, 12)
for (const name of buildFiles.filter((name) => name.endsWith('.js'))) {
  const file = resolve(assets, name)
  const code = readFileSync(file, 'utf8').replace(
    /(\bfrom\s+['"])(\.\/[^'"]+\.js)(['"])/g,
    `$1$2?v=${version}$3`,
  )
  writeFileSync(file, code)
}
const html = readFileSync(resolve(root, 'src/index.html'), 'utf8')
  .replace('/assets/styles.css', `/assets/styles.css?v=${version}`)
  .replace('/assets/main.js', `/assets/main.js?v=${version}`)
const routes = [
  '/', '/projects', '/expertise', '/about', '/contact',
  '/projects/wasserversorger', '/projects/crm-business-central-automation',
  '/projects/business-central-prozesse', '/projects/zeiterfassung-business-central',
  '/projects/datenmigration', '/projects/floday-dayra',
  '/projects/commerce-crm-platform', '/projects/api-testautomatisierung'
]

for (const route of routes) {
  const target = route === '/' ? resolve(dist, 'index.html') : resolve(dist, route.slice(1), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
