module.exports = {
  testConcurrency: 20,
  browser: [
      // Add browsers with different viewports
      {width: 800, height: 600, name: 'chrome'},
      {width: 700, height: 500, name: 'firefox'},
  ],
  appName: 'The Kitchen'
}