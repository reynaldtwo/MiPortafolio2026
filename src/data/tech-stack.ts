import {
  siAstro,
  siCss,
  siDocker,
  siDotnet,
  siFlutter,
  siGithubcopilot,
  siGit,
  siHtml5,
  siJavascript,
  siN8n,
  siOpenjdk,
  siPostgresql,
  siSqlite,
  siTypescript,
} from 'simple-icons';

export interface IconData {
  path: string;
  hex: string;
}

export type LinkKind = 'core' | 'platform' | 'ecosystem';

export interface TechGlyph {
  id: string;
  label: string;
  icon?: IconData;
  iconSrc?: string;
  brandHex?: string;
  fallback?: string;
}

export interface TechNode extends TechGlyph {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  labelDx?: number;
  labelDy?: number;
  showOnMobile?: boolean;
}

export interface TechLink {
  from: string;
  to: string;
  kind: LinkKind;
}

export const techNodes: TechNode[] = [
  { id: 'flutter', label: 'Flutter', x: 15, y: 23, size: 50, dx: -6, dy: -4, icon: siFlutter },
  { id: 'astro', label: 'Astro', x: 31, y: 14, size: 46, dx: 6, dy: -5, icon: siAstro },
  { id: 'html', label: 'HTML5', x: 50, y: 11, size: 44, dx: 5, dy: -4, icon: siHtml5 },
  { id: 'css', label: 'CSS', x: 67, y: 17, size: 40, dx: -4, dy: -3, icon: siCss },
  { id: 'js', label: 'JavaScript', x: 84, y: 30, size: 46, dx: 4, dy: 3, icon: siJavascript },
  { id: 'ts', label: 'TypeScript', x: 90, y: 48, size: 42, dx: 4, dy: 3, icon: siTypescript },
  {
    id: 'dotnet',
    label: '.NET',
    x: 70,
    y: 76,
    size: 48,
    dx: -3,
    dy: 2,
    icon: siDotnet,
    showOnMobile: true,
  },
  {
    id: 'sqlserver',
    label: 'SQL Server',
    x: 49,
    y: 82,
    size: 40,
    dx: 3,
    dy: 3,
    labelDx: 0,
    labelDy: 2,
    iconSrc: '/icons/brands/sql-server.svg',
    brandHex: '0078d4',
    fallback: 'SQL',
    showOnMobile: true,
  },
  { id: 'java', label: 'Java', x: 58, y: 84, size: 44, dx: -4, dy: 4, icon: siOpenjdk },
  { id: 'postgres', label: 'PostgreSQL', x: 35, y: 84, size: 44, dx: 4, dy: 4, icon: siPostgresql },
  { id: 'sqlite', label: 'SQLite', x: 16, y: 73, size: 40, dx: -4, dy: 3, icon: siSqlite },
  { id: 'docker', label: 'Docker', x: 9, y: 52, size: 44, dx: -4, dy: -2, icon: siDocker },
  { id: 'git', label: 'Git', x: 9, y: 34, size: 38, dx: -3, dy: 2, icon: siGit },
  {
    id: 'chatfuel',
    label: 'Chatfuel',
    x: 41,
    y: 56,
    size: 50,
    dx: -1,
    dy: 1,
    iconSrc: '/icons/brands/chatfuel.png',
    brandHex: 'ff5d8f',
    fallback: 'CF',
    showOnMobile: true,
  },
  { id: 'n8n', label: 'n8n', x: 34, y: 61, size: 44, dx: -2, dy: 2, icon: siN8n, showOnMobile: true },
  {
    id: 'microsoft',
    label: 'Microsoft',
    x: 50,
    y: 50,
    size: 48,
    dx: 1,
    dy: 1,
    iconSrc: '/icons/brands/microsoft.svg',
    brandHex: '00a4ef',
    fallback: 'MS',
    showOnMobile: true,
  },
  {
    id: 'azure',
    label: 'Azure',
    x: 61,
    y: 44,
    size: 42,
    dx: 2,
    dy: -2,
    iconSrc: '/icons/brands/azure.svg',
    brandHex: '0078d4',
    fallback: 'AZ',
    showOnMobile: true,
  },
  {
    id: 'powerautomate',
    label: 'Power Automate',
    x: 74,
    y: 38,
    size: 34,
    dx: 1,
    dy: -1,
    labelDx: 1,
    labelDy: -1,
    iconSrc: '/icons/brands/power-automate.svg',
    brandHex: '2d7dfa',
    fallback: 'PA',
    showOnMobile: true,
  },
  {
    id: 'outlook',
    label: 'Outlook',
    x: 91,
    y: 60,
    size: 34,
    dx: 1,
    dy: 1,
    labelDx: 1,
    labelDy: 1,
    iconSrc: '/icons/brands/outlook.svg',
    brandHex: '0078d4',
    fallback: 'OL',
    showOnMobile: true,
  },
  {
    id: 'teams',
    label: 'Teams',
    x: 82,
    y: 77,
    size: 34,
    dx: 1,
    dy: 1,
    labelDx: 0,
    labelDy: 2,
    iconSrc: '/icons/brands/teams.svg',
    brandHex: '6264a7',
    fallback: 'TM',
    showOnMobile: true,
  },
  {
    id: 'copilot',
    label: 'Copilot',
    x: 57,
    y: 27,
    size: 34,
    dx: 1,
    dy: -1,
    fallback: 'CP',
    icon: siGithubcopilot,
    showOnMobile: true,
  },
  {
    id: 'al',
    label: 'AL',
    x: 55,
    y: 74,
    size: 32,
    dx: 1,
    dy: 1,
    labelDx: 0,
    labelDy: -1,
    iconSrc: '/icons/brands/al.svg',
    brandHex: '00b7c3',
    fallback: 'AL',
    showOnMobile: true,
  },
];

