describe("Mole's Game Page", () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('http://localhost:5173/');
        cy.get('.user-name-input').type('Player'); 
        cy.get('.difficulty-button').contains('Easy').click();
        cy.get('button').contains('PLAY').click();
    });

    it('should display the game elements correctly', () => {
        cy.get('.show-points').should('be.visible'); // Elemento de puntos
        cy.get('.counter').should('be.visible'); // Elemento de contador de tiempo
        cy.get('.mole-box').should('have.length.greaterThan', 0); // Las cajas de los topos
    });

    it('should increment score when a mole is clicked', () => {
        cy.get('.mole-box').first().click(); // Click en el primer topo
        cy.get('.show-points .points').invoke('text').then((initialScore) => {
            const newScore = parseInt(initialScore, 10) + 1;
            cy.get('.mole-box').first().click(); // Otro click para aumentar el puntaje
            cy.get('.show-points .points').should('contain', newScore); // Verifica que el puntaje aumentó
        });
    });

    it('should show game over message when time runs out', () => {
        cy.wait(40000); // Esperar a que el tiempo se agote
        cy.contains('Game Over').should('be.visible'); // Verificar si el mensaje "Game Over" aparece
    });

    it('should allow restarting the game', () => {
        cy.get('.mole-box').first().click(); // Click en el primer topo
        cy.get('.action-button').contains('Restart').click(); // Click en el botón de reinicio
        cy.get('.show-points .points').should('contain', '0'); // Verificar que el puntaje se reinicia a 0
    });
});
