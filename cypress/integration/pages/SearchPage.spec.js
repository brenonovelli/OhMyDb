describe('Search Page', () => {
  it('should be able to render correctly', () => {
    cy.visit('/search/term/1');

    cy.get(['data-testid=searchForm']);
  });

  it('should be able to show a error message on response with error message', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.omdbapi.com/?apikey=1a72b1e4&/&s=qwertyuiop&page=1',
      status: 200,
      response: { Response: 'False', Error: 'Some error message.' },
    });

    cy.visit('/search/qwertyuiop/1');
    cy.contains('Some error message.');
  });

  it('should be able to show a error message on network error', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.omdbapi.com/?apikey=1a72b1e4&/&s=qwertyuiop&page=1',
      status: 500,
      response: { Response: 'False', Error: 'Teste' },
    });

    cy.visit('/search/qwertyuiop/1');
    cy.contains('Something went wrong.');
  });
});
