import { PlaywrightDevPage } from "./playwright-dev-test";
import { test, expect } from "@playwright/test";

test('check box', async ({ page }) => {
    const devPage = new PlaywrightDevPage(page);
    await page.goto('https://demoqa.com/checkbox');
    await page.getByRole('button', { name: 'Toggle' }).click();
    await page.locator('label').filter({ hasText: 'Desktop' }).click();
    await expect(page.locator('#result')).toBeVisible();
});