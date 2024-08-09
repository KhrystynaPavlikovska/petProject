const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'f8p85s',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    } }
    
});