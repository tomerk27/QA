import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('tomer kaplan');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('tomer.kaplan2007@gmaiol.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('wfvv');
  await page.locator('#permanentAddress').click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('wfvvw');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').dblclick();
  await page.locator('#permanentAddress').fill('wvvvw');
  await page.getByRole('button', { name: 'Submit' }).click();
});