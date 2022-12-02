This repo is created to replicate [issue #2502](https://github.com/import-js/eslint-plugin-import/issues/2502) raised for `eslint-plugin-import`.

I was not able to reproduce the bug raised in the issue. On my end, everything works properly. `no-unused-modules` was not wrongly triggered for exported type that was imported. Rule works well and triggers an error only when exported type is not imported/used anywhere.

```typescript
//foo.ts
export type foo = {
    name: string;
    knownFor: string[];
  };

export const bar = "a";
  
```

```typescript
//debug.ts
import { bar, type foo } from './foo'
```

The message I receive after linting it:

```

> sandbox-new@1.0.0 debug
> TIMING=1 npx eslint ./debug


/Users/azyzz/Documents/fellowship/sandbox-eslint-import/debug/debug.ts
  1:10  warning  'bar' is defined but never used  @typescript-eslint/no-unused-vars
  1:20  warning  'foo' is defined but never used  @typescript-eslint/no-unused-vars

✖ 2 problems (0 errors, 2 warnings)

Rule                                            | Time (ms) | Relative
:-----------------------------------------------|----------:|--------:
import/no-unused-modules                        |    25.566 |    76.5%
@typescript-eslint/no-unused-vars               |     2.879 |     8.6%
@typescript-eslint/ban-types                    |     0.350 |     1.0%
import/namespace                                |     0.346 |     1.0%
import/no-unresolved                            |     0.313 |     0.9%
import/export                                   |     0.263 |     0.8%
import/no-duplicates                            |     0.262 |     0.8%
no-global-assign                                |     0.252 |     0.8%
no-misleading-character-class                   |     0.250 |     0.7%
@typescript-eslint/adjacent-overload-signatures |     0.217 |     0.6%
```

We can see that `no-unused-modules` is executed, but no false errors are flagged, behavior was as expected.

When I did not import exported type in my `debug.ts` file:

```typescript
//debug.ts
import { bar } from './foo'
```

Error was flagged by the rule `no-unused-modules` as expected.

```
> sandbox-new@1.0.0 debug
> TIMING=1 npx eslint ./debug


/Users/azyzz/Documents/fellowship/sandbox-eslint-import/debug/debug.ts
  1:10  warning  'bar' is defined but never used  @typescript-eslint/no-unused-vars

/Users/azyzz/Documents/fellowship/sandbox-eslint-import/debug/foo.ts
  1:1  warning  exported declaration 'foo' not used within other modules  import/no-unused-modules

✖ 2 problems (0 errors, 2 warnings)

Rule                                            | Time (ms) | Relative
:-----------------------------------------------|----------:|--------:
import/no-unused-modules                        |    31.049 |    80.2%
@typescript-eslint/no-unused-vars               |     2.791 |     7.2%
import/namespace                                |     0.345 |     0.9%
import/no-unresolved                            |     0.314 |     0.8%
import/no-duplicates                            |     0.269 |     0.7%
import/export                                   |     0.255 |     0.7%
no-global-assign                                |     0.251 |     0.6%
no-misleading-character-class                   |     0.250 |     0.6%
@typescript-eslint/ban-types                    |     0.231 |     0.6%
@typescript-eslint/adjacent-overload-signatures |     0.216 |     0.6%
```

I changed `debug.ts` to `debug.tsx`, but behavior was still as expected. No falsely flagged errors. 


### Installation

1) clone the repo

2) Run `npm install`

3) Run `npm run debug`

4) To avoid benchmark details, delete `TIMING=1` in `package.json` file.
