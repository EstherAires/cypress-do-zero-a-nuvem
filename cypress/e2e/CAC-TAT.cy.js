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

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("emailtestegmail.com");

    cy.get("#open-text-area").type(longText, { delay: 0 });

    cy.get("button[type=submit]").contains("Enviar").click();
    cy.get(".error")
      .should("be.visible")
      .should("contain", "Valide os campos obrigatórios!");
  });

  it("valida telefone não aceita valores não numéricos", () => {
    cy.get("#phone").type("abc");
    cy.get("button[type=submit]").contains("Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório  mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("emailteste@gmail.com");
    cy.get("#phone-checkbox").check();

    cy.get("#open-text-area").type(longText, { delay: 0 });

    cy.get("button[type=submit]").contains("Enviar").click();
    cy.get(".error")
      .should("be.visible")
      .should("contain", "Valide os campos obrigatórios!");
  });

  it("preenche e limpa campos nome , sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Lucas")
      .should("have.value", "Lucas")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Silva")
      .should("have.value", "Silva")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("emailteste@gmail.com")
      .should("have.value", "emailteste@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone-checkbox").check();
    cy.get("#phone").type("123456789").clear().should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.get("button[type=submit]").contains("Enviar").click();
    cy.get(".error")
      .should("be.visible")
      .should("contain", "Valide os campos obrigatórios!");
  });

  it.only("envia o formulário com sucesso usando um comando costumizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success")
      .should("be.visible")
      .should("contain", "Mensagem enviada com sucesso.");
  });

  // it("", () => {});
});
