import { PlaywrightDevPage } from "./playwright-dev-test";
import { test, expect } from "@playwright/test";

test('radio button', async ({ page }) => {
    const devPage = new PlaywrightDevPage(page);
    await page.goto('https://demoqa.com/radio-button');
    await devPage.fillDetails();
    await expect(page.locator('p.mt-3')).toContainText(/You have selected.*/);

});