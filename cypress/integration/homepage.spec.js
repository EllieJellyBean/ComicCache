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

  // it('should have a button to add a single comic to reading list', () => {
  //   cy.get('.comic-card').get('button').contains('Add to reading list').should('be.visible')
  //     .click()
  // });

  // it('should display a featured comic', () => {
  //   cy.get('aside').should('be.visible').contains('top pick')
  //     .get('img').should('be.visible')
  //     .get('p').should('be.visible').contains('A Title')
  //     .get('p').should('be.visible').contains('An Author')
  //     .get('.description').should('be.visible').contains('An overview!')
  // });
});