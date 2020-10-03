// / <reference types="cypress" />
describe("Filters", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Age ascending displays correctly", () => {
    cy.get(".react-select__control").click();
    cy.get(".react-select__menu-list").children().should("have.length", 7);
    cy.get(".react-select__menu-list").find("#react-select-2-option-1").click();
    cy.get("section")
      .children()
      .first()
      .find("h3")
      .should("contain.text", "Molly Sutton");
  });
  it("Age descending displays correctly", () => {
    cy.get(".react-select__control").click();
    cy.get(".react-select__menu-list").find("#react-select-2-option-2").click();
    cy.get("section").children().first().should("contain.text", 75);
  });
  it("Age under 40 displays correctly", () => {
    cy.get(".react-select__control").click();
    cy.get(".react-select__menu-list").find("#react-select-2-option-3").click();
    cy.get("section")
      .children()
      .first()
      .should("contain.text", "Age: 22")
      .and("contain.text", "Country: Ireland");
  });
});
