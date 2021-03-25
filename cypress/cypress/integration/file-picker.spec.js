// https://docs.cypress.io/api/utilities/blob.html#Using-an-image-fixture-for-upload

describe("File Picker", () => {

  beforeEach(() => {
    cy.visit('/ingredients/file-picker');
  })

  it('should upload a photo to the file picker', () => {
    cy.fixture('images/french-toast.jpg').as('photo');

    cy.get('#photo-upload').then(function (el) {
      const blob = Cypress.Blob.base64StringToBlob(this.photo, 'image/jpeg');

      const file = new File([blob], 'images/french-toast.jpg', {
        type: 'image/jpeg'
      });
      
      const data = new DataTransfer();

      data.items.add(file);

      el[0].files = data.files;
      
      const changeEvent = new Event('change', {
        bubbles: true
      });
      
      el[0].dispatchEvent(changeEvent);
    });

    cy.get('#photo-upload').next().next().should('be.visible');
  });

  it('should upload a photo to the file picker', () => {
    cy.get('#photo-upload').attachFile('images/french-toast.jpg');

    cy.get('#photo-upload').next().next().should('be.visible');
  });

});