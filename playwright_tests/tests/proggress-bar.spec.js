import { expect, test } from "@playwright/test";

test ('progress bar', async ({ page }) => {
    await page.goto('https://demoqa.com/progress-bar');
    
    await page.getByRole('button', { name: 'Start'}).click();
    let progressValue = 0;
    while (progressValue != 69) {
        progressValue = parseInt(await page.locator('#progressBar .progress-bar').getAttribute('aria-valuenow'));
    }
    await page.getByRole('button', { name: 'Stop'}).click();
    await expect(page.getByText('Progress BarProgress Bar69%')).toBeVisible();
});