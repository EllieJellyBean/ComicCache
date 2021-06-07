Cypress.Commands.add('stub', () => {
  cy.fixture('comicsMockData.json')
    .then(mockData => {
      cy.intercept('https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9', {
        statusCode: 201,
        delay: 100,
        body: mockData
      })
    })
})
