const appRoot = require("app-root-dir").get()
const existsSync = require("fs").existsSync
const join = require("path").join

const hasGraphQL = existsSync(join(appRoot, ".graphqlconfig"))

/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    "./rules/basics.yml",
    "./rules/cssmodules.yml",
    "./rules/docs.yml",
    "./rules/filenames.yml",
    hasGraphQL ? "./rules/graphql.yml" : null,
    "./rules/import.yml",
    "./rules/jsx-a11y.yml",
    "./rules/modern.yml",
    "./rules/promise.yml",
    "./rules/quality.yml",
    "./rules/react.yml",
    "./rules/style.yml"
  ].filter(Boolean),

  overrides:
  [
    {
      files: [
        // Dot files
        ".*.js",

        // Cosmiconfig files
        "**/*.config.*.js"
      ],
      env: {
        node: true
      },
      rules: {
        // Allow commonjs in these typically non-transpiled files
        "import/no-commonjs": "off"
      }
    },

    // Relax some settings for Storybook files
    {
      files: [
        "**/*.story.js"
      ],
      rules: {
        // Don't enforce usage of translation features inside Stories
        "react/jsx-no-literals": "off"
      }
    },

    // Automatically tweak for test related files
    {
      files: [
        // Typical approach for central test files
        "**/__tests__/**/*.js",

        // Typical approach for co-located test files
        "**/*.spec.js",
        "**/*.test.js"
      ],
      env: {
        jest: true
      },
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-jasmine-globals": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jest/prefer-to-be-null": "warn",
        "jest/prefer-to-be-undefined": "warn",
        "jest/no-large-snapshots": [
          "warn", { maxSize: 50 }
        ],

        // The otherwise useful concept to let all then-blocks return something
        // is often not required in tests where this mainly functions as an async helper.
        "promise/always-return": "off",

        // File names in tests typically follow other conversations
        "filenames/match-regex": "off"
      }
    },

    // Auto enable node environment for files inside "client", "browser" or "web" folders.
    {
      files: [
        "**/client/**/*.js",
        "**/browser/**/*.js",
        "**/web/**/*.js"
      ],
      env: {
        browser: true,
        node: false
      }
    },

    // Auto enable node environment for files inside "server", "node" or "cli" folders.
    {
      files: [
        "**/server/**/*.js",
        "**/node/**/*.js",
        "**/cli/**/*.js"
      ],
      env: {
        node: true,
        browser: false
      },
      rules: {
        // This is super useful for browser development as it uses `browserslist`.
        // Unfortunately this does not offer any support for NodeJS.
        "compat/compat": "off"
      }
    }
  ]
}
