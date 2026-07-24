const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(String(err)));

  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  // Boot sequence (loading + power-on + flicker + lighting + banner) runs ~13s worst case.
  await page.waitForSelector('#hero', { timeout: 20000, state: 'attached' });
  await page.waitForTimeout(14000);
  await page.click('button:has-text("Conhecer Caio")');
  // Second power-on animation (flicker + lighting) runs post-click too.
  await page.waitForTimeout(7000);

  await page.screenshot({ path: '/tmp/claude-1000/-home-caio-dev-portfolio/e243ade9-11c1-4469-8919-e283bc4bb248/scratchpad/hero-1.png' });
  // The burst window is the last ~0.26s of each 2s loop (87%-100%). Poll
  // tightly through one full cycle to land a frame inside the tear.
  const heading = page.locator('#hero h1');
  for (let i = 0; i < 20; i++) {
    await page.waitForTimeout(100);
    await heading.screenshot({ path: `/tmp/claude-1000/-home-caio-dev-portfolio/e243ade9-11c1-4469-8919-e283bc4bb248/scratchpad/burst-${i}.png` });
  }

  const dataText = await page.locator('#hero h1').first().getAttribute('data-text');
  console.log('data-text on h1:', dataText);
  console.log('console errors:', errors);

  await browser.close();
})();
