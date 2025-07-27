import { test, expect } from '@playwright/test';

test( 'exercise', async ({page}) => {
  await page.goto ('https://demoqa.com/text-box')
  
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Tomer Kaplan');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('tomer.kaplan2007@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('efraim katzir');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('none');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Tomer KaplanEmail:tomer.')).toBeVisible()
});

test( 'Practice Form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByRole('textbox', {name: 'First Name'}).fill('Tomer');
  await page.getByRole('textbox', {name: 'Last Name'}).fill('Kaplan');
  await page.getByRole('textbox', {name: 'name@example.com'}).fill('tomer.kaplan2007@gmail.com');
  await page.getByText('Male', { exact: 'true'});
  await page.locator('div').filter({ hasText: /^Male$/ }).click();
  await page.getByRole('textbox', {name: 'Mobile Number'}).fill('0542668824');
  await page.locator('#dateOfBirthInput').fill('27 Nov 2007');
  await page.locator('#subjectsInput').fill('bla bla bla');
  await page.getByText('Sports').click();
  await page.getByText('Music').click();
  await page.getByRole('checkbox', {name: 'music'}).check();
  await page.getByRole('button', { name: 'submit'}).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible()
});

test( 'slider test', async ({ page }) => {
  await page.goto('https://demoqa.com/slider')
  await page.getByRole('slider').fill('27');
  await expect(page.locator('#sliderValue')).toHaveValue('27');
});