const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f8p85s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
