# ESLint Config Readable<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/readable-code
[deps-img]: https://david-dm.org/sebastian-software/readable-code.svg
[npm]: https://www.npmjs.com/package/readable-code
[npm-downloads-img]: https://img.shields.io/npm/dm/readable-code.svg
[npm-version-img]: https://img.shields.io/npm/v/readable-code.svg


Configuration for maintainable which requires excellent readability for Web Projects.


## Goals

- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even when many people are contributing to it.

> "If you want your code to be easy to write, make it easy to read." -- Robert C. Martin

## Features

- Includes a sophisticated ESLint configuration. Optimized for readability.
- Contains linting support for ES2017, React, JSX, Flow, Lodash, Accessiblity, etc.
- Includes configuration for [prettier](https://github.com/prettier/prettier) in conjunction with ESLints fix mode for automatic sane code configuration.



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

You can copy the relevant files into your own project like `.editorconfig`.

For ESLint/StyleLint there is a more sophisticated approach: The configuration can be included like shown below:

### Usage

You can extend your custom ESLint configuration

```yaml
extends:
  readable
```

## Technology Stack

### ESLint ([Project](https://github.com/eslint/eslint) | [Homepage](http://eslint.org/))

Effectively a successor of both [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/). Is configured to use the [Babel Parser](https://github.com/babel/babel-eslint) for full ES2017+ support.

Plugins:

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

### Prettier ([Project](https://github.com/prettier/prettier))

Auto formatting engine for JavaScript (+ ES2017, JSX, and Flow) which intelligently supports limiting line length and other more advanced features.



## Other Prominent Styles

- [ESLint Recommended]()
  - Focussed on potential errors
- [Airbnb]()
- [Standard](https://github.com/standard/eslint-config-standard)
  - Offers [a tool](https://standardjs.com) for easier setup
- [XO](https://github.com/sindresorhus/eslint-config-xo)
  - Offers [a tool](https://github.com/sindresorhus/xo) for easier handling and prettier output
  - Plugins: Unicorn, Import, Ava
  - Optional React Addition
- [Idiomatic](https://github.com/jamespamplin/eslint-config-idiomatic)
  - Uses multiple var declarations in one statement.
- [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app)
  - Focussed on potential errors
  - Plugins: Flowtype, JSX-A11Y, Import, React

> See also: [NPM Usage Comparison](https://npmcharts.com/compare/eslint-config-airbnb,eslint-config-standard,eslint-config-xo,eslint-config-google?minimal=true) between Airbnb, XO, Google and Standard.



## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/readable-code/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2017<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
