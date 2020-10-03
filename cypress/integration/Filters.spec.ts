// / <reference types="cypress" />
describe("Filters", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Age ascending changes correctly", () => {
    cy.get(".react-select__control").click();
    cy.get(".react-select__menu-list").children().should("have.length", 7);
    cy.get(".react-select__menu-list").find("#react-select-2-option-1").click();
    cy.get("section")
      .children()
      .first()
      .get("h3")
      .should("contain.text", "Molly Sutton");
  });
});
