import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/en', '/en/systems', '/en/flutter', '/en/projects', '/en/contact', '/es'];

for (const route of routes) {
  test(`a11y scan ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const blocking = results.violations.filter((violation) =>
      ['serious', 'critical'].includes(violation.impact ?? ''),
    );
    expect(blocking).toEqual([]);
  });
}
