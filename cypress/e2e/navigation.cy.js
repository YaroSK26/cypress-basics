describe('navigation test', () => {
  it('tests navigation - opening and closing', () => {
    cy.visit('/')
     cy.get("[data-id='open-sidebar']").should("not.be.exist");
    cy.get("[data-id='open-sidebar-btn']").click()
    cy.get("[data-id='open-sidebar']").should('be.visible')
    cy.get("[data-id='close-sidebar-btn']").click()
    cy.get("[data-id='close-sidebar-btn']").should("not.be.exist");
  })
  it.only ("tests navigation", () => {
    cy.visit("/");
    cy.get("[data-id='open-sidebar-btn']").click();
    cy.contains(/about me/i).should("not.be.exist");
    cy.get("[data-id='about-link']").click();
    cy.get("[data-id='close-sidebar-btn']").should("not.be.exist");
    cy.contains(/about me/i);
  }); 
})