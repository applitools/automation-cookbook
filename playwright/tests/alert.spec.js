const { test, expect } = require('@playwright/test');

test.describe("Alert", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/alert');
  });

  test('should trigger an alert with a message', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Airfryers can make anything!');
      await dialog.dismiss();
    });
    await page.click('#alert-button');
  });

  test('should trigger a confirmation with a message', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Proceed with adding garlic?');
      await dialog.accept();
    });
    await page.click('#confirm-button');
    const $answer = await page.$('#confirm-answer');
    const answerText = await $answer.innerText();
    expect(answerText).toContain('Answer: Yes');
  });

  test('should trigger a confirmation with a message and cancel', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Proceed with adding garlic?');
      await dialog.dismiss();
    });
    await page.click('#confirm-button');
    const $answer = await page.$('#confirm-answer');
    const answerText = await $answer.innerText();
    expect(answerText).toContain('Answer: No');
  });

  test('should trigger a prompt with a message', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('What is your favorite food?');
      await dialog.accept('Pizza!');
    });
    await page.click('#prompt-button');
    const $answer = await page.$('#prompt-answer');
    const answerText = await $answer.innerText();
    expect(answerText).toContain('Answer: Pizza!');
  });

  test('should trigger a prompt with a message and cancel', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('What is your favorite food?');
      await dialog.dismiss();
    });
    await page.click('#prompt-button');
    const $answer = await page.$('#prompt-answer');
    const answerText = await $answer.innerText();
    expect(answerText).toContain('Answer: Cancelled');
  });
});