const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");
module.exports = defineConfig({
  projectId: 'f8p85s',
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;

    } }, 
    env: {
      allure: true,
      allureCleanResults: true

    }

});