import { dayraPreview, dayraShowcase } from './dayra.js'
import { projectPreview, projectShowcase } from './project-motion.js'
import { brandTools, experience, localToolLogos, profile, projects, skillGroups, type Project, type ProjectCategory } from './content.js'

const appRoot = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement
if (!appRoot) throw new Error('App root not found')

const categories: Array<'Alle' | ProjectCategory> = ['Alle', 'Business Solutions', 'Automation', 'Private Product', 'Quality & Data']

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;',
  }[char] ?? char))
}

function icon(name: string, size = 20): string {
  const icons: Record<string, string> = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.27 5.27 0 0 0 19.08.3S17.9-.08 15 1.8a13.38 13.38 0 0 0-6 0C6.1-.08 4.92.3 4.92.3a5.27 5.27 0 0 0-.14 3A5.65 5.65 0 0 0 3.28 7.3c0 5.63 3.44 6.88 6.72 7.25A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    spark: '<path d="m12 3-1.8 4.7L6 9.5l4.2 1.8L12 16l1.8-4.7L18 9.5l-4.2-1.8L12 3Z"/><path d="m5 15-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15Z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] ?? icons.code}</svg>`
}

function brandIcon(slug: string, fallback: string, name: string): string {
  return `<span class="brand-mark" title="${escapeHtml(name)}">
    <img loading="lazy" src="${localToolLogos[slug] ?? `https://cdn.simpleicons.org/${encodeURIComponent(slug)}`}" alt="" data-brand-image />
    <span class="brand-fallback">${escapeHtml(fallback)}</span>
  </span>`
}

function navLink(path: string, label: string): string {
  const current = window.location.pathname
  const active = path === '/' ? current === '/' : current.startsWith(path)
  return `<a class="nav-link${active ? ' active' : ''}" href="${path}" data-link>${label}</a>`
}

function layout(content: string): string {
  return `
    <div class="site-shell">
      <div class="ambient ambient-a"></div><div class="ambient ambient-b"></div>
      <header class="site-header" id="top">
        <div class="nav-wrap container-wide">
          <a class="brand" href="/" data-link aria-label="Samer Dadah – Startseite">
            <span class="brand-copy"><strong>Samer Dadah</strong><small>Software Developer</small></span>
          </a>
          <nav class="desktop-nav" aria-label="Hauptnavigation">
            ${navLink('/', 'Home')}
            ${navLink('/projects', 'Projekte')}
            ${navLink('/expertise', 'Expertise')}
            ${navLink('/about', 'Über mich')}
            ${navLink('/contact', 'Kontakt')}
          </nav>
          <div class="nav-actions">
            <button class="icon-button" type="button" id="theme-toggle" aria-label="Darstellung wechseln">${icon('moon')}</button>
            <a class="button button-compact" href="/contact" data-link>Kontakt ${icon('arrow', 17)}</a>
            <button class="icon-button mobile-menu-button" type="button" id="mobile-menu-button" aria-label="Menü öffnen">${icon('menu')}</button>
          </div>
        </div>
        <div class="mobile-nav" id="mobile-nav" hidden>
          ${navLink('/', 'Home')}${navLink('/projects', 'Projekte')}${navLink('/expertise', 'Expertise')}${navLink('/about', 'Über mich')}${navLink('/contact', 'Kontakt')}
        </div>
      </header>
      <main>${content}</main>
      <footer class="site-footer">
        <div class="container-wide footer-grid">
          <div><a class="brand footer-brand" href="/" data-link><span class="brand-copy"><strong>Samer Dadah</strong><small>Softwareentwicklung · Dynamics 365 · SaaS</small></span></a></div>
          <p>Technik, die Geschäftsprozesse verständlicher macht – von Business Central bis zur eigenen SaaS-Plattform.</p>
          <div class="footer-links"><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a><a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:${profile.email}">E-Mail</a></div>
        </div>
        <div class="container-wide footer-bottom"><span>© ${new Date().getFullYear()} Samer Dadah</span><span>TypeScript · Custom CSS</span></div>
      </footer>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>
    </div>`
}

function sectionHead(eyebrow: string, title: string, text: string): string {
  return `<div class="section-head reveal"><span class="eyebrow">${escapeHtml(eyebrow)}</span><h2>${title}</h2><p>${escapeHtml(text)}</p></div>`
}

function projectCard(project: Project): string {
  return `<article class="project-card reveal" data-project-category="${project.category}">
    <div class="project-card-top"><span class="category-pill">${project.category}</span><span class="project-index">0${projects.indexOf(project) + 1}</span></div>
    ${project.slug === 'floday-dayra' ? dayraPreview() : projectPreview(project)}
    <div><p class="project-kicker">${escapeHtml(project.kicker)}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p></div>
    <div class="tag-row">${project.technologies.slice(0, 5).map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>
    <a class="text-link" href="/projects/${project.slug}" data-link>Case ansehen ${icon('arrow', 17)}</a>
  </article>`
}

function toolsRail(limit?: number): string {
  const list = limit ? brandTools.slice(0, limit) : brandTools
  return `<div class="tool-grid">${list.map((tool) => `<div class="tool-chip reveal">${brandIcon(tool.icon, tool.fallback, tool.name)}<span>${escapeHtml(tool.name)}</span></div>`).join('')}</div>`
}

function homePage(): string {
  const featured = projects.filter((p) => p.featured).slice(0, 6)
  return layout(`
    <section class="hero container-wide">
      <div class="hero-copy reveal">
        <div class="status-pill"><span class="status-dot"></span> Dynamics 365 Developer · Köln</div>
        <h1>Ich entwickle <span class="gradient-text">Business Software</span>, die Prozesse wirklich verbessert.</h1>
        <p class="hero-lead">Von Microsoft Dynamics 365 und Business Central über APIs und Automatisierung bis zu eigenen SaaS-Produkten mit AI-Fokus.</p>
        <div class="hero-role" aria-live="polite"><span>Fokus</span><strong id="rotating-role">Business Central & Dynamics 365</strong></div>
        <div class="hero-actions"><a class="button" href="/projects" data-link>Projekte ansehen ${icon('arrow')}</a><a class="button button-secondary" href="${profile.resume}" target="_blank">Lebenslauf ${icon('download')}</a></div>
        <div class="hero-meta"><span>${icon('map', 17)} ${profile.location}</span><span>${icon('briefcase', 17)} Softwareentwicklung seit 2024 im Dynamics-Umfeld</span></div>
      </div>
      <div class="hero-visual reveal">
        <div class="profile-stage">
          <div class="profile-halo halo-one"></div><div class="profile-halo halo-two"></div>
          <div class="profile-photo-wrap"><img src="/assets/samer-dadah.jpg" alt="Porträt von Samer Dadah" class="profile-photo" /></div>
          <div class="floating-card floating-card-a"><span class="mini-icon">${icon('layers', 18)}</span><span><small>Microsoft</small><strong>Business Central</strong></span></div>
          <div class="floating-card floating-card-b"><span class="mini-icon">${icon('spark', 18)}</span><span><small>AI Engineering</small><strong>Agents & Automation</strong></span></div>
          <div class="floating-card floating-card-c"><span class="mini-icon">${icon('code', 18)}</span><span><small>Stack</small><strong>C# · AL · TypeScript</strong></span></div>
        </div>
      </div>
    </section>

    <section class="signal-strip"><div class="container-wide signal-grid"><div><strong>Dynamics 365</strong><span>CRM + Business Central</span></div><div><strong>Integration</strong><span>APIs + Synchronisation</span></div><div><strong>SaaS</strong><span>Web + Mobile + Multi-Tenant</span></div><div><strong>AI</strong><span>GPT + Codex + Claude + Gemini</span></div></div></section>

    <section class="section container-wide">
      ${sectionHead('Ausgewählte Arbeiten', 'Projekte mit <span class="gradient-text">Business Impact</span>', 'Keine Übungsprojekte, sondern Integrationen, Branchenlogik und eigene Produkte mit realem Anwendungskontext.')}
      <div class="project-grid">${featured.map(projectCard).join('')}</div>
      <div class="center-action reveal"><a class="button button-secondary" href="/projects" data-link>Alle Projekte ${icon('arrow')}</a></div>
    </section>

    <section class="section section-soft">
      <div class="container-wide split-feature">
        <div class="reveal"><span class="eyebrow">Mein Ansatz</span><h2>Standardnah, nachvollziehbar, <span class="gradient-text">automatisierbar.</span></h2><p>Ich verbinde Fachlogik mit sauberer Softwarearchitektur. Bei Business Applications bedeutet das: vorhandene Standards respektieren, Erweiterungen klar kapseln, Integrationen testbar machen und Benutzer nicht mit technischer Komplexität alleinlassen.</p></div>
        <div class="principle-grid">
          <div class="principle-card reveal"><span>${icon('layers')}</span><h3>Domain first</h3><p>Fachliche Regeln werden verständlich modelliert – nicht zwischen UI und Datenbank versteckt.</p></div>
          <div class="principle-card reveal"><span>${icon('shield')}</span><h3>Safe automation</h3><p>Automatisierung mit Validierung, klaren Zuständen und nachvollziehbarer Fehlerbehandlung.</p></div>
          <div class="principle-card reveal"><span>${icon('database')}</span><h3>Data consistency</h3><p>Synchronisation und Migration werden als Datenprozess behandelt, nicht nur als API-Call.</p></div>
          <div class="principle-card reveal"><span>${icon('spark')}</span><h3>AI with control</h3><p>AI-Assistenten greifen auf definierte Tools und Business Actions zu – mit Berechtigungen und menschlicher Kontrolle.</p></div>
        </div>
      </div>
    </section>

    <section class="section container-wide">
      ${sectionHead('Toolbox', 'Technologien, die ich <span class="gradient-text">aktiv einsetze</span>', 'Microsoft Business Applications im Beruf – moderne TypeScript-, SaaS- und AI-Stacks in meinen privaten Produktprojekten.')}
      ${toolsRail(18)}
      <div class="center-action reveal"><a class="text-link" href="/expertise" data-link>Komplette Expertise ansehen ${icon('arrow', 17)}</a></div>
    </section>

    <section class="section container-wide"><div class="cta-panel reveal"><div><span class="eyebrow">Kontakt</span><h2>Sie suchen einen Entwickler, der Business-Prozesse und Software zusammen denkt?</h2><p>Ich freue mich über Gespräche zu Softwareentwicklung, Dynamics 365, Business Central, Integrationen und SaaS-Produkten.</p></div><div class="cta-actions"><a class="button" href="/contact" data-link>Kontakt aufnehmen ${icon('arrow')}</a><a class="button button-secondary" href="mailto:${profile.email}">${icon('mail')} E-Mail</a></div></div></section>
  `)
}

function projectsPage(): string {
  return layout(`
    <section class="page-hero container-wide reveal"><span class="eyebrow">Portfolio</span><h1>Projekte zwischen <span class="gradient-text">Business Applications</span> und eigenen Produkten.</h1><p>Berufliche Integrationen, Business-Central-Lösungen, Daten- und Qualitätsthemen sowie private SaaS-Produkte. Kundendaten und interner Quellcode bleiben bewusst außen vor.</p></section>
    <section class="section container-wide section-tight">
      <div class="filter-bar reveal" role="group" aria-label="Projekte filtern">${categories.map((c, i) => `<button class="filter-button${i === 0 ? ' active' : ''}" type="button" data-filter="${c}">${c}</button>`).join('')}</div>
      <div class="project-grid project-grid-all" id="project-grid">${projects.map(projectCard).join('')}</div>
      <div class="empty-state" id="project-empty" hidden>Für diesen Filter gibt es aktuell keine Projekte.</div>
    </section>
  `)
}

function projectToolOrbit(project: Project): string {
  const usesBC = /Business Central/i.test(project.technologies.join(' ')) || project.slug === 'api-testautomatisierung'
  if (!usesBC) return ''
  const slugs = ['microsoft']
  if (project.technologies.includes('Dynamics CRM')) slugs.push('dynamics365')
  if (project.technologies.includes('C#')) slugs.push('csharp')
  if (project.technologies.includes('.NET')) slugs.push('dotnet')
  if (project.technologies.some((tech) => tech.includes('Azure DevOps'))) slugs.push('azuredevops')
  return `<div class="project-tool-orbit" aria-label="Verwendete Tools und Plattformen">
    <div class="tool-orbit-ring" aria-hidden="true"></div><div class="tool-orbit-ring tool-orbit-ring-inner" aria-hidden="true"></div>
    ${slugs.map((slug, index) => {
      const tool = brandTools.find((item) => item.icon === slug)!
      return `<div class="floating-tool floating-tool-${index}"><div class="floating-tool-logo"><img src="${localToolLogos[slug]}" alt="" /></div><span>${escapeHtml(tool.name)}</span></div>`
    }).join('')}
  </div>`
}

function projectDetailPage(project: Project): string {
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2)
  const toolOrbit = projectToolOrbit(project)
  return layout(`
    <section class="case-hero container-wide reveal${toolOrbit ? ' case-hero-with-tools' : ''}">
      <div class="case-hero-copy">
      <a class="back-link" href="/projects" data-link>← Alle Projekte</a>
      <span class="category-pill">${project.category}</span>
      <p class="project-kicker">${escapeHtml(project.kicker)}</p>
      <h1>${escapeHtml(project.title)}</h1>
      <p class="case-lead">${escapeHtml(project.summary)}</p>
      <div class="tag-row tag-row-large">${project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>
      </div>
      ${toolOrbit}
    </section>
    ${project.slug === 'floday-dayra' ? dayraShowcase() : projectShowcase(project)}
    <section class="section container-wide case-layout">
      <div class="case-main">
        <article class="case-block reveal"><span class="case-number">01</span><div><h2>Ausgangslage</h2><p>${escapeHtml(project.challenge)}</p></div></article>
        <article class="case-block reveal"><span class="case-number">02</span><div><h2>Lösung</h2><p>${escapeHtml(project.solution)}</p></div></article>
        <article class="case-block reveal"><span class="case-number">03</span><div><h2>Wirkung</h2><ul class="check-list">${project.impact.map((item) => `<li>${icon('check', 18)}<span>${escapeHtml(item)}</span></li>`).join('')}</ul></div></article>
      </div>
      <aside class="case-sidebar reveal"><div class="sticky-card"><span class="eyebrow">Schwerpunkte</span><div class="highlight-list">${project.highlights.map((h) => `<span>${escapeHtml(h)}</span>`).join('')}</div>${project.privacyNote ? `<p class="privacy-note">${icon('shield', 17)} ${escapeHtml(project.privacyNote)}</p>` : ''}<a class="button full-button" href="/contact" data-link>Projekt besprechen ${icon('arrow')}</a></div></aside>
    </section>
    ${related.length ? `<section class="section section-soft"><div class="container-wide">${sectionHead('Ähnliche Cases', 'Weitere Projekte', 'Mehr aus demselben Themenfeld.')}<div class="project-grid compact-grid">${related.map(projectCard).join('')}</div></div></section>` : ''}
  `)
}

function expertisePage(): string {
  return layout(`
    <section class="page-hero container-wide reveal"><span class="eyebrow">Expertise</span><h1>Microsoft Business Applications plus <span class="gradient-text">moderne Produktentwicklung.</span></h1><p>Mein Schwerpunkt liegt auf Dynamics 365, Business Central, Integrationen und Prozessautomatisierung. Ergänzt wird das durch TypeScript-SaaS, Datenbanken, DevOps und AI-assisted Engineering.</p></section>
    <section class="section container-wide section-tight"><div class="skill-groups">${skillGroups.map((group, index) => `<article class="skill-group reveal"><div class="skill-group-number">0${index + 1}</div><div><span class="eyebrow">${escapeHtml(group.subtitle)}</span><h2>${escapeHtml(group.title)}</h2><div class="skill-cloud">${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div></div></article>`).join('')}</div></section>
    <section class="section section-soft"><div class="container-wide">${sectionHead('Tools & Plattformen', 'Mein technisches <span class="gradient-text">Arbeitsumfeld</span>', 'Ein Überblick über die Plattformen, Entwicklungswerkzeuge, Datenbanken und AI-Tools in meinem aktuellen Stack.')} ${toolsRail()}</div></section>
    <section class="section container-wide"><div class="architecture-card reveal"><div><span class="eyebrow">Engineering Mindset</span><h2>Vom UI bis zum Business Outcome</h2><p>Ich betrachte Software nicht als Sammlung einzelner Screens. Entscheidend sind Datenfluss, Domain-Regeln, Berechtigungen, Automatisierung, Fehlerverhalten und eine UI, die den Prozess erklärt.</p></div><div class="architecture-flow"><span>UI / Portal</span><b>→</b><span>API / Actions</span><b>→</b><span>Domain Logic</span><b>→</b><span>Data / Events</span><b>→</b><span>Audit & Outcome</span></div></div></section>
  `)
}

function aboutPage(): string {
  return layout(`
    <section class="page-hero about-hero container-wide reveal"><div><span class="eyebrow">Über mich</span><h1>Softwareentwicklung mit Blick auf <span class="gradient-text">Fachlichkeit und Produkt.</span></h1><p>Ich arbeite als Dynamics 365 Developer in Köln. Mein Alltag verbindet Business Central, CRM, C#, AL, JavaScript, APIs, Reports und Integrationslogik. Parallel entwickle ich eigene SaaS-Produkte und beschäftige mich intensiv mit agentenfähiger Softwarearchitektur.</p></div><img src="/assets/samer-dadah.jpg" alt="Samer Dadah" /></section>
    <section class="section container-wide about-grid">
      <div>${sectionHead('Beruflicher Weg', 'Relevant für meine <span class="gradient-text">IT-Arbeit</span>', 'Fokus auf die Stationen und Erfahrungen, die meine heutige Entwicklungstätigkeit prägen.')}
        <div class="timeline">${experience.map((item) => `<article class="timeline-item reveal"><div class="timeline-marker"></div><div class="timeline-date">${escapeHtml(item.period)}</div><div class="timeline-content"><h3>${escapeHtml(item.title)}</h3><strong>${escapeHtml(item.company)}</strong><p>${escapeHtml(item.text)}</p></div></article>`).join('')}</div>
      </div>
      <aside class="about-aside reveal"><div class="profile-card"><span class="eyebrow">Kurzprofil</span><dl><div><dt>Rolle</dt><dd>Dynamics 365 Developer</dd></div><div><dt>Region</dt><dd>${profile.location}</dd></div><div><dt>Fokus</dt><dd>Business Central, CRM, APIs, SaaS</dd></div><div><dt>Sprachen</dt><dd>Arabisch, Deutsch, Englisch</dd></div></dl><a class="button full-button" href="${profile.resume}" target="_blank">Lebenslauf öffnen ${icon('download')}</a></div></aside>
    </section>
    <section class="section section-soft"><div class="container-wide values-grid"><div class="reveal"><span class="eyebrow">Was mir wichtig ist</span><h2>Komplexität reduzieren, ohne sie zu verstecken.</h2></div><div class="value-card reveal"><h3>Verstehen</h3><p>Vor der technischen Lösung steht die Frage, welcher Geschäftsprozess wirklich abgebildet werden soll.</p></div><div class="value-card reveal"><h3>Vereinfachen</h3><p>Gute Software macht komplexe Abläufe für Anwender klarer, nicht nur für Entwickler eleganter.</p></div><div class="value-card reveal"><h3>Verbessern</h3><p>Ich iteriere anhand von Tests, echten Workflows und konkretem Feedback – nicht nur anhand schöner Mockups.</p></div></div></section>
  `)
}

function contactPage(): string {
  return layout(`
    <section class="page-hero container-wide reveal"><span class="eyebrow">Kontakt</span><h1>Sie möchten mit mir über eine <span class="gradient-text">IT-Position oder ein Projekt</span> sprechen?</h1><p>Schreiben Sie mir direkt. Das Formular erstellt eine vollständige E-Mail in Ihrem Standard-Mailprogramm; alternativ können Sie die Adresse mit einem Klick kopieren.</p></section>
    <section class="section container-wide contact-layout section-tight">
      <div class="contact-panel reveal">
        <span class="eyebrow">Direkter Kontakt</span><h2>${profile.email}</h2><p>Für Softwareentwicklung, Dynamics 365, Business Central, Integrationen, Automatisierung und SaaS-Themen.</p>
        <div class="contact-links"><a href="mailto:${profile.email}">${icon('mail')} E-Mail schreiben</a><button type="button" id="copy-email">${icon('copy')} Adresse kopieren</button><a href="${profile.linkedin}" target="_blank" rel="noreferrer">${icon('linkedin')} LinkedIn</a><a href="${profile.github}" target="_blank" rel="noreferrer">${icon('github')} GitHub</a></div>
      </div>
      <form class="contact-form reveal" id="contact-form">
        <div class="form-row"><label>Ihr Name<input name="name" autocomplete="name" required placeholder="Max Mustermann" /></label><label>Unternehmen<input name="company" autocomplete="organization" placeholder="Unternehmen / Team" /></label></div>
        <label>Ihre E-Mail<input type="email" name="email" autocomplete="email" required placeholder="name@unternehmen.de" /></label>
        <label>Betreff<select name="topic"><option>Job / Position</option><option>Projekt / Zusammenarbeit</option><option>Dynamics 365 / Business Central</option><option>SaaS / Produktentwicklung</option><option>Sonstiges</option></select></label>
        <label>Nachricht<textarea name="message" rows="7" required placeholder="Worum geht es?"></textarea></label>
        <button class="button" type="submit">E-Mail vorbereiten ${icon('arrow')}</button>
        <p class="form-note">Ihre Eingaben werden auf dieser Website nicht gespeichert oder an einen eigenen Server gesendet.</p>
      </form>
    </section>
  `)
}

function notFoundPage(): string {
  return layout(`<section class="page-hero container-wide reveal"><span class="eyebrow">404</span><h1>Diese Seite gibt es <span class="gradient-text">noch nicht.</span></h1><p>Zurück zur Übersicht – dort finden Sie Projekte, Expertise und Kontaktmöglichkeiten.</p><div class="hero-actions"><a class="button" href="/" data-link>Zur Startseite ${icon('arrow')}</a><a class="button button-secondary" href="/projects" data-link>Projekte</a></div></section>`)
}

function render(): void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  let content = ''
  let title = 'Samer Dadah | Software Developer'
  if (path === '/') content = homePage()
  else if (path === '/projects') { content = projectsPage(); title = 'Projekte | Samer Dadah' }
  else if (path === '/expertise') { content = expertisePage(); title = 'Expertise | Samer Dadah' }
  else if (path === '/about') { content = aboutPage(); title = 'Über mich | Samer Dadah' }
  else if (path === '/contact') { content = contactPage(); title = 'Kontakt | Samer Dadah' }
  else if (path.startsWith('/projects/')) {
    const slug = path.split('/').filter(Boolean).at(-1)
    const project = projects.find((p) => p.slug === slug)
    if (project) { content = projectDetailPage(project); title = `${project.title} | Samer Dadah` }
    else content = notFoundPage()
  } else content = notFoundPage()

  appRoot.innerHTML = content
  document.title = title
  applyThemeIcon()
  wireNavigation()
  wireTheme()
  wireMobileMenu()
  wireReveal()
  wireBrandFallbacks()
  wireHomeRotation()
  wireProjectFilters()
  wireContact()
  window.scrollTo({ top: 0, behavior: 'auto' })
}

function wireNavigation(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[data-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return
      window.history.pushState({}, '', url.pathname)
      render()
    })
  })
}

function preferredTheme(): 'light' | 'dark' {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function setTheme(theme: 'light' | 'dark'): void {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (meta) meta.content = theme === 'dark' ? '#07111f' : '#f5f8fb'
  applyThemeIcon()
}

function applyThemeIcon(): void {
  const theme = (document.documentElement.dataset.theme as 'light' | 'dark' | undefined) ?? preferredTheme()
  document.documentElement.dataset.theme = theme
  const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle')
  if (toggle) {
    toggle.innerHTML = theme === 'dark' ? icon('sun') : icon('moon')
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren')
  }
}

function wireTheme(): void {
  document.querySelector<HTMLButtonElement>('#theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    setTheme(current === 'dark' ? 'light' : 'dark')
  })
}

function wireMobileMenu(): void {
  const button = document.querySelector<HTMLButtonElement>('#mobile-menu-button')
  const nav = document.querySelector<HTMLElement>('#mobile-nav')
  if (!button || !nav) return
  button.addEventListener('click', () => {
    const isHidden = nav.hidden
    nav.hidden = !isHidden
    button.innerHTML = isHidden ? icon('close') : icon('menu')
    button.setAttribute('aria-label', isHidden ? 'Menü schließen' : 'Menü öffnen')
  })
}

function wireReveal(): void {
  const items = document.querySelectorAll<HTMLElement>('.reveal')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })
  items.forEach((item) => observer.observe(item))
}

function wireBrandFallbacks(): void {
  document.querySelectorAll<HTMLImageElement>('[data-brand-image]').forEach((image) => {
    const loaded = () => image.parentElement?.classList.add('brand-loaded')
    image.addEventListener('load', loaded)
    image.addEventListener('error', () => image.remove())
    if (image.complete && image.naturalWidth > 0) loaded()
  })
}

let roleTimer: number | undefined
function wireHomeRotation(): void {
  if (roleTimer) window.clearInterval(roleTimer)
  const role = document.querySelector<HTMLElement>('#rotating-role')
  if (!role) return
  const roles = ['Business Central & Dynamics 365', 'API Integration & Automation', 'SaaS Product Engineering', 'AI-assisted Development']
  let index = 0
  roleTimer = window.setInterval(() => {
    index = (index + 1) % roles.length
    role.classList.add('role-changing')
    window.setTimeout(() => {
      role.textContent = roles[index] ?? 'Business Central & Dynamics 365'
      role.classList.remove('role-changing')
    }, 180)
  }, 3000)
}

function wireProjectFilters(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]')
  if (!buttons.length) return
  buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'))
    button.classList.add('active')
    const filter = button.dataset.filter ?? 'Alle'
    let visible = 0
    document.querySelectorAll<HTMLElement>('[data-project-category]').forEach((card) => {
      const show = filter === 'Alle' || card.dataset.projectCategory === filter
      card.hidden = !show
      if (show) visible += 1
    })
    const empty = document.querySelector<HTMLElement>('#project-empty')
    if (empty) empty.hidden = visible !== 0
  }))
}

function toast(message: string): void {
  const el = document.querySelector<HTMLElement>('#toast')
  if (!el) return
  el.textContent = message
  el.classList.add('show')
  window.setTimeout(() => el.classList.remove('show'), 2600)
}

function wireContact(): void {
  document.querySelector<HTMLButtonElement>('#copy-email')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast('E-Mail-Adresse kopiert.')
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  })

  document.querySelector<HTMLFormElement>('#contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formElement = event.currentTarget as HTMLFormElement
    const form = new FormData(formElement)
    const name = String(form.get('name') ?? '')
    const company = String(form.get('company') ?? '')
    const sender = String(form.get('email') ?? '')
    const topic = String(form.get('topic') ?? 'Kontakt')
    const message = String(form.get('message') ?? '')
    const subject = `[Portfolio] ${topic}${company ? ` – ${company}` : ''}`
    const body = `Hallo Samer,\n\n${message}\n\nViele Grüße\n${name}${company ? `\n${company}` : ''}\n${sender}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    toast('E-Mail-Entwurf wird geöffnet.')
  })
}

window.addEventListener('popstate', render)
setTheme(preferredTheme())
render()
