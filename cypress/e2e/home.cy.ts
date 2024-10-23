describe('Moles Game Home Page (Mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-6'); 
    cy.visit('http://localhost:5173/');
  });

  it('should load the page correctly', function () {
    cy.title().should('include', "Mole's Game"); 
    cy.get('h1').should('be.visible');
    cy.get('button').contains('PLAY').should('be.visible');
  });

  it('should start the game when the Play button is clicked after entering name and selecting difficulty', () => {
    cy.get('.user-name-input') 
      .type('Test Player'); 
    cy.get('.difficulty-button').contains('Easy').click();
    cy.get('button').contains('PLAY').click(); 
    cy.url().should('include', '/game'); 
  });

  it('should not start the game if the Play button is clicked without entering a username', () => {
    cy.get('.user-name-input').clear(); 
    cy.get('.difficulty-button').contains('Easy').click(); 
    cy.get('button').contains('PLAY').click(); 
    cy.url().should('not.include', '/game');
    cy.get('.error-msg').should('be.visible').and('contain', 'Enter a name, please');
  });

});
