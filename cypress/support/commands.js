Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firstName: "Kevin",
      lastName: "Ninsy",
      email: "emaildefault@gmail.com",
      feedback: "Teste defalt.",
    }
  ) => {
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);

    cy.get("#open-text-area").type(data.feedback);

    cy.contains("button", "Enviar").click();
  }
);
