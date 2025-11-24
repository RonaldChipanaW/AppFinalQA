describe('Basic UI test', () => {
  it('Visits example website', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain').should('be.visible');
  });
});
