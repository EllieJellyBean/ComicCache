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


  it('Should should be able to render the correct button when in list even after refresh', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=remove-from-list]>p').eq(0).should('contain', 'remove')
        .reload()
        .get('[data-cy=remove-from-list]>p').eq(0).should('contain', 'remove')
  });

  it('Should be able to display added cards in the list', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=readingList]>p').click()
        .get('[data-cy=comic]').should('contain', 'ONE-PUNCH MAN, VOL. 10')
  });

  it('Should be able to remove a card from the reading list on the dash', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=remove-from-list]>i').eq(0).click()
        .get('[data-cy=readingList]>p').click()
        .get('[data-cy=comic]').should('not.exist')
        .get('div').should('contain', 'No comics in reading list!')
  });

  it('Should be able to remove a card from the reading list from within the list', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=readingList]>p').click()
        .get('[data-cy=remove-from-list]>i').eq(0).click()
        .get('[data-cy=comic]').should('not.exist')
        .get('div').should('contain', 'No comics in reading list!')
  });

  it('Should be able to persist the reading list on refresh', () => {
      cy.get('[data-cy=add-to-list]>i').eq(0).click()
        .get('[data-cy=readingList]>p').click()
        .reload()
        .get('[data-cy=comic]').should('contain', 'ONE-PUNCH MAN, VOL. 10')
  });

});
