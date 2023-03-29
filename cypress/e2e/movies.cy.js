describe('user should see movie image for each movie in the movie container', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should connect to a local site', () => {
    cy.visit('http://localhost:3000')
  });

  it('should see movie images', () => {
    cy.get('.poster-image').should('be.visible')
  });

  it('should see a title of the movie cinema', () => {
    cy.contains('Bea & Travis\'s Movie Cinema')
  });
})