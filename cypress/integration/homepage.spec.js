describe('Display Homepage', () => {

  beforeEach(() => {
    cy.fixture('comicsMockData.json')
      .then(mockData => {
        cy.intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', { mockData })
    //   results: { books: [
    //     {
    //       'title': 'A Title',
    //       'book_image': 'https://storage.googleapis.com/du-prd/books/images/9781421589602.jpg',
    //       'author': 'An Author',
    //       'description': 'An overview!'
    //     },
    //     {
    //       'title': 'Different Title',
    //       'author': 'Different Author',
    //       'book_image': 'https://storage.googleapis.com/du-prd/books/images/9781421590158.jpg',
    //       'description': 'Another overview!'
    //     }
    //   ]
    // }
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
    cy.get('.main-container').get('.comic-card').get('h2').contains('A Title')
      .get('.comic-card').get('h2').contains('Different Title')
  });

  it('should have a button to add a single comic to reading list', () => {
    cy.get('.comic-card').get('button').contains('Add to reading list').should('be.visible')
      .click()
  });

  it('should display a featured comic', () => {
    cy.get('aside').should('be.visible').contains('top pick')
      .get('img').should('be.visible')
      .get('p').should('be.visible').contains('A Title')
      .get('p').should('be.visible').contains('An Author')
      .get('.description').should('be.visible').contains('An overview!')
  });
});