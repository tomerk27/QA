import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-test'

test( 'Practice Form', async ({ page }) => {
  const devPage = new PlaywrightDevPage(page);
  await page.goto('https://demoqa.com/automation-practice-form');

  devPage.fillDetails();
  await expect(page.getByText('Thanks for submitting the form')).not.toBeVisible()

  await page.locator('.subjects-auto-complete__value-container').click();
  /*await page.locator('#subjectsInput').click();
  await page.keyboard.type('Maths');
  await page.keyboard.press('Enter');*/
  await page.getByText('Sports').click();
  await page.getByText('Music').click();
  await page.getByRole('button', { name: 'Select Picture'}).setInputFiles('/Users/tomerkaplan/QA/playwright_tests/tests/appleimg.jpg');
  await page.getByText(/^Select State$/).click();
  await page.keyboard.type('NCR');
  await page.keyboard.press('Enter');
  await page.getByText(/^Select City$/).click();
  await page.keyboard.type('Noida');
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'submit'}).click();

  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});