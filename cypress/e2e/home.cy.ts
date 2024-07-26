describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context("Hero Section", () => {
    it.only("the h1 contains the correct text", () => {
      //I added .should("be.visible") so I can see this element on cypress
      // I created a custom command
      cy.getByData("hero-heading")
        .should("be.visible")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").should("be.visible").eq(0).contains("4 Courses")
      cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
      cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")
    })
  })


  context("Courses Section", ()=>{
    it("Course: Testing Your First Next.Js Application", ()=>{
      cy.getByData("course-0").find("a").should("be.visible").contains('Get started').click()
      cy.location("pathname").should("equal", "/testing-your-first-application")

    })
    it("Course: Testing Foundation", ()=>{
      cy.getByData("course-1").find("a").should("be.visible").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it.only("Course: Cypress Fundamentals", ()=>{
      cy.getByData("course-2").find("a").should("be.visible").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
