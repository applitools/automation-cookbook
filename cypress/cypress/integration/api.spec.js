describe("API", () => {

  beforeEach(() => {
    cy.visit('https://tenor.com/search/thank-you-gifs');
  });
  
  it('should trigger an alert with a message', () => {
    cy.request(`https://api.tenor.com/v1/search?q=thank%20you&key=${Cypress.env('TENOR_API_KEY')}&limit=1`).then((response) => {
      const imgUrl = response.body.results[0].media[0].tinygif.url;
      cy.get('.GifList .Gif img').should('have.attr', 'src').should('include', imgUrl);
    });
  });

});