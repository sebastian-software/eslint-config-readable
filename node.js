/* eslint-disable import/no-commonjs */
/* eslint-disable immutable/no-mutation */
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
    "compat/compat": "off",

    // Immutability is mainly interesting for client side
    // state management like Redux. Not so much required
    // when doing pure NodeJS libraries and cli tools.
    "immutable/no-mutation": "off"
  }
}
