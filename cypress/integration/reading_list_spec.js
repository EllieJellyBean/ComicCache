describe('Adding and removing comics from reading list', () => {

  beforeEach(() => {
    beforeEach(() => {
      cy.fixture('comicsMockData.json')
        .then(mockData => {
        .intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', {
            statusCode: 201,
            delay: 100,
            body: mockData
          })
        })
    })
  })

});
