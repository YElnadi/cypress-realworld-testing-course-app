describe('home page', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000')
   
    //I added .should("be.visible") so I can see this element on cypress
    cy.get('[data-test="hero-heading"]').should("be.visible").contains("Testing Next.js Applications with Cypress")
  })

  it.only("the features on the homepage are correct", ()=>{
    cy.visit("http://localhost:3000")
    cy.get("dt").should("be.visible").eq(0).contains('4 Courses')
    cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
    cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")

  })
})