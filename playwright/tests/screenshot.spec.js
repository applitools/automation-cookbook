const { test } = require('@playwright/test');

test.describe('Screenshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/file-picker');
  });

  test('should take a screenshot', async ({ page }) => {
    await page.screenshot({ path: './screenshots/screenshot.png' });
  });

  test('should take a screenshot after trying to upload a picture', async ({ page }) => {
    await page.setInputFiles('#photo-upload', './fixtures/images/french-toast.jpg');
    await page.screenshot({ path: './screenshots/screenshot-with-image.png' });
  });
});