# *ESLint* Config Readable<br/>Zero Config Smart Config for Modern Development<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-img]][npm] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/eslint-config-readable
[deps-img]: https://david-dm.org/sebastian-software/eslint-config-readable/status.svg
[npm]: https://www.npmjs.com/package/eslint-config-readable
[npm-img]: https://badge.fury.io/js/eslint-config-readable.svg

> "If you want your code to be easy to write, make it easy to read." — Robert C. Martin

The aim of this configuration is to achieve optimal readable code for a large number of projects. In many cases, the easing of the code's looseness in comparison to its compactness is an advantage for this. The idea is that code is much more read than written. Clear and structured code is therefore valuable for each additional author.

The code should appear uniform no matter how many authors are involved. But of course, it is not only about formatting (which could be fully solved with new tools like [Prettier](https://prettier.io/)) but also about avoiding errors and mentoring developers. As you will see the chosen infrastructure with *ESLint* as a backbone offers so much more.

With support for React, JSX, JSDoc and the latest JavaScript features through the use of the Babel parser, this configuration is useful in a variety of projects.

Special features include, for example, the built-in control of CSS modules, JSX-based accessibility checks and a usage of the Can-I-Use database to warn on non-widely supported browser features.

There is also the matching [Stylelint Configuration](https://www.npmjs.com/package/stylelint-config-readable) available.



## Rules TLDR

- Unix line breaks.
- No trailing spaces.
- Indent with 2 spaces.
- Double quotes for strings and JSX attributes.
- No dashes in file names (should match `^[a-zA-Z][a-zA-Z0-9.]+$`).
- All files have a `.js` extension, no `.jsx` or `.mjs`.
- No CommonJS - use only ES2015 modules.
- Prefer efficient ES2015 language like template strings, spreading, arrow functions, ...
- Keep an eye on code complexity, nesting levels, file length, ...
- Prefer named parameters (destructing) over long parameter lists.
- No usage of `labels`, `with` and `eval`.
- No magic numbers. Use variables to describe intention.





## Installation

Installation with `npm`:

```bash
npm install --save-dev eslint-config-readable eslint
```

Installation with `yarn`:

```bash
yarn add --dev eslint-config-readable eslint
```

Add the preset to your eslint config e.g. `.eslintrc.yml`

```yaml
extends:
  - readable
```

Though this configuration is meant to be usable without any further configuration you are naturally free to extend it and place overrides into your configuration e.g. by extending the `rules` section:

```yaml
extends:
  - readable
rules:
  indent:
    - error
    - 4
```

> "There is basically no level of configurability that makes everyone happy." — Nicholas C. Zakas


## Matching Prettier Config

As this configuration contains a few formatting rules these are the prettier settings you might want to use in combination with this:

```yaml
# Generally, we allow slightly longer lines (110 for code, 140 for comments),
# but we limit this to a value that leads to better results when using auto formatting.
printWidth: 90

# Use two spaces for tabs
tabWidth: 2

# Unify with convention used in JSX, HTML and CSS to use double quotes
singleQuote: false

# Don't use semicolons where they are not required
semi: false

# Don't do noisy trailing commas
trailingComma: none

# More space is better for readability
bracketSpacing: true

# Put the > of a multi-line JSX element at the end of the last line
jsxBracketSameLine: false

# Include parentheses around a sole arrow function parameter.
arrowParens: always
```

Put this into your `.prettierrc.yml` into the root folder of your project. You can
also copy the file out of this project. Unfortunately *prettier* does not yet
support extending centrally hosted config files.


## Useful Scripts

It is recommended to extend the `script` section of your `package.json` by these entries:

```json
"scripts": {
  "lint:js": "eslint .",
  "fix:js": "eslint --fix .",
  "format:js": "prettier --write '**/*.js' && npm run fix:js"
}
```

Note: If your project is just JavaScript then you could for sure keep out the type specifier `:js` on the task names.



## Visual Studio Code

For using the configuration inside Visual Studio Code it is recommended to enable
the *Prettier* plugin together with *ESLint*. This results into Prettier formatting the code
and *ESLint* fixing minor oddities as configured in this project.

```json
"prettier.eslintIntegration": true,
```


## Zero-Config Environments

This configuration is smarter than most others in the realization that it
comes with pre-configured overrides for specific file and folder name patterns.

Overrides:

- Supports NodeJS APIs and CommonJS for all top-level JavaScript files as these are typically trivial config files which are used without transpilation.
- Supports Jest tests and environment inside of all `*.test.js`, `*.spec.js` and inside a `__tests__` folder.
- Supports client side code (browser environment) inside the folders `client`, `browser` or `web`.
- Supports server side code (NodeJS environment) inside the folders `server`, `node` or `cli`.

This automatic environment tweaking is especially useful for universal application code like when using server side rendering with front-end libraries like ReactJS.


### Explicit NodeJS Config

There is an extended NodeJS focused configuration. Simply change your configuration to:

```yaml
extends:
  - readable/node
```

to enable this configuration with additional checks for security issues and deprecated features.

### Explicit Browser Config

There is an extended Browser focused configuration. Simply change your configuration to:

```yaml
extends:
  - readable/browser
```

This allows usage of typical global browser objects.


## Bundled Plugins

- `compat`: Lint the browser compatibility of your code
- `css-modules`: Checks whether CSS classes which are accessed via CSS modules are defined.
- `filenames`: Validation for file names matching some common sense requirements.
- `graphql`: Check your GraphQL query strings against a schema.
- `import`: Checks whether imports map to valid entry points.
- `jest`: Offering additional support for Jest-specific hints.
- `jsdoc`: Verifies a few key aspects of JSdoc documentation.
- `jsx-a11y`: Accessibility checks for JSX tags e.g. requiring `alt` tags on images.
- `no-use-extend-native`: Prevent extending native objects/classes like `Array` or `String`.
- `node`: Prevents usage of deprecated features and other checks when developing NodeJS based apps.
- `promise`: Checks for correctly working with Promises.
- `react`: React specific checks for requiring specific structures of classes + preferring functional patterns.
- `security`: Checks for security issues in e.g. RegExps.
- `tree-shaking`: Marks all side-effects in module initialization that will interfere with tree-shaking


## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Sebastian Software GmbH Logo" width="460" height="160"/>

Copyright 2015-2019<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
