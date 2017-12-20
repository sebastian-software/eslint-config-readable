# ESLint Config Readable<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-img]][npm] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/eslint-config-readable
[deps-img]: https://david-dm.org/sebastian-software/eslint-config-readable/status.svg
[npm]: https://www.npmjs.com/package/eslint-config-readable
[npm-img]: https://badge.fury.io/js/eslint-config-readable.svg

> "If you want your code to be easy to write, make it easy to read." — Robert C. Martin

The aim of this configuration is to achieve optimal readable code for a large number of projects. In many cases, the easing of the code's looseness in comparison to its compactness is an advantage for this. The idea is that code is much more read than written. Clear and structured code is therefore valuable for each additional author.

The code should appear uniform no matter how many authors are involved. But of course, it is not only about formatting (which could be fully solved with new tools like [Prettier](https://prettier.io/)) but also about avoiding errors and mentoring developers. As you will see the chosen infrastructure with ESLint as a backbone offers so much more.

With support for React, Flowtype, JSX, JSDoc and the latest JavaScript features through the use of the Babel parser, this configuration is useful in a variety of projects.

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


## Matching Prettier Config

As this configuration contains a few formatting rules these are the prettier settings you might want to use in combination with this:




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

Though this configuration is meant to be usable without any further configuration you are naturally free to extend it and place overrides into your configuration e.g. by extending the `rules` section:

```yaml
extends:
  - readable
rules:
  indent:
    - error
    - 4
```

## NodeJS Config

There is an extended NodeJS focused configuration. Simply change your configuration to:

```yaml
extends:
  - readable/node
```

to enable this configuration with additional checks for security issues and deprecated features.




## Activated Plugins

- `css-modules`: Checks whether CSS classes which are accessed via CSS modules are defined.
- `filenames`: Validation for file names matching some common sense requirements.
- `flowtype`: Support for checking FlowType syntax to match rules.
- `flowtype-errors`: Helps writing correct FlowType declarations.
- `import`: Checks whether imports map to valid entry points.
- `jsx-a11y`: Accessibility checks for JSX tags e.g. requiring `alt` tags on images.
- `no-use-extend-native`: Prevent extending native objects/classes like `Array` or `String`.
- `node`: Prevents usage of deprecated features and other checks when developing NodeJS based apps.
- `promise`: Checks for correctly working with Promises.
- `react`: React specific checks for requiring specific structures of classes + preferring functional patterns.
- `security`: Checks for security issues in e.g. RegExps.



## Copyright

<img src="https://github.com/sebastian-software/sebastian-software-brand/raw/master/sebastiansoftware-en.svg?sanitize=true" alt="Sebastian Software GmbH Logo" width="250" />

Copyright 2015-2018<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
