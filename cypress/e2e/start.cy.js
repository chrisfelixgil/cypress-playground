describe('Este es el ejemplo de inicio', () => {
  it('Este es el primer ejemplo de cypress', () => {
    cy.log("Hola mundo, esto es un log.");
    cy.visit('https://rodrigovillanueva.com.mx/laboratorio/')

    cy.wait(1000);

    cy.get('[href="modulo2_formularios.html"]').click();
    cy.wait(1000);
    cy.get('[data-testid="input-nombre"]').type("Juan Perez");
    cy.wait(1000);
    cy.get('[data-testid="input-correo"]').type("juanperez@gmail.com");
    cy.wait(1000);
    cy.get('[data-testid="input-telefono"]').type("1234567890");
    cy.wait(1000);
    cy.get('[data-testid="select-pais"]').select("México");
    cy.wait(1000);
    cy.get('[data-testid="select-ciudad"]').select("CDMX");
    cy.wait(1000);
    cy.get('[data-testid="radio-otro"]').click();


  })
})