describe("Table", () => {

  beforeEach(() => {
    cy.visit('/ingredients/table');
  })

  it('should verify table data and headers load', () => {
    cy.eyesOpen({
      batchName: 'Table',
      testName: 'Default'
    });
    cy.eyesCheckWindow();
    cy.eyesClose();
  });

  it('should verify table data is sorted ascending', () => {
    cy.eyesOpen({
      batchName: 'Table',
      testName: 'Ascending'
    });

    cy.eyesCheckWindow({ tag: 'Before Sort' })

    cy.get('#column-button-name').click();

    cy.eyesCheckWindow({ tag: 'After Sort' })

    cy.eyesClose();
  });

  it('should verify table data is sorted descending', () => {
    cy.eyesOpen({
      batchName: 'Table',
      testName: 'Descending'
    });

    cy.eyesCheckWindow({ tag: 'Before Sort' })

    cy.get('#column-button-name').click().click();

    cy.eyesCheckWindow({ tag: 'After Sort' })

    cy.eyesClose();
  });

  it('should verify table data is unsorted', () => {
    cy.eyesOpen({
      batchName: 'Table',
      testName: 'Unsorted'
    });

    cy.eyesCheckWindow({ tag: 'Before Sort' })

    cy.get('#column-button-name').click().click().click();

    cy.eyesCheckWindow({ tag: 'After Sort' })

    cy.eyesClose();
  });

});