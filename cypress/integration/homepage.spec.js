describe('Display Homepage', () => {

  beforeEach(() => {
    cy.fixture('comicsMockData.json')
      .then(mockData => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', {
          statusCode: 201,
          delay: 100,
          body: mockData 
        })
      })
      .visit('http://localhost:3000/')
  })

  it('should have a nav bar', () => {
    cy.get('nav>img').should('be.visible')
      .get('.fa-home').should('be.visible')
      .get('.nav-text').should('contain', 'HOME')
      .get('.fa-book-open').should('be.visible')
      .get('.reading-list-header').should('contain', 'READING LIST') 
  });

  it('should display a grid of top ranking comics', () => {
    cy.get('div>h3').should('contain', 'TOP 9 THIS WEEK')
      .get('div>section>div').should('have.length', 9)
  });

  it('should display a comic cover, title, and add to reading list button', () => {
    cy.get('.comic-card').should('be.visible')
      .get('.comic-image').should('be.visible')
      .get('.comic-title').should('be.visible')
      .get('.plus-icon-container > i').should('be.visible')
      .get('.plus-icon-container > p').should('be.visible')
      .get('.comic-card:first').get('.comic-title').should('contain', 'ONE-PUNCH MAN, VOL. 10')
      .get('.plus-icon-container:first').should('contain', 'add to reading list')
  })

  it('should display a featured comic', () => {
    cy.get('.featured-comic').should('be.visible')
        .get('.left-container').should('be.visible')
          .should('contain', 'Akira Himekawa')
          .should('contain', 'THE LEGEND OF ZELDA: LEGENDARY EDITION, VOL. 2')
      .get('.right-container').should('be.visible')
        .should('contain', 'The adaptation of several story arcs from Nintendo’s Zelda video game series continues. In this volume, the Oracle of Seasons.')
      .get('.featured-image').should('be.visible')
      .get('.buy-it-button').should('be.visible')
        .should('contain', 'BUY IT')
  })

  // it('should take a user to another url when BUY IT button is clicked', () => {
  //   cy.get('.buy-it-button').click()
  // })

  // ^^^^ not sure on how to test navigating to an external link, and having a hard time finding solid documentation

  it('should change from "add to reading list" to "remove from reading list" when plus icon is clicked', () => {
    cy.get('.fa-plus:first').click()
      .get('.fa-minus').should('be.visible')
      .get('.reading-list').should('contain', 'remove from reading list')
  });

  it('should add a comic to the reading list, and a user should be able to view the reading list when READING LIST is clicked in nav bar', () => {
    cy.get('.fa-plus:first').click()
      .get('.fa-book-open').click()
      .url().should('eq', 'http://localhost:3000/reading-list')
      .get('.header-container').should('contain', 'Reading List')
      .get('.comics-container').should('have.length', 1)
        .get('.comic-card').should('contain', 'ONE-PUNCH MAN, VOL. 10')
        .should('contain', 'remove from reading list')
        .get('.fa-minus').should('be.visible')
  })

  it('should remove a comic from the reading list when minus icon is clicked', () => {
    cy.get('.fa-plus:first').click()
      .get('.fa-book-open').click()
      .get('.fa-minus').click()
      .get('.comics-container').should('have.length', 0)
      .get('.header-container').should('be.visible').should('contain', 'No comics in reading list!')
  })

  it('should take a user back to the homepage when they click HOME in the nav bar', () => {
      cy.get('.fa-book-open').click()
        .get('.fa-home').click()
          .url().should('eq', 'http://localhost:3000/')
  })

  // it('should display a featured comic', () => {
  //   cy.get('aside').should('be.visible').contains('top pick')
  //     .get('img').should('be.visible')
  //     .get('p').should('be.visible').contains('A Title')
  //     .get('p').should('be.visible').contains('An Author')
  //     .get('.description').should('be.visible').contains('An overview!')
  // });
})