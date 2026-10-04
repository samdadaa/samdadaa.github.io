export type ProjectCategory = 'Business Solutions' | 'Automation' | 'Private Product' | 'Quality & Data'

export type Project = {
  slug: string
  title: string
  kicker: string
  category: ProjectCategory
  featured: boolean
  summary: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
  highlights: string[]
  privacyNote?: string
}

export type SkillGroup = {
  title: string
  subtitle: string
  items: string[]
}

export const profile = {
  name: 'Samer Dadah',
  role: 'Softwareentwickler · Dynamics 365 · SaaS · Automation',
  location: 'Köln / Hürth, Deutschland',
  email: 'samdadada8@gmail.com',
  github: 'https://github.com/samdadaa',
  linkedin: 'https://www.linkedin.com/in/samer-dadah/',
  resume: '/Samer_Dadah_Lebenslauf.pdf',
}

export const projects: Project[] = [
  {
    slug: 'wasserversorger',
    title: 'Branchenlösung Wasserversorger',
    kicker: 'Business Central · End-to-End Branchenprozess',
    category: 'Business Solutions',
    featured: true,
    summary: 'Eine modulare Business-Central-Lösung für Stammdaten, Tarifierung, Messwesen, Jahresabrechnung, Abschläge, Buchung und geführte Benutzerprozesse.',
    challenge: 'Wasserwirtschaftliche Prozesse verbinden technische Messdaten, historische Tarife, Vertragslogik, Abrechnung und Finanzbuchhaltung. Die Fachlogik muss nachvollziehbar bleiben und gleichzeitig sicher in den Business-Central-Standard integriert werden.',
    solution: 'Ich arbeite an der fachlichen und technischen Umsetzung als AL-Lösung mit klar getrennten Modulen, historisierten Zuordnungen, standardnaher Buchungslogik, Plausibilitätsprüfungen, geführten Workflows und eingebetteter Dokumentation.',
    impact: [
      'Durchgängiger Prozess von Abnahmestelle und Messwert bis zur Abrechnung',
      'Weniger manuelle Schritte durch geführte Aktionen und Vorbelegungen',
      'Standardnahe Finanzbuchhaltung statt paralleler Sonderlogik',
      'Nachvollziehbare Historie für vertrags- und tarifbezogene Daten',
    ],
    technologies: ['AL', 'Business Central SaaS', 'APIs', 'Reporting', 'Azure DevOps / TFS'],
    highlights: ['Messwerterfassung', 'Plausibilitätsprüfung', 'Tarifierung', 'Abschlagspläne', 'Jahresabrechnung', 'Fibu-Integration', 'Embedded UX-Dokumentation'],
    privacyNote: 'Darstellung bewusst ohne kundenbezogene Daten oder interne Quelltexte.',
  },
  {
    slug: 'crm-business-central-automation',
    title: 'CRM ↔ Business Central Automation',
    kicker: 'Integration · Synchronisation · Prozessautomatisierung',
    category: 'Automation',
    featured: true,
    summary: 'Integrations- und Synchronisationsprozesse zwischen Microsoft Dynamics CRM und Business Central, inklusive Buchungssätzen, Stammdaten und API-gestützter Navigation.',
    challenge: 'Geschäftsdaten entstehen in unterschiedlichen Systemen. Ohne robuste Synchronisation führen Medienbrüche, doppelte Pflege und fehlende Verknüpfungen schnell zu Inkonsistenzen.',
    solution: 'Entwicklung und Optimierung von Integrationsprozessen mit C#, AL, Microsoft.Xrm.Sdk, Business-Central-APIs und Web-APIs. Dazu gehören automatische Buchungsprozesse, Datensynchronisation und nachvollziehbare Systemverknüpfungen.',
    impact: [
      'Reduzierter manueller Aufwand',
      'Verbesserte Datenkonsistenz zwischen CRM und ERP',
      'Nachvollziehbare Verknüpfung zwischen fachlichen Datensätzen',
      'Automatisierte Abläufe anstelle manueller Übergaben',
    ],
    technologies: ['C#', '.NET', 'AL', 'Dynamics CRM', 'Business Central', 'OData / Web API', 'Postman'],
    highlights: ['Synchronisation', 'Buchungssätze', 'Kostenträger', 'Dataverse / CRM Mapping', 'API-Flows', 'Fehleranalyse'],
    privacyNote: 'Kunden- und Projektdaten werden nicht veröffentlicht.',
  },
  {
    slug: 'business-central-prozesse',
    title: 'Business Central Prozessentwicklung',
    kicker: 'Extensions · Reports · Verkauf · Versand',
    category: 'Business Solutions',
    featured: false,
    summary: 'Erweiterung von Business Central durch kundenspezifische Extensions, Beleg- und Reportanpassungen sowie Verkaufs-, Buchungs- und Versandprozesse.',
    challenge: 'Standardprozesse müssen häufig erweitert werden, ohne Updatefähigkeit, Nachvollziehbarkeit und Bedienbarkeit zu verlieren.',
    solution: 'Umsetzung in AL mit sauber getrennten Extensions, Event-basierten Erweiterungen, API-Anbindungen und standardnahen Prozessschritten.',
    impact: [
      'Passgenaue Unterstützung realer Geschäftsprozesse',
      'Höhere Benutzerfreundlichkeit in wiederkehrenden Abläufen',
      'Automatisierung von Verkaufs- und Versandprozessen',
    ],
    technologies: ['AL', 'Business Central Cloud', 'Word / RDLC Reports', 'APIs'],
    highlights: ['Belege', 'Reports', 'Verkaufsprozesse', 'Versandplanung', 'Rahmenaufträge', 'Buchungslogik'],
  },
  {
    slug: 'zeiterfassung-business-central',
    title: 'Zeiterfassung in Business Central',
    kicker: 'Business Application · Prozessintegration',
    category: 'Business Solutions',
    featured: true,
    summary: 'Eine Business-Central-Lösung zur strukturierten Erfassung von Arbeitszeiten und zur Einbindung der Zeiterfassung in bestehende Geschäftsprozesse.',
    challenge: 'Zeitdaten sollen dort verfügbar sein, wo operative Prozesse bereits stattfinden, ohne zusätzliche Medienbrüche oder parallele Datenpflege.',
    solution: 'Konzeption und Umsetzung innerhalb von Business Central mit Fokus auf klare Bedienung, saubere Datenstruktur und Erweiterbarkeit.',
    impact: [
      'Zentrale Erfassung innerhalb der bestehenden Business-Anwendung',
      'Weniger Systemwechsel für Anwenderinnen und Anwender',
      'Grundlage für Auswertung und weitere Prozessautomatisierung',
    ],
    technologies: ['AL', 'Business Central', 'Reporting'],
    highlights: ['Zeiterfassung', 'Validierung', 'Business-Integration', 'Auswertung'],
  },
  {
    slug: 'datenmigration',
    title: 'Migration & Analyse-Tools',
    kicker: 'Data · Mapping · Imports',
    category: 'Quality & Data',
    featured: false,
    summary: 'Tools und Prozesse für Stammdatenimport, Mapping, Analyse und strukturierte Datenübernahme in Migrationsprojekten.',
    challenge: 'Migrationen scheitern selten am reinen Import – entscheidend sind Datenqualität, Mapping, Validierung und reproduzierbare Abläufe.',
    solution: 'Entwicklung manueller und automatisierter Importwege sowie unterstützender Mapping- und Analysewerkzeuge mit C#, AL und SQL.',
    impact: [
      'Strukturiertere Vorbereitung komplexer Migrationen',
      'Verbesserte Datenqualität vor der Übernahme',
      'Beschleunigte wiederholbare Importprozesse',
    ],
    technologies: ['C#', 'AL', 'SQL Server', 'Business Central'],
    highlights: ['Stammdatenimport', 'Mapping', 'Analyse', 'Migration', 'Validierung'],
  },
  {
    slug: 'floday-dayra',
    title: 'FloDay / Dayra',
    kicker: 'Private Product · Workforce Management · AI',
    category: 'Private Product',
    featured: true,
    summary: 'Eine eigenentwickelte Workforce-Management-Plattform mit Portal, API und Mobile-App für Zeiterfassung, Einsatzplanung, Personalbedarf und intelligente Entscheidungsunterstützung.',
    challenge: 'Dienstplanung verbindet Verfügbarkeit, Arbeitszeitmodelle, Compliance, Personalbedarf, Abwesenheiten und operative Änderungen. Klassische Oberflächen machen diese Zusammenhänge schnell unübersichtlich.',
    solution: 'Entwicklung als modulare SaaS-Plattform mit TypeScript-Stack, zentraler API, PostgreSQL/Prisma und einer agentenfähigen Architektur, in der AI auf klar definierte Business Actions zugreift.',
    impact: [
      'Einheitliche Plattform für Planung, Zeit und Workforce-Daten',
      'Vorbereitung auf AI-Agenten mit kontrollierten Tools und Berechtigungen',
      'Mehrmandantenfähige Produktarchitektur statt Einzellösung',
      'Portal- und Mobile-Workflows aus einer gemeinsamen Domain',
    ],
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'AI Agents'],
    highlights: ['Dienstplanung', 'Zeiterfassung', 'Staffing', 'Compliance', 'Mobile', 'Multi-Tenant', 'Agent-ready SaaS'],
  },
  {
    slug: 'commerce-crm-platform',
    title: 'Commerce / Shop & CRM Platform',
    kicker: 'Private Product · Commerce · Sales',
    category: 'Private Product',
    featured: true,
    summary: 'Eine eigene Commerce-Plattform mit mehreren Shops, Shop-Builder, Produktverwaltung, Sales-/CRM-Funktionen und API-zentrierter Architektur.',
    challenge: 'Commerce-Systeme brauchen gleichzeitig flexible Gestaltung, konsistente Produkt- und Kundendaten sowie klar getrennte Mandanten und Shops.',
    solution: 'Entwicklung einer modularen Webplattform mit TypeScript, API-Backend, relationalem Datenmodell und einem visuellen Shop-Design-Ansatz.',
    impact: [
      'Technische Grundlage für mehrere Shops und Marken',
      'Eigene Commerce- und Sales-Prozesse ohne starre Theme-Abhängigkeit',
      'API-basierte Basis für spätere Automatisierung und Agenten',
    ],
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Prisma', 'REST API'],
    highlights: ['Multi-Shop', 'Shop Builder', 'Produkte', 'CRM / Sales', 'Session & Auth', 'API-first'],
  },
  {
    slug: 'api-testautomatisierung',
    title: 'API & Testautomatisierung',
    kicker: 'Quality Engineering · Schnittstellen',
    category: 'Quality & Data',
    featured: false,
    summary: 'API-Entwicklung sowie Test- und Validierungsmechanismen für stabile Datenkommunikation zwischen CRM, Business Central und weiteren Systemen.',
    challenge: 'Schnittstellenfehler werden teuer, wenn sie erst in produktiven Folgeprozessen sichtbar werden.',
    solution: 'API-Tests, dokumentierte Testfälle und Validierung mit C#, AL, NUnit und Postman entlang realer Integrationsszenarien.',
    impact: [
      'Frühere Erkennung von Integrationsfehlern',
      'Bessere Reproduzierbarkeit durch dokumentierte Testfälle',
      'Höhere Stabilität von Schnittstellenprozessen',
    ],
    technologies: ['C#', 'AL', 'NUnit', 'Postman', 'Web API'],
    highlights: ['API Testing', 'Validierung', 'Testfälle', 'Regression', 'Fehleranalyse'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Microsoft Business Applications',
    subtitle: 'Mein aktueller beruflicher Schwerpunkt',
    items: ['Dynamics 365 Business Central', 'Dynamics CRM / Dataverse', 'AL', 'C# / .NET', 'Microsoft.Xrm.Sdk', 'OData / REST APIs', 'Word & RDLC Reports'],
  },
  {
    title: 'Software & SaaS Engineering',
    subtitle: 'Von Domain-Modell bis produktiver Webplattform',
    items: ['TypeScript', 'JavaScript', 'React', 'NestJS', 'Prisma', 'PostgreSQL', 'SQL Server', 'MySQL', 'Docker'],
  },
  {
    title: 'Integration & Automation',
    subtitle: 'Systeme verbinden, Abläufe reduzieren, Daten konsistent halten',
    items: ['API Design', 'Synchronisation', 'Event-basierte Erweiterungen', 'Import & Migration', 'Mapping', 'Validierung', 'Postman'],
  },
  {
    title: 'DevOps & Engineering Tools',
    subtitle: 'Nachvollziehbare Entwicklung und Zusammenarbeit',
    items: ['Git', 'GitHub', 'Azure DevOps', 'TFS', 'Visual Studio', 'Visual Studio Code', 'XrmToolBox'],
  },
  {
    title: 'AI-assisted Engineering',
    subtitle: 'AI als Engineering-Werkzeug – nicht als Ersatz für Architektur',
    items: ['ChatGPT / GPT', 'OpenAI Codex', 'Claude', 'Gemini', 'Agent-ready SaaS', 'Tool-based Agents', 'Human-in-the-loop'],
  },
]

