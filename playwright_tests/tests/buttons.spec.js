import { expect, test } from "@playwright/test";

test ('buttons', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button', { name: 'Double click me'}).dblclick();
    await expect(page.getByText('You have done a double click')).toBeVisible();
    await page.getByRole('button', { name: 'Right click me'}).click({ button: 'right' });
    await expect(page.getByText('You have done a right click')).toBeVisible();
    await page.getByRole('button', { name: 'Click Me', exact: true}).click();
    await expect(page.getByText('You have done a dynamic click')).toBeVisible();
});