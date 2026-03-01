import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

const urls = [
  'http://127.0.0.1:4321/en/',
  'http://127.0.0.1:4321/en/systems/',
  'http://127.0.0.1:4321/en/flutter/',
  'http://127.0.0.1:4321/en/projects/',
  'http://127.0.0.1:4321/en/contact/',
  'http://127.0.0.1:4321/es/',
];

const budget = {
  performance: 0.9,
  accessibility: 0.95,
  seo: 0.95,
  bestPractices: 0.9,
  lcp: 2500,
  inp: 200,
  cls: 0.1,
  scriptTransfer: 71_680,
};

function fail(message: string): never {
  throw new Error(message);
}

async function run() {
  const chrome = await launch({
    chromeFlags: ['--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'],
  });

  let hasError = false;
  try {
    for (const url of urls) {
      const runnerResult = await lighthouse(url, {
        port: chrome.port,
        logLevel: 'error',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        output: 'json',
        throttlingMethod: 'provided',
      });

      if (!runnerResult?.lhr) {
        fail(`[lighthouse] Missing report for ${url}`);
      }

      const lhr = runnerResult.lhr;
      const performance = lhr.categories.performance?.score ?? 0;
      const accessibility = lhr.categories.accessibility?.score ?? 0;
      const seo = lhr.categories.seo?.score ?? 0;
      const bestPractices = lhr.categories['best-practices']?.score ?? 0;
      const lcp = lhr.audits['largest-contentful-paint']?.numericValue ?? Number.POSITIVE_INFINITY;
      const inpAudit = lhr.audits['interaction-to-next-paint']?.numericValue;
      const inp: number | null =
        typeof inpAudit === 'number' && Number.isFinite(inpAudit) ? inpAudit : null;
      const cls = lhr.audits['cumulative-layout-shift']?.numericValue ?? Number.POSITIVE_INFINITY;
      const scriptTransfer =
        ((lhr.audits['resource-summary']?.details as { items?: Array<{ resourceType: string; transferSize: number }> })
          ?.items ?? [])
          .filter((item) => item.resourceType === 'script')
          .reduce((sum, item) => sum + item.transferSize, 0) || 0;

      const checks = [
        { ok: performance >= budget.performance, message: `performance ${performance.toFixed(2)} < ${budget.performance}` },
        {
          ok: accessibility >= budget.accessibility,
          message: `accessibility ${accessibility.toFixed(2)} < ${budget.accessibility}`,
        },
        { ok: seo >= budget.seo, message: `seo ${seo.toFixed(2)} < ${budget.seo}` },
        {
          ok: bestPractices >= budget.bestPractices,
          message: `best-practices ${bestPractices.toFixed(2)} < ${budget.bestPractices}`,
        },
        { ok: lcp <= budget.lcp, message: `LCP ${Math.round(lcp)}ms > ${budget.lcp}ms` },
        {
          ok: inp === null || inp <= budget.inp,
          message: `INP ${inp === null ? 'N/A' : `${Math.round(inp)}ms`} > ${budget.inp}ms`,
        },
        { ok: cls <= budget.cls, message: `CLS ${cls.toFixed(3)} > ${budget.cls}` },
        {
          ok: scriptTransfer <= budget.scriptTransfer,
          message: `script transfer ${scriptTransfer}B > ${budget.scriptTransfer}B`,
        },
      ];

      const failed = checks.filter((check) => !check.ok);
      if (failed.length > 0) {
        hasError = true;
        console.error(`\n[lighthouse] ${url}`);
        failed.forEach((check) => console.error(`  - ${check.message}`));
      } else {
        console.log(
          `[lighthouse] ${url} OK | perf=${performance.toFixed(2)} a11y=${accessibility.toFixed(2)} seo=${seo.toFixed(2)} bp=${bestPractices.toFixed(2)} LCP=${Math.round(lcp)}ms INP=${inp === null ? 'N/A' : `${Math.round(inp)}ms`} CLS=${cls.toFixed(3)} script=${scriptTransfer}B`,
        );
      }
    }
  } finally {
    try {
      chrome.kill();
    } catch {
      // Ignore cleanup errors from temporary Chrome files on Windows.
    }
  }

  if (hasError) {
    process.exit(1);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
