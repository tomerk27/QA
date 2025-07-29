import { PlaywrightDevPage } from "./playwright-dev-test";
import { test, expect } from "@playwright/test";

test ('web table', async ({ table }) => {
    const devPage = new PlaywrightDevPage(page);
    
    await page.goto('https://demoqa.com/webtables');
    await page.getByRole('button', {name: 'Add'}).click();
    await devPage.fillDetails();
    await page.getByRole('textbox', {name: 'Department'}).fill('qa');
    await page.getByRole('button', { name: 'Submit'}).click();
    await page.getByRole('textbox', { name: 'Type to search'}).fill();

    await expect(page)
});