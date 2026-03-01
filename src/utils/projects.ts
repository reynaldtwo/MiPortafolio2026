import type { Locale, LocalizedText, Project, ProjectCategory } from '../types/content';

export function translateText(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

export function filterProjectsByCategory(projects: Project[], category: ProjectCategory): Project[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.categories.includes(category));
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3);
}
