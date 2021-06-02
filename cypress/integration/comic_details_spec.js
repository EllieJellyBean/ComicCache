describe('Show single comic details display of Comic Cache', () => {

  beforeEach(() => {
    cy.fixture('comicsMockData.json')
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

  it('Should display the nav bar on the comic details display page upon loading', () => {
    cy.contains('nav>h1', 'comic cache')
      .get('[data-cy=readingList]').should('contain', 'reading list')
      .get('[data-cy=home]').should('contain', 'home')
  });

  it('Should only display one comic book on the details page', () => {
    cy.get('article').find('.comic-details').should('have.length', 1)
  });

  it('Should show the a back to home button above the comic details card', () => {
    cy.get('[data-cy=home-button]').click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('Should show the title on the comic details card', () => {
    cy.get('[data-cy=details-title]').should('contain', 'THE ANCIENT MAGUS\' BRIDE, VOL. 6')
  });
});
