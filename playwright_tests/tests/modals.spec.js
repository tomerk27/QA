import { test, expect } from "@playwright/test";

test ('modals', async ({ page }) => {
    await page.goto('https://demoqa.com/modal-dialogs');
    await page.getByRole('button', { name: 'Small modal'}).click();
    await page.locator('#closeSmallModal').click();
    await page.getByRole('button', { name: 'Large modal'}).click();
    await page.locator('#closeLargeModal').click();
    await expect(page.getByText('Large modal', { exact: true })).toBeVisible();
});