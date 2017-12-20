/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    "./rules/basics.yml",
    "./rules/compat.yml",
    "./rules/cssmodules.yml",
    "./rules/docs.yml",
    "./rules/filenames.yml",
    "./rules/flowtype.yml",
    "./rules/import.yml",
    "./rules/jsx-a11y.yml",
    "./rules/modern.yml",
    "./rules/promise.yml",
    "./rules/quality.yml",
    "./rules/react.yml",
    "./rules/style.yml"
  ],

  "overrides": [
    {
      "files": [
        // Dot files
        ".*.js",

        // Cosmiconfig files
        "*.config.*.js"
      ],
      "rules": {
        "import/no-commonjs": "off"
      }
    },
    {
      "files": [
        // Jest Tests
        "**/__tests__/*.js",

        // Alternative using a naming convention
        "*.spec.js",
        "*.test.js"
      ],
      "env": {
        jest: true,
        mocha: true
      }
    }
  ]
}