export const experience = [
  {
    period: '09/2024 – heute',
    title: 'Dynamics 365 Developer',
    company: '360 Consulting GmbH · Köln',
    text: 'Entwicklung, Integration und Synchronisation von Lösungen in Microsoft Dynamics 365 Business Central und Dynamics CRM. Extensions, Plugins, Reports, APIs sowie kundenindividuelle Verkaufs-, Buchungs- und Versandprozesse.',
  },
  {
    period: '07/2023 – 07/2025',
    title: 'Fachinformatiker für Anwendungsentwicklung (IHK)',
    company: 'Umschulung · Köln',
    text: 'Praxisorientierte Ausbildung in Softwareentwicklung, Datenbanken, Webtechnologien und Software Engineering. Das Abschlussprojekt behandelte ein Synchronisationssystem zwischen Dynamics CRM und Business Central.',
  },
]

export const brandTools = [
  { name: 'Business Central', icon: 'microsoft', fallback: 'BC' },
  { name: 'Dynamics 365', icon: 'dynamics365', fallback: 'D365' },
  { name: 'C#', icon: 'csharp', fallback: 'C#' },
  { name: '.NET', icon: 'dotnet', fallback: '.NET' },
  { name: 'TypeScript', icon: 'typescript', fallback: 'TS' },
  { name: 'JavaScript', icon: 'javascript', fallback: 'JS' },
  { name: 'React', icon: 'react', fallback: 'R' },
  { name: 'NestJS', icon: 'nestjs', fallback: 'N' },
  { name: 'PostgreSQL', icon: 'postgresql', fallback: 'PG' },
  { name: 'MySQL', icon: 'mysql', fallback: 'SQL' },
  { name: 'Prisma', icon: 'prisma', fallback: 'P' },
  { name: 'Docker', icon: 'docker', fallback: 'D' },
  { name: 'Git', icon: 'git', fallback: 'G' },
  { name: 'GitHub', icon: 'github', fallback: 'GH' },
  { name: 'Azure DevOps', icon: 'azuredevops', fallback: 'ADO' },
  { name: 'Postman', icon: 'postman', fallback: 'PM' },
  { name: 'VS Code', icon: 'visualstudiocode', fallback: 'VSC' },
  { name: 'Visual Studio', icon: 'visualstudio', fallback: 'VS' },
  { name: 'OpenAI / GPT', icon: 'openai', fallback: 'AI' },
  { name: 'Claude', icon: 'anthropic', fallback: 'CL' },
  { name: 'Gemini', icon: 'googlegemini', fallback: 'GM' },
]
