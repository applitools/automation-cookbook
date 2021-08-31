const { test, expect } = require('@playwright/test');

test.describe('Select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/select');
  });

  test('should select an option from the select dropdown', async ({ page }) => {
    await page.selectOption('#spices-select-single', 'ginger');
    const selectedValue = await page.$eval('#spices-select-single', e => e.value);
    expect(selectedValue).toContain('ginger');
  });

  test('should select multiple options from the multi select dropdown', async ({ page }) => {
    await page.selectOption('#spices-select-multi', ['ginger', 'paprika']);
    const selectedValues = await page.$eval('#spices-select-multi', e => Array.from(e.selectedOptions).map(option => option.value));
    expect(selectedValues).toEqual(['ginger', 'paprika']);
  });
});