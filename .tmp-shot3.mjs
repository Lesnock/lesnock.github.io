import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto('http://localhost:5173');

const readyBtn = page.getByText('Meet Caio', { exact: false });
await readyBtn.waitFor({ state: 'visible', timeout: 20000 });
await readyBtn.click();

await page.getByText('System Analysis', { exact: true }).waitFor({ state: 'visible', timeout: 20000 });
await page.getByText('System Analysis', { exact: true }).scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

const panel = page.locator('[role="note"]');
await panel.screenshot({ path: '/tmp/claude-1000/-home-caio-dev-portfolio/87019a2b-e158-4418-bc08-04cf011fe4af/scratchpad/panel-only2.png' });

await browser.close();
