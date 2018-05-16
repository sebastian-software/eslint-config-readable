/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    "./index.js",
    "./rules/node.yml"
  ],
  env: {
    browser: false,
    node: true
  },
  rules: {
    // This is super useful for browser development as it uses `browserslist`.
    // Unfortunately this does not offer any support for NodeJS.
    "compat/compat": "off"
  }
}
