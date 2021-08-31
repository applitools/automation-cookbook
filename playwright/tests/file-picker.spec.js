const { test, expect } = require('@playwright/test');

test.describe('File Picker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/file-picker');
  });

  test('should upload a photo to the file picker', async ({ page }) => {
    await page.setInputFiles('#photo-upload', './fixtures/images/french-toast.jpg');
    const $photoUpload = await page.$('#photo-upload');
    const $photoUploadParent = await $photoUpload.$('xpath=..');
    const $photoUploadFigure = await $photoUploadParent.$$('figure');
    expect($photoUploadFigure).toHaveLength(1);
  });
});