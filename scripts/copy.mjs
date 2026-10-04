import { cpSync, copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const dist = resolve(root, 'dist')

mkdirSync(resolve(dist, 'assets'), { recursive: true })
copyFileSync(resolve(root, 'src/styles.css'), resolve(dist, 'assets/styles.css'))
cpSync(resolve(root, 'public'), dist, { recursive: true })

const html = readFileSync(resolve(root, 'src/index.html'), 'utf8')
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
