describe("Logout", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.clearLocalStorage();
  });

  it("Logs out", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(500);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("caTester@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("LeahogUlf");
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});