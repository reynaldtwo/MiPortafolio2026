import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile_frontend',
    label: { en: 'Mobile / Frontend', es: 'Mobile / Frontend' },
    items: ['Flutter', 'Responsive UI systems', 'Figma handoff discipline', 'PWA with ASP.NET Core'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', es: 'Backend' },
    items: [
      '.NET / ASP.NET Core',
      'REST APIs',
      'Integration contracts',
      'Background services and workers',
    ],
  },
  {
    id: 'data',
    label: { en: 'Data', es: 'Datos' },
    items: ['SQL Server (T-SQL)', 'PostgreSQL', 'SQLite', 'Reporting and BI workflows'],
  },
  {
    id: 'cloud_devops',
    label: { en: 'Cloud / DevOps', es: 'Cloud / DevOps' },
    items: ['Azure SQL', 'Azure VMs', 'IIS deployments', 'Production hardening'],
  },
  {
    id: 'erp_pos',
    label: { en: 'ERP / POS', es: 'ERP / POS' },
    items: ['Business Central (AL)', 'LS Central / POS', 'OData / SOAP / REST services'],
  },
  {
    id: 'automation_ai',
    label: { en: 'Automation / AI', es: 'Automatizacion / AI' },
    items: ['PowerShell automation', 'n8n bots', 'Teams/WhatsApp/Outlook integrations', 'OpenAI-assisted workflows'],
  },
];
