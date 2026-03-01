import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1464, height: 742 } });
await page.goto('http://127.0.0.1:4321/en/flutter', { waitUntil: 'networkidle' });
await page.evaluate(() => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
});
await page.waitForTimeout(200);
const firstCard = page.locator('.grid-2 .card').first();
await firstCard.hover();
await page.waitForTimeout(260);
await page.screenshot({ path: '.tmp-shots/light-hover-fix.png', fullPage: true });
await browser.close();
