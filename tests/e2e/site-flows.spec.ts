import { expect, test } from '@playwright/test';

test('redirects root to /en', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/en\/?$/);
});

test('language switch preserves route equivalent', async ({ page }) => {
  await page.goto('/en/projects');
  await page.locator('.lang-switch').click();
  await expect(page).toHaveURL(/\/es\/projects\/?$/);
});

test('theme toggle persists after reload', async ({ page }) => {
  await page.goto('/en');
  const root = page.locator('html');
  const initialTheme = await root.getAttribute('data-theme');
  await page.locator('[data-theme-toggle]').click();
  await page.reload();
  const persistedTheme = await root.getAttribute('data-theme');
  expect(persistedTheme).not.toBe(initialTheme);
});

test('projects filter narrows visible cards', async ({ page }) => {
  await page.goto('/en/projects');
  const visibleBefore = await page.locator('[data-project-card]:visible').count();
  await page.locator('[data-filter-button][data-filter="backend"]').click();
  const visibleAfter = await page.locator('[data-project-card]:visible').count();
  expect(visibleBefore).toBeGreaterThan(visibleAfter);
  expect(visibleAfter).toBeGreaterThan(0);
});
