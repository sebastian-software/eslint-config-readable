# ESLint Config Readable<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-img]][npm] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/eslint-config-readable
[deps-img]: https://david-dm.org/sebastian-software/eslint-config-readable/status.svg
[npm]: https://www.npmjs.com/package/eslint-config-readable
[npm-img]: https://badge.fury.io/js/eslint-config-readable.svg

The aim of this configuration is to achieve optimal readable code for a large number of projects. In many cases, the easing of the code's looseness in comparison to its compactness is an advantage for this. The idea is that code is much more read than written. Clear and structured code is therefore valuable for each additional author.

There is also the matching [Stylelint Configuration](https://www.npmjs.com/package/stylelint-config-readable) available.

> "If you want your code to be easy to write, make it easy to read." — Robert C. Martin

## Goals

- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even when many people are contributing to it.

> "If you want your code to be easy to write, make it easy to read." -- Robert C. Martin

## Features

- Includes a sophisticated ESLint configuration. Optimized for readability.
- Contains linting support for ES2017, React, JSX, Flow, Lodash, Accessiblity, etc.


## Formatting Rules

- Unix line breaks.
- No trailing spaces.
- Indent with 2 spaces no tabs.
- Double quotes for strings and JSX attributes.
- Tend to more spaces and whitespace in your code.
- No dashes in file names (should match `^[a-zA-Z][a-zA-Z0-9.]+$`).
- All files have a `.js` extension, no `.jsx` or `.mjs`.
- No CommonJS - use only ES2015 modules.
- Prefer efficient ES2015 language like template strings, spreading, arrow functions, ...
- Keep an eye on code complexity, nesting levels, file length, ...
- Prefer named parameters (destructing) over long parameter lists.
- No usage of `labels`, `with` and `eval`.
- No magic numbers. Use variables to describe intention.


## Usage

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

You can place your overrides and additions into the `rules` section as well:

```yaml
extends:
  - readable
rules:
  indent:
    - error
    - 4
```

## Activated Plugins

- `css-modules`: Checks whether CSS classes which are accessed via CSS modules are defined.
- `filenames`: Validation for file names matching some common sense requirements.
- `flowtype`: Support for checking FlowType syntax to match rules.
- `flowtype-errors`: Helps writing correct FlowType declarations.
- `import`: Checks whether imports map to valid entry points.
- `jsx-a11y`: Accessibility checks for JSX tags e.g. requiring `alt` tags on images.
- `lodash`: Lodash specific checks and hints to prefer common features over custom/builtin.
- `no-use-extend-native`: Prevent extending native objects/classes like `Array` or `String`.
- `node`: Prevents usage of deprecated features and other checks when developing NodeJS based apps.
- `promise`: Checks for correctly working with Promises.
- `react`: React specific checks for requiring specific structures of classes + preferring functional patterns.
- `security`: Checks for security issues in e.g. RegExps.
- `you-dont-need-lodash-underscore`: Showcases where ES5 would be a better solution than Lodash.



## Copyright

<img src="https://github.com/sebastian-software/sebastian-software-brand/raw/master/sebastiansoftware-en.svg?sanitize=true" alt="Sebastian Software GmbH Logo" width="250" />

Copyright 2015-2018<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
