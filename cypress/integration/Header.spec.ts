// / <reference types="cypress" />
describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Header language changes correctly", function () {
    cy.get(".language").should("contain.text", "EN");
    cy.get(".language").click();
    cy.get(".language").should("contain.text", "HR");
  });
  it("Searches by country", () => {
    cy.get("input[type=search]").type("Trinidad");
    cy.get(".container").should("contain.text", "No users to show");
    cy.get("article").should("not.be.visible");
  });
  it("Should show title correctly", () => {
    cy.get("header div").should("contain.text", "User Search App");
    cy.get(".language").click();
    cy.get("header div").should(
      "contain.text",
      "Aplikacija za pretragu korisnika"
    );
  });
});
