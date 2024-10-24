describe("Mole's Game Page", () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('http://localhost:5173/');
        cy.get('.user-name-input').type('Player'); 
        cy.get('.difficulty-button').contains('Hard').click();
        cy.get('button').contains('PLAY').click();
    });

    it('should display the game elements correctly', () => {
        cy.get('.show-points').should('be.visible');
        cy.get('.counter').should('be.visible'); 
        cy.get('.mole-box').should('have.length.greaterThan', 0); 
    });


    it('should show game over message when time runs out', () => {
        cy.get('.action-button').click();
        cy.wait(35000); 
        cy.contains('Thanks for play!').should('be.visible'); 
    });

    it('should allow restarting the game', () => {
        cy.get('.action-button').click();
        cy.wait(35000); 
        cy.contains('Play again').click(); 
        cy.get('.show-points .points').should('contain', '0'); 
    });
});
