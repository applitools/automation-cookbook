const { test, expect } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright')

test.describe('Table', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/table');
  });

  test.describe('with Visual Testing', () => {
    test('should verify table data is sorted ascending', async ({ page }) => {
      const eyes = new Eyes();
      await eyes.open(page, 'Table', 'Ascending');
      await eyes.check('Before Sort', Target.window().fully());
      await page.click('#column-button-name');
      await eyes.check('Ater Sort', Target.window().fully());
      await eyes.close();
    });
  });

  test.describe('with manual commands', () => {
    const tableDataUnsorted = [
      ['Apple', 'Fruit', 'Sweet'],
      ['Lemon', 'Fruit', 'Bitter'],
      ['Onion', 'Vegetable', 'Bitter'],
      ['Pepper', 'Vegetable', 'Sweet'],
      ['Carrots', 'Vegetable', 'Sweet'],
      ['Banana', 'Fruit', 'Sweet']
    ]

    const tableDataSortedAsc = [
      ['Apple', 'Fruit', 'Sweet'],
      ['Banana', 'Fruit', 'Sweet'],
      ['Carrots', 'Vegetable', 'Sweet'],
      ['Lemon', 'Fruit', 'Bitter'],
      ['Onion', 'Vegetable', 'Bitter'],
      ['Pepper', 'Vegetable', 'Sweet']
    ]

    test('should manually verify table data is sorted ascending', async ({ page }) => {
      const dataBefore = await page.$$eval('#fruits-vegetables tbody tr', (rows) => {
        return rows.map(row => {
          const cells = row.querySelectorAll('td');
          return Array.from(cells).map(cell => cell.textContent);
        })
      });

      dataBefore.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          expect(cell).toContain(tableDataUnsorted[rowIndex][cellIndex]);
        });
      });

      await page.click('#column-button-name');

      const dataAfter = await page.$$eval('#fruits-vegetables tbody tr', (rows) => {
        return rows.map(row => {
          const cells = row.querySelectorAll('td');
          return Array.from(cells).map(cell => cell.textContent);
        })
      });

      dataAfter.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          expect(cell).toContain(tableDataSortedAsc[rowIndex][cellIndex]);
        });
      });
    });
  });

});