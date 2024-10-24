describe("Mole's Game Page", () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('http://localhost:5173/');
        cy.get('.user-name-input').type('Player'); 
        cy.get('.difficulty-button').contains('Easy').click();
        cy.get('button').contains('PLAY').click();
    });

    it('should display the game elements correctly', () => {
        cy.get('.show-points').should('be.visible');
        cy.get('.counter').should('be.visible'); 
        cy.get('.mole-box').should('have.length.greaterThan', 0); 
    });

    it('should increment score when a mole is clicked', () => {
        cy.get('.mole-box').first().click(); 
        cy.get('.show-points .points').invoke('text').then((initialScore) => {
            const newScore = parseInt(initialScore, 10) + 1;
            cy.get('.mole-box').first().click(); 
            cy.get('.show-points .points').should('contain', newScore); 
        });
    });

    it('should show game over message when time runs out', () => {
        cy.wait(40000); 
        cy.contains('Game Over').should('be.visible'); 
    });

    it('should allow restarting the game', () => {
        cy.get('.mole-box').first().click(); 
        cy.get('.action-button').contains('Restart').click(); 
        cy.get('.show-points .points').should('contain', '0'); 
    });
});
