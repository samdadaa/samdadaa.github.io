# Samer Dadah — Portfolio v2

Komplett neu aufgebaute Bewerbungs- und Portfolio-Webseite als schlankes TypeScript-Projekt ohne Bootstrap und ohne Frontend-Framework.

## Was enthalten ist

- echte Unterseiten: `/`, `/projects`, `/expertise`, `/about`, `/contact`
- eigene Detailseiten für alle Projekte
- Dark / Light Mode mit gespeichertem Nutzerwunsch
- responsive Navigation und mobile Darstellung
- animierter Hero, Scroll-Reveals, Tech-Visuals und reduzierte Bewegung bei `prefers-reduced-motion`
- filterbare Projektübersicht ohne Collapse-/Aufklapp-UI
- Tool- und Plattformübersicht mit Brand-Icons und Text-Fallbacks
- Lebenslauf als Download
- Kontaktformular, das einen vorbefüllten E-Mail-Entwurf öffnet, plus Copy-to-Clipboard
- GitHub-Actions-Deployment für GitHub Pages

## Technik

GitHub Pages kann TypeScript nicht direkt im Browser ausführen. Deshalb wird der Quellcode aus `src/*.ts` beim Build zu JavaScript kompiliert. Eine minimale HTML-Shell bleibt technisch notwendig, enthält aber keine Portfolio-Inhalte oder Bootstrap-Markup.

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Das fertige statische Ergebnis liegt danach in `dist/`.

## Deployment auf `samdadaa.github.io`

1. Inhalt dieses Projekts in das Repository `samdadaa/samdadaa.github.io` übernehmen.
2. Commit + Push auf `main`.
3. In GitHub unter **Settings → Pages → Build and deployment** als Source **GitHub Actions** auswählen.
4. Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die Seite automatisch.

Da es sich um ein User-Pages-Repository handelt, verwendet die Seite absolute Pfade ab `/`.

## Inhalte ändern

Die zentralen Projektdaten, Skill-Gruppen, Berufserfahrung und Links liegen in:

- `src/content.ts`
- `src/main.ts` für Seitenaufbau und Interaktionen
- `src/styles.css` für das komplette Design

Profilbild und PDF liegen unter `public/`.

## Kontaktformular

GitHub Pages stellt keinen eigenen Mail-Server bereit. Das Formular verarbeitet daher keine Daten auf einem Backend, sondern öffnet beim Absenden einen vorbefüllten E-Mail-Entwurf an `samdadada8@gmail.com`. Zusätzlich gibt es eine Copy-to-Clipboard-Funktion. So funktioniert die Kontaktaufnahme ohne API-Key, Datenbank oder Server.

Falls später ein echtes serverloses Formular gewünscht ist, kann ein Dienst wie Formspree/Web3Forms oder eine eigene Serverless Function ergänzt werden.

## Brand-Icons

Die Marken-Icons werden zur Laufzeit von `cdn.simpleicons.org` geladen. Falls ein Icon oder die CDN-Verbindung nicht verfügbar ist, zeigt die Seite automatisch einen textbasierten Fallback.
