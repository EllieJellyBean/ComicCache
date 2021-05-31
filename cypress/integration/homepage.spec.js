describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', { results: {
      books: [
        {
          'title': 'A title',
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
    cy.get('h1').contains('comic cache')
      .get('ul').contains('reading list')
      .get('ul').contains('home')
  })
})