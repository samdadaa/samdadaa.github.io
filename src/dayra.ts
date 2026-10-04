// Adapted from floday-website/src/components/marketing/DayraLiveStage.tsx.
function dayraStage(compact = false): string {
  return `<div class="dayra-live-stage" aria-hidden="true">
    ${['one', 'two', 'three'].map((n) => `<span class="dayra-live-aura dayra-live-aura-${n}"></span><span class="dayra-live-orbit dayra-live-orbit-${n}"></span>`).join('')}
    ${['one', 'two', 'three', 'four'].map((n) => `<div class="dayra-live-mark dayra-live-mark-${n}"><i></i></div>`).join('')}
    <div class="dayra-live-core">
      <div class="dayra-live-ring ring-outer"></div>
      <div class="dayra-live-ring ring-middle"></div>
      <div class="dayra-live-ring ring-inner"></div>
      <div class="dayra-live-center"><span></span></div>
    </div>
    ${compact ? '' : `<div class="dayra-live-chip chip-one"><strong>Kontext</strong><small>versteht Zusammenhänge</small></div>
    <div class="dayra-live-chip chip-two"><strong>Signale</strong><small>macht Relevantes sichtbar</small></div>
    <div class="dayra-live-chip chip-three"><strong>Nächste Schritte</strong><small>bereitet Optionen vor</small></div>`}
  </div>`
}

export function dayraPreview(): string {
  return `<div class="dayra-preview">${dayraStage(true)}<div><strong>Dayra</strong><small>Intelligente Assistenz für FloDay</small></div></div>`
}

export function dayraShowcase(): string {
  return `<section class="container-wide dayra-showcase reveal" aria-labelledby="dayra-heading">
    <div class="dayra-showcase-panel">
      <div class="dayra-showcase-copy">
        <span class="eyebrow">FloDay — People &amp; Time</span>
        <h2 id="dayra-heading">Komplexe Planung.<br>Klare nächste Schritte.</h2>
        <p>Dayra ist die intelligente Assistentin meiner FloDay-Plattform. Ihre visuelle Identität verbindet Kontext, Signale und Entscheidungsunterstützung in einer lebendigen Animation.</p>
        <ol class="dayra-workflow">
          <li><span>01</span><div><strong>Erkennen</strong><small>Konflikte und Lücken im Planungskontext</small></div></li>
          <li><span>02</span><div><strong>Erklären</strong><small>Regeln, Daten und Zusammenhänge verständlich machen</small></div></li>
          <li><span>03</span><div><strong>Vorbereiten</strong><small>Optionen für kontrollierte nächste Schritte</small></div></li>
        </ol>
      </div>
      <figure class="dayra-showcase-visual">${dayraStage()}<figcaption>Dayra · Animierte Produktidentität aus der FloDay-Website</figcaption></figure>
    </div>
  </section>`
}
