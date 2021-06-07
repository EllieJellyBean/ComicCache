describe('Adding and removing comics from reading list', () => {

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


  it('Should should be able to render the correct button after being added to list', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=remove-from-list]>p').eq(0).should('contain', 'remove')
  });
});
