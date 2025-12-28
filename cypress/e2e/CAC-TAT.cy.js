describe("Central de atendimento ao cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  //Cypress._(low dash)  é uma biblioteca que possui uma variedade de funcionalidade úteis
  const longText = Cypress._.repeat("descrição de ajuda e feedback ", 10);

  it("verifica o título da aplição", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // it("", () => {});
});
