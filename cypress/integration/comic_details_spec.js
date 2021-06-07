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
    cy.get('nav>img').should('be.visible')
      .get('[data-cy=readingList]>p').should('contain', 'READING LIST')
      .get('[data-cy=home]>p').should('contain', 'HOME')
  });

  it('Should only display one comic book on the details page', () => {
    cy.get('article').find('.comic-details').should('have.length', 1)
  });

  it('Should show the a back to home button above the comic details card', () => {
    cy.get('[data-cy=home-button]').click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('Should show the title on the comic details card', () => {
    cy.get('[data-cy=details-title]').should('contain', 'ONE-PUNCH MAN, VOL. 10')
  });

  it('Should show a movie poster image on the movie details card', () => {
    cy.get('img').should('have.attr', 'src', 'newicon.png')
  });

  it('Poster and logo possess an alt description for the screen reader or broken image', () => {
    cy.get('img').should('have.attr', 'alt');
  });

  it('Should show the author on the comic details card', () => {
    cy.get('[data-cy=comic-author]').should('contain', 'ONE and Yusuke Murata')
  });

  it('Should show the description on the comic details card', () => {
    cy.get('[data-cy=comic-description]')
      .should('contain', 'Saitama sneaks into a combat tournament in order to hone his martial arts skills.')
  });

  it('Should show the buy it button below the comic details card', () => {
    cy.get('[data-cy=buy-button]').should('contain', 'BUY IT');
  });

  it('Should take you to amazon to buy the book', () => {
    cy.get('[data-cy=buy-button]').wait(100).click()
  });

  it('Should be able to switch directly to the reading list from the details page', () => {
    cy.get('[data-cy=readingList]>p').click()
      .url().should('eq', 'http://localhost:3000/reading-list')
  });
});
