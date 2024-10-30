const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //acesso ao site/ambiente
    baseUrl: 'https://serverest.dev/',
    reporter: 'mochawesome',
    screenshotOnRunFailure: true,  //gera print quando um teste falhar
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      "reportFilename": "report",
      "timestamp": "mmddyyyy_HHMMss",
      "inlineAssets": true,
      "autoOpen": true,
      "reportPageTitle": "Relatório de execução de testes backend",
      "embeddedScreenshots": true  //integrar prints no relatório
    }
  },
});
