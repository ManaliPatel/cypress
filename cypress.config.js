const { defineConfig } = require("cypress");

module.exports = defineConfig({
  apiUrl: 'http://localhost:3001',
  e2e: {
    // baseUrl: 'http://localhost:3000',
    // apiUrl: 'http://localhost:3001',
  },
});