export const techLinks: TechLink[] = [
  { from: 'microsoft', to: 'azure', kind: 'core' },
  { from: 'microsoft', to: 'teams', kind: 'core' },
  { from: 'microsoft', to: 'outlook', kind: 'core' },
  { from: 'microsoft', to: 'powerautomate', kind: 'core' },
  { from: 'microsoft', to: 'copilot', kind: 'core' },
  { from: 'microsoft', to: 'al', kind: 'core' },
  { from: 'microsoft', to: 'sqlserver', kind: 'core' },
  { from: 'azure', to: 'dotnet', kind: 'platform' },
  { from: 'chatfuel', to: 'n8n', kind: 'platform' },
  { from: 'n8n', to: 'microsoft', kind: 'platform' },
  { from: 'n8n', to: 'azure', kind: 'platform' },
  { from: 'flutter', to: 'astro', kind: 'ecosystem' },
  { from: 'astro', to: 'html', kind: 'ecosystem' },
  { from: 'html', to: 'css', kind: 'ecosystem' },
  { from: 'css', to: 'js', kind: 'ecosystem' },
  { from: 'js', to: 'ts', kind: 'ecosystem' },
  { from: 'ts', to: 'dotnet', kind: 'ecosystem' },
  { from: 'dotnet', to: 'sqlserver', kind: 'ecosystem' },
  { from: 'sqlserver', to: 'postgres', kind: 'ecosystem' },
  { from: 'dotnet', to: 'java', kind: 'ecosystem' },
  { from: 'dotnet', to: 'postgres', kind: 'ecosystem' },
  { from: 'postgres', to: 'sqlite', kind: 'ecosystem' },
  { from: 'sqlite', to: 'docker', kind: 'ecosystem' },
  { from: 'docker', to: 'git', kind: 'ecosystem' },
  { from: 'flutter', to: 'n8n', kind: 'ecosystem' },
  { from: 'chatfuel', to: 'microsoft', kind: 'ecosystem' },
  { from: 'chatfuel', to: 'azure', kind: 'ecosystem' },
  { from: 'n8n', to: 'dotnet', kind: 'ecosystem' },
  { from: 'n8n', to: 'postgres', kind: 'ecosystem' },
  { from: 'azure', to: 'powerautomate', kind: 'ecosystem' },
  { from: 'powerautomate', to: 'outlook', kind: 'ecosystem' },
  { from: 'teams', to: 'outlook', kind: 'ecosystem' },
  { from: 'copilot', to: 'js', kind: 'ecosystem' },
  { from: 'al', to: 'dotnet', kind: 'ecosystem' },
];

export const brandStackIcons: TechGlyph[] = techNodes.map(({ id, label, icon, iconSrc, brandHex, fallback }) => ({
  id,
  label,
  icon,
  iconSrc,
  brandHex,
  fallback,
}));

export const resolveTechBrand = (glyph: Pick<TechGlyph, 'icon' | 'brandHex'>) => `#${glyph.icon?.hex ?? glyph.brandHex ?? '2f7df6'}`;
