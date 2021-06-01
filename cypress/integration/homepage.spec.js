describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', { results: {
      books: [
        {
          'title': 'A Title',
          'book_image': 'https://storage.googleapis.com/du-prd/books/images/9781421589602.jpg',
        },
        {
          'title': 'Different Title',
          'book_image': 'https://storage.googleapis.com/du-prd/books/images/9781421590158.jpg'
        }
      ]
    }
    })
      .visit('http://localhost:3000/')
  })

  it('should have a nav bar', () => {
    cy.get('nav').get('h1').contains('comic cache')
      .get('ul').contains('reading list')
      .get('ul').contains('home')  
  });

  it('should display a grid of top ranking comics', () => {
    cy.get('.main-container').get('.comic-card').get('h2').contains('A Title')
      .get('.comic-card').get('h2').contains('Different Title')
  });

  it('should have a button to add a single comic to reading list', () => {
    cy.get('.comic-card').get('.add-button').contains('Add to reading list').should('be.visible')
      .click()
  });

  it('should display a featured comic', () => {
    cy.get('aside').should('be.visible').contains('top pick')
      .get('img').should('be.visible')
      .get('h2').should('be.visible').contains('A Title')
  });
});