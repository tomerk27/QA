import { test, expect } from "@playwright/test";

class PlaywrightDevPage{
    constructor(page){
        this.page = page;
        this.cardList = page.locator('.card');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/');
    }
    async gotoCard(cardName) {
        await this.page.locator('div').filter({ hasText: cardName}).click();
    }

    async selectItem(item) {
        await this.page.getByRole('listitem', {name: item}).click();
    }

    async generateDetails() {

    }
}