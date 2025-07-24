import { test, expect } from '@playwright/test';

test('login and out', async ({page}) => {
  await page.goto('https://dev-admin.funzy.world/');
  await page.getByRole('textbox', {name: 'email'}).fill('admin@funzy-world.com');
  await page.getByRole('textbox', {name: 'password'}).fill('funzy-world123456');
  await page.getByRole('button', {name: 'login'}).click()
  await page.getByRole('button', { name: 'account of current user' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
});

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
});