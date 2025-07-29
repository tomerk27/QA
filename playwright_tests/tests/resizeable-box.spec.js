import { test } from '@playwright/test';

test('Resize to max', async ({ page }) => {
  await page.goto('https://demoqa.com/resizable');

  const handle = page.locator('#resizableBoxWithRestriction .react-resizable-handle-se');

  const box = await handle.boundingBox();
  const container = await page.locator('.constraint-area').boundingBox();

    
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  
  await page.mouse.down();
  await page.mouse.move(container.x + container.width, container.y + container.height, { steps: 100 });
  await page.mouse.up();
});
