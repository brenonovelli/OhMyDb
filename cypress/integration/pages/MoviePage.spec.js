describe('Movie Page', () => {
  it('should be able to render correctly', () => {
    cy.visit('/movie/tt0462538');

    cy.contains('The Simpsons Movie');
  });

  it('should be able to navigate to the last page on backButton click', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.omdbapi.com/?apikey=1a72b1e4&/&s=tt0462538&page=3',
      status: 200,
      response: {
        Response: 'True',
        totalResults: '4',
        Search: [
          { imdbID: 'tt0462538' },
          { imdbID: 'tt04625383' },
          { imdbID: 'tt04625382' },
          { imdbID: 'tt04625381' },
        ],
      },
    }).as('getSearch');

    cy.visit('/search/tt0462538/3');

    cy.wait('@getSearch');

    cy.get('[data-testid=movieItem').first().click();

    cy.get('[data-testid=backButton]').click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/search/tt0462538/3`);
  });

  it('should be able to navigate to the empty search page if it came from a single search result', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.omdbapi.com/?apikey=1a72b1e4&/&s=tt0462538&page=1',
      status: 200,
      response: {
        Response: 'True',
        totalResults: '1',
        Search: [{ imdbID: 'tt0462538' }],
      },
    });

    cy.visit('/search/tt0462538/1');

    cy.get('[data-testid=backButton]').click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/search`);
  });

  // it.todo(
  //   'should be able to navigate to the empty search page if the last locations is an external url',
  // );
});
