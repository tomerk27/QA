import { expect, test} from "@playwright/test";

test ('select', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
    await page.locator('#withOptGroup svg').click();
    await page.getByText('Group 2, option 1', { exact: true }).click();
    await page.locator('#selectOne svg').click();
    await page.getByText('Mr.', { exact: true }).click();
    await page.locator('#oldSelectMenu').click();
    await page.locator('#oldSelectMenu').selectOption('1');
    await page.locator('#selectMenuContainer svg').nth(2).click();
    await page.locator('#react-select-4-option-3').click();
    await page.locator('#react-select-4-option-2').click();
});