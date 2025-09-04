# node-sea-boilerplate

Boilerplate project for Node.js [single executable applications][node-sea]

[node-sea]: https://nodejs.org/api/single-executable-applications.html

## How to use

Write your code in `src/main.ts`.

### lint (biome) & type-checking (tsc)

```bash
npm run check
```

### Run code without injecting

```bash
npm run exec
```

### Build

Your app will be stored in `build/app`.

```bash
npm run build
```

### Notes

- Currently, this project only supports the Linux x64 platform.
  But Node SEA also seems to work on other platforms like Windows x64 or macOS arm64.
- If you have problems with SIGSEGV, you may be using a stripped version of the Node.js binary.
  Node SEA seems not to work when symbols are stripped.
