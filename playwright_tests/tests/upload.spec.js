import { test, expect } from "@playwright/test";

test ('upload', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');
    await page.getByRole('button', { name: 'Select a file'}).setInputFiles('/Users/tomerkaplan/QA/playwright_tests/tests/appleimg.jpg');
    await expect(page.getByText('appleimg.jpg')).toBeVisible();
});