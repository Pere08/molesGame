// cypress/e2e/game.cy.ts

describe("Mole's Game Page", () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('http://localhost:5173/');
        cy.get('.user-name-input').type('Test Player'); 
        cy.get('.difficulty-button').contains('Easy').click();
        cy.get('button').contains('PLAY').click();
    });

    it('should display the game elements correctly', () => {
        cy.get('.score').should('be.visible'); 
        cy.get('.timer').should('be.visible'); 
        cy.get('.mole').should('have.length.greaterThan', 0); 
    });

    it('should increment score when a mole is clicked', () => {
        cy.get('.mole').first().click(); 
        cy.get('.score').invoke('text').then((initialScore) => {
            const newScore = parseInt(initialScore, 10) + 1; 
            cy.get('.mole').first().click();
            cy.get('.score').should('contain', newScore);
        });
    });

    it('should show game over message when time runs out', () => {
        cy.wait(30000); 
        cy.get('.game-over').should('be.visible').and('contain', 'Game Over'); 
    });

    it('should allow restarting the game', () => {
        cy.get('button').contains('PLAY').click();
        cy.get('.mole').first().click(); 
        cy.get('button').contains('Restart').click(); 
        cy.get('.score').should('contain', '0');
    });
});
