/* eslint-disable import/no-commonjs */
/* eslint-disable tree-shaking/no-side-effects-in-initialization */
/* eslint-disable immutable/no-mutation */
module.exports = {
  extends: [
    "./index.js",
    "./rules/node.yml"
  ],
  env: {
    browser: true,
    node: false
  }
}
