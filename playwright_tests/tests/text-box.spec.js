import { expect, test } from "@playwright/test";
import { PlaywrightDevPage } from "./playwright-dev-test";

test( 'text box', async ({ page }) => {
    const devPage = new PlaywrightDevPage(page);

    await page.goto('https://demoqa.com/text-box');
    devPage.fillDetails();
    exep
});