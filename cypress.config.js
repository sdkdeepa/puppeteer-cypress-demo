// const { defineConfig } = require('cypress')

// const puppeteerSetup = require('./cypress/support/puppeteer')
// const { getChromiumWebBrowsers } = require('./cypress/support/utils')

// module.exports = defineConfig({
//   projectId: 'u8w8pa',
//   e2e: {
//     setupNodeEvents(on, config) {
//       puppeteerSetup(on)

//       return getChromiumWebBrowsers(config)
//     },
//   },
//   fixturesFolder: false,
// })

const { defineConfig } = require('cypress')

const puppeteerSetup = require('./cypress/support/puppeteer')
const { getChromiumWebBrowsers } = require('./cypress/support/utils')

module.exports = defineConfig({
  projectId: 'u8w8pa',
  e2e: {
    setupNodeEvents(on, config) {
      // Puppeteer setup configuration
      puppeteerSetup(on, {
        // Puppeteer launch options
        launchOptions: {
          headless: true, // Set to false for debugging
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      })

      return getChromiumWebBrowsers(config)
    },
  },
  fixturesFolder: false,
  // Specify the desired browser (optional)
  browser: 'chrome',
})
