describe('home page', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000')
   
    //I added .should("be.visible") so I can see this element on cypress
    cy.get('h1').should("be.visible").contains("Testing Next.js Applications with Cypress")
  })
})