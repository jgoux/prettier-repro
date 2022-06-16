# Steps to reproduce

## ESLint CLI (working)
1. run `pnpm lint` to see the error
2. run `pnpm lint:fix` to fix the error, the formatting is fine here

## ESLint extension or VSCode
1. set the `"source.fixAll.eslint": true` in `.vscode/settings.json`
2. open `src/repro.ts` and save, `\` characters are inserted