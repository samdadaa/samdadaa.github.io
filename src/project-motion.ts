import type { Project } from './content.js'

type Motion = { label: string; subtitle: string; heading: string; text: string; color: string; scene: string }

const line = (d: string, extra = '') => `<path class="motion-line ${extra}" d="${d}"/>`
const dot = (x: number, y: number, delay = 0) => `<circle class="motion-dot" cx="${x}" cy="${y}" r="5" style="animation-delay:${delay}s"/>`
const card = (x: number, y: number, w: number, h: number, body: string, extra = '') => `<g class="${extra}"><rect class="motion-card" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>${body}</g>`
const text = (x: number, y: number, value: string) => `<text x="${x}" y="${y}" class="motion-label" text-anchor="middle">${value}</text>`
const document = (x: number, y: number, label: string, extra = '') => card(x, y, 80, 100,
  `${line(`M${x+20} ${y+28}h40 M${x+20} ${y+40}h26 M${x+20} ${y+52}h34`)}${text(x+40, y+80, label)}`, extra)

// Abstract process illustrations, independent of customer data or product UI.
const motions: Record<string, Motion> = {
  wasserversorger: {
    label: 'Wasserwirtschaft', subtitle: 'Vom Messwert zur Abrechnung', color: '#58d9f5',
    heading: 'Messdaten werden zu Geschäftsprozessen.',
    text: 'Die Animation verbindet Messwesen, Tarifierung und Abrechnung — die fachlichen Stationen der Branchenlösung in Business Central.',
    scene: `<circle class="motion-halo" cx="200" cy="130" r="100"/>
      ${card(45, 70, 126, 140, `<path class="motion-water" d="M58 160q22-12 44 0t44 0v35H58Z"/><circle class="motion-outline" cx="108" cy="118" r="29"/>${line('M108 118l16-17', 'motion-meter')}${text(108, 232, 'MESSWERT')}`)}
      ${line('M176 140h52', 'motion-stream')}${dot(190,140)}${dot(211,140,-1)}
      ${document(240, 90, 'TARIF', 'motion-float')}${text(280, 232, 'ABRECHNUNG')}
      <path class="motion-drop" d="M200 38c0 0-13 16-13 23a13 13 0 0 0 26 0c0-7-13-23-13-23Z"/>`,
  },
  'crm-business-central-automation': {
    label: 'Connected systems', subtitle: 'CRM ↔ Business Central', color: '#a5a0ff',
    heading: 'Zwei Systeme. Ein konsistenter Datenfluss.',
    text: 'Gegenläufige Datenimpulse visualisieren die Synchronisation zwischen CRM und ERP. Die Verbindung steht für Mapping, API-Kommunikation und automatisierte Übergaben.',
    scene: `${card(24,90,112,100,`${text(80,132,'CRM')}${line('M52 152h56 M52 163h36')}`, 'motion-float')}
      ${card(264,90,112,100,`${text(320,132,'ERP')}${line('M292 152h56 M292 163h36')}`, 'motion-float-alt')}
      ${line('M138 118C180 72 220 72 262 118', 'motion-stream')}
      ${line('M262 162C220 208 180 208 138 162', 'motion-stream motion-stream-reverse')}
      <circle class="motion-outline motion-pulse" cx="200" cy="140" r="26"/>${line('M189 140l8 8 15-17')}
      ${text(200,245,'SYNCHRONISATION')}`,
  },
  'business-central-prozesse': {
    label: 'Business workflows', subtitle: 'Verkauf · Belege · Versand', color: '#ffcc87',
    heading: 'Ein Prozess, der Schritt für Schritt weiterführt.',
    text: 'Animierte Belege und Übergaben zeigen den Zusammenhang von Verkauf, Buchung und Versand. Modulare Erweiterungen verbinden die Stationen mit dem Business-Central-Standard.',
    scene: `${line('M65 204h270', 'motion-stream')}
      ${document(25,80,'AUFTRAG','motion-step motion-step-one')}
      ${document(160,80,'BUCHUNG','motion-step motion-step-two')}
      ${document(295,80,'VERSAND','motion-step motion-step-three')}
      ${dot(65,204,0)}${dot(200,204,-1.3)}${dot(335,204,-2.6)}
      ${line('M112 125h35m-8-7 8 7-8 7 M247 125h35m-8-7 8 7-8 7')}`,
  },
  'zeiterfassung-business-central': {
    label: 'Time & insights', subtitle: 'Erfassen · Prüfen · Auswerten', color: '#77e6c1',
    heading: 'Arbeitszeit im bestehenden Prozess erfassen.',
    text: 'Die Uhr und die wachsenden Zeitbalken übersetzen Zeiterfassung und Auswertung in eine gemeinsame visuelle Sprache — direkt im Kontext von Business Central.',
    scene: `<circle class="motion-halo" cx="125" cy="135" r="95"/><circle class="motion-card" cx="125" cy="135" r="70"/>
      <circle class="motion-outline" cx="125" cy="135" r="55"/>
      ${line('M125 135V91', 'motion-clock-hand')}${line('M125 135l-28 14')}${dot(125,135)}
      ${card(235,70,130,140,`${line('M254 190h92')}<rect class="motion-bar" x="255" y="140" width="18" height="40" rx="4"/><rect class="motion-bar" x="289" y="110" width="18" height="70" rx="4" style="animation-delay:-1s"/><rect class="motion-bar" x="323" y="90" width="18" height="90" rx="4" style="animation-delay:-2s"/>`)}
      ${text(125,245,'ZEIT')}${text(300,245,'AUSWERTUNG')}`,
  },
  datenmigration: {
    label: 'Data migration', subtitle: 'Mapping · Validierung · Import', color: '#92b9ff',
    heading: 'Aus unterschiedlichen Daten wird eine klare Struktur.',
    text: 'Drei Datenströme laufen durch einen gemeinsamen Mapping-Schritt in ein geordnetes Ziel. Die Animation greift Vorbereitung, Validierung und strukturierte Übernahme auf.',
    scene: `${[80,140,200].map((y,i)=>`${card(28,y-18,72,36,line(`M43 ${y}h42`))}${line(`M104 ${y}C140 ${y} 145 140 175 140`, `motion-stream motion-track-${i}`)}`).join('')}
      <path class="motion-card motion-pulse" d="m200 98 42 42-42 42-42-42Z"/>${line('M188 140l8 8 16-18')}
      ${line('M246 140h44','motion-stream')}
      ${card(296,72,80,136,`${[100,125,150,175].map((y)=>line(`M310 ${y}h50`)).join('')}`)}
      ${text(65,248,'QUELLEN')}${text(200,248,'MAPPING')}${text(336,248,'ZIEL')}`,
  },
  'commerce-crm-platform': {
    label: 'Commerce ecosystem', subtitle: 'Shops · Produkte · CRM', color: '#f4a1d5',
    heading: 'Mehrere Shops. Eine gemeinsame Plattform.',
    text: 'Eine zentrale Plattform verbindet Shop-Oberflächen, Produkte und CRM. Die umlaufenden Impulse stehen für den API-basierten Austausch zwischen diesen Bereichen.',
    scene: `${line('M110 78 200 140 290 78 M110 202 200 140 290 202','motion-stream')}
      <circle class="motion-halo" cx="200" cy="140" r="60"/><circle class="motion-card motion-pulse" cx="200" cy="140" r="38"/>${text(200,145,'API')}
      ${card(38,40,104,74,`<path class="motion-outline" d="M54 67h72l-8-14H62Z M60 69v26h60V69"/>${text(90,132,'SHOP A')}`, 'motion-float')}
      ${card(258,40,104,74,`<path class="motion-outline" d="M274 67h72l-8-14h-56Z M280 69v26h60V69"/>${text(310,132,'SHOP B')}`, 'motion-float-alt')}
      ${card(38,174,104,64,`${text(90,212,'PRODUKTE')}`)}
      ${card(258,174,104,64,`${text(310,212,'CRM')}`)}`,
  },
  'api-testautomatisierung': {
    label: 'API quality', subtitle: 'Requests · Tests · Validierung', color: '#b3ed88',
    heading: 'Schnittstellen prüfen, bevor Prozesse weiterlaufen.',
    text: 'Ein Request durchläuft eine Reihe von Prüfungen. Die aufeinanderfolgenden Häkchen visualisieren dokumentierte Testfälle und reproduzierbare Validierung.',
    scene: `${card(30,48,340,184,`${dot(50,67)}${dot(68,67,-1)}${dot(86,67,-2)}${line('M45 83h310')}
      ${text(105,118,'REQUEST')}${line('M171 114h52','motion-stream')}
      ${[113,155,197].map((y,i)=>`<g class="motion-test" style="animation-delay:${i*.7}s">${line(`M246 ${y}l7 7 13-16`)}${line(`M285 ${y}h50`)}</g>`).join('')}
      ${line('M52 147h95 M52 164h67 M52 181h84')}
      <rect class="motion-scan" x="45" y="90" width="310" height="3" rx="1"/>`)}${text(200,262,'AUTOMATISIERTE VALIDIERUNG')}`,
  },
}

function scene(motion: Motion): string {
  return `<svg class="project-motion-scene" viewBox="0 0 400 280" fill="none" aria-hidden="true">${motion.scene}</svg>`
}

export function projectPreview(project: Project): string {
  const motion = motions[project.slug]
  if (!motion) return ''
  return `<div class="project-motion-preview" style="--motion-accent:${motion.color}">${scene(motion)}<div><strong>${motion.label}</strong><small>${motion.subtitle}</small></div></div>`
}

export function projectShowcase(project: Project): string {
  const motion = motions[project.slug]
  if (!motion) return ''
  return `<section class="container-wide dayra-showcase reveal" aria-labelledby="project-motion-heading">
    <div class="project-motion-panel" style="--motion-accent:${motion.color}">
      <div class="project-motion-copy"><span class="eyebrow">${motion.label}</span><h2 id="project-motion-heading">${motion.heading}</h2><p>${motion.text}</p><div class="project-motion-topics">${motion.subtitle.split(' · ').map((label)=>`<span>${label}</span>`).join('')}</div></div>
      <figure class="project-motion-visual">${scene(motion)}<figcaption>Animierte Prozessillustration · ${motion.subtitle}</figcaption></figure>
    </div>
  </section>`
}
