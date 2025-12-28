describe("Central de atendimento ao cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  //Cypress._(low dash)  é uma biblioteca que possui uma variedade de funcionalidade úteis
  const longText = Cypress._.repeat("descrição de ajuda e feedback ", 10);

  it("verifica o título da aplição", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche campos obrigatórios no formulário", () => {
    //nome, sobrenome, email,ajuda
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("emailteste@gmail.com");

    cy.get("#open-text-area").type(longText, { delay: 0 }); //retira o delay de digitação

    //clicar no botão de enviar
    cy.get("button[type=submit]").contains("Enviar").click();
    cy.get(".success")
      .should("be.visible")
      .should("contain", "Mensagem enviada com sucesso.");
  });

  // it("", () => {});
});
