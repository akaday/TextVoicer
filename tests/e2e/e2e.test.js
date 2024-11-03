const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

describe('TextVoicer End-to-End Tests', () => {
  it('should generate, display, and play the audio URL correctly', () => {
    cy.visit('http://localhost:3000');

    // Enter text
    cy.get('textarea').type('Hello, world!');

    // Select a voice
    cy.get('select').select('voice1');

    // Click the "Generate Voiceover" button
    cy.get('button').contains('Generate Voiceover').click();

    // Verify that the audio URL is generated, displayed, and played correctly
    cy.get('audio').should('have.attr', 'src').and('include', 'http');
    cy.get('audio').then(($audio) => {
      $audio[0].play();
      cy.wrap($audio[0]).should('have.prop', 'paused', false);
    });
  });
});
