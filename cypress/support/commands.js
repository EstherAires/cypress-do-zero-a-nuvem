Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#firstName").type("Lucas");
  cy.get("#lastName").type("Silva");
  cy.get("#email").type("emailteste@gmail.com");

  cy.get("#open-text-area").type("Teste.");

  cy.get("button[type=submit]").contains("Enviar").click();
});
