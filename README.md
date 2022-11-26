This repo is created to replicate [issue #2585](https://github.com/import-js/eslint-plugin-import/issues/2585) raised for `eslint-plugin-import`.

On my end, everything works properly, no unnceessary errors are flagged for importing from `victory`.

Below is the message I got after running `eslint`

```
> sandbox-new@1.0.0 debug
> npx eslint ./debug


/Users/azyzz/Documents/fellowship/sandbox-eslint-import/debug/victory-import.js
  1:10  error  'VictoryAxis' is defined but never used  no-unused-vars
  1:23  error  'VictoryLine' is defined but never used  no-unused-vars
  1:36  error  'VictoryArea' is defined but never used  no-unused-vars
```

### Installation

1) clone the repo

2) Run `npm install`

3) Run `npm run debug`
