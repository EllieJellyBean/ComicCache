describe('Show single comic details display of Comic Cache', () => {

  beforeEach(() => {
    cy.fixture('comicDetailsMockData.json')
      .then(mockData => {
        cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000/comic-details/2')
  });

  it('Should be able to visit a single comic details page', () => {
    cy.url().should('eq', 'http://localhost:3000/comic-details/2')
  });

});
