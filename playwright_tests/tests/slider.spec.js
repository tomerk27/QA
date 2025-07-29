import { expect, test } from "@playwright/test";

test ('slider', async ({ page }) => {
    await page.goto('https://demoqa.com/slider');
    await page.getByRole('slider').fill('50');
    await expect(page.getByText('50')).toBeVisible();
});