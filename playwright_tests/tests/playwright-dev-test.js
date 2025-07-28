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
        
        const fullNameLocator = await this.page.getByText('Full Name');
        if (await fullNameLocator.count() > 0) {
            await fullNameLocator.locator('xpath=following::input[1]').fill(details.firstName + " " + details.lastName);
        }

        // fill first name field
        const firstNameLocator = await this.page.getByRole('textbox', { name: 'First Name' });
        if ( await firstNameLocator.count() > 0 ) {
            await firstNameLocator.fill(details.firstName);
        }

        // fill last name field
        const lastNameLocator = await this.page.getByRole('textbox', { name: 'Last Name' });
        if ( await lastNameLocator.count() > 0 ) {
            await lastNameLocator.fill(details.lastName);
        }

        // fill email field
        const emailTextLocator = await this.page.getByText(/email/i);
        if (await emailTextLocator.count() > 0){
            await emailTextLocator.locator('xpath=following::input[1]').fill(details.email);
        }

        // fill date of birth field
        const dobTextLocator = await this.page.getByText(/Date Of Birth/i);
        if (await dobTextLocator.count() > 0) {
            await dobTextLocator.locator('xpath=following::input[1]').fill(details.dateOfBirth);
        }

        // fill phone number field
        const phoneNumberTextLocator = await this.page.getByText(/(Phone|Mobile)(.*Number)?/i);
        if (await phoneNumberTextLocator.count() > 0) {
            await phoneNumberTextLocator.locator('xpath=following::input[1]').fill(details.phoneNumber);
        }
        
        // fill current address field
        const addressTextLocator = await this.page.getByRole('textbox', { name: /(Current)? Address/i });
        if (await addressTextLocator.count() > 0) {
            await addressTextLocator.fill(details.address);
        }
        
        // fill permanent address field
        const permanentAddressTextLocator = await this.page.locator('#permanentAddress');
        if (await permanentAddressTextLocator.count() > 0) {
            await permanentAddressTextLocator.fill(details.permanentAddress)
        }


        // pick gender
        const genderLocator = await this.page.getByText(details.gender, {exact: true});
        if (await genderLocator.count() > 0) {
            await genderLocator.click();
        }

    }
}