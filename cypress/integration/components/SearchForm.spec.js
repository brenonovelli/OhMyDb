describe('Search Form Component', () => {
  it('should be able to render correctly', () => {
    cy.visit('/');

    cy.get(['data-testid=searchForm']);
  });

  it('should be able to redirect to the search page with the correctly params', () => {
    cy.visit('/');

    cy.get('[data-testid=searchInput]').type('shadows');

    cy.get('[data-testid=searchForm] button').click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/search/shadows/1`);
  });
});
