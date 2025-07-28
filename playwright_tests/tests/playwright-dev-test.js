import { test, expect } from "@playwright/test";
import FakeDetails from "./fake-details";

export class PlaywrightDevPage{
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

    async fillDetails() {
        const details = new FakeDetails();

        // fill first name field
        const firstNameLocator = this.page.getByRole('textbox', { name: 'First Name' });
        if ( await firstNameLocator.count() > 0 ) {
            firstNameLocator.fill(details.firstName);
        }

        // fill last name field
        const lastNameLocator = this.page.getByRole('textbox', { name: 'Last Name' });
        if ( await lastNameLocator.count() > 0 ) {
            lastNameLocator.fill(details.lastName);
        }

        // fill email field
        const emailTextLocator = this.page.getByText(/email/i);
        if (await emailTextLocator.count() > 0){
            await emailTextLocator.locator('xpath=following::input[1]').fill(details.email);
        }

        // fill date of birth field
        const dobTextLocator = this.page.getByText(/Date Of Birth/i);
        if (await dobTextLocator.count() > 0) {
            await dobTextLocator.locator('xpath=following::input[1]').fill(details.dateOfBirth);
        }

        // fill phone number field
        const phoneNumberTextLocator = this.page.getByText(/(Phone|Mobile)(.*Number)?/i);
        if (await phoneNumberTextLocator.count() > 0) {
            await phoneNumberTextLocator.locator('xpath=following::input[1]').fill(details.phoneNumber);
        }
        
        // fill address field
        const addressTextLocator = this.page.getByRole('textbox', { name: /((Current)?|(Permanent)?) Address/i });
        if (await addressTextLocator.count() > 0) {
            await addressTextLocator.fill(details.address);
        }

        // pick gender
        const genderLocator = this.page.getByText(details.gender);
        if (await genderLocator.count() > 0) {
            console.log('gf')
            await genderLocator.click();
        }

    }
}