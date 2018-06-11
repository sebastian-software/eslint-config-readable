/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    "./index.js"
  ],
  globals: {
    // Globally allow fetch which is generally polyfilled if not available natively.
    fetch: false
  },
  env: {
    browser: true,
    node: false
  }
}
