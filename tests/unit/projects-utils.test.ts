import { describe, expect, it } from 'vitest';
import { projects } from '../../src/data/projects';
import { filterProjectsByCategory, getFeaturedProjects, translateText } from '../../src/utils/projects';

describe('project utils', () => {
  it('filters by category', () => {
    const flutter = filterProjectsByCategory(projects, 'flutter');
    expect(flutter.length).toBeGreaterThan(0);
    expect(flutter.every((project) => project.categories.includes('flutter'))).toBe(true);
  });

  it('returns all projects for all category', () => {
    expect(filterProjectsByCategory(projects, 'all').length).toBe(4);
  });

  it('returns only featured projects', () => {
    const featured = getFeaturedProjects(projects);
    expect(featured.length).toBe(3);
    expect(featured.every((project) => project.featured)).toBe(true);
  });

  it('translates localized text by locale', () => {
    const project = projects[0];
    expect(translateText(project.title, 'en')).toBe(project.title.en);
    expect(translateText(project.title, 'es')).toBe(project.title.es);
  });
});
