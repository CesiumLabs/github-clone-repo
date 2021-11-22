# GitHub Clone Repo

Simple library to download github repo without git.

# Install

```sh
$ npm install github-clone-repo
```

# Example

**demo.mjs**

```js
import clone from "github-clone-repo";

const success = await clone({
    owner: "DevSnowflake",
    repository: "minichat",
    branch: "main",
    outPath: "./output"
})

console.log(success ? "Success!" : "Failed :(");
```

# CommonJS

**demo.cjs**

```js
const clone = (...args) => import("github-clone-repo").then(x => x.default(...args));

clone({
    owner: "DevSnowflake",
    repository: "minichat",
    branch: "main",
    outPath: "./output"
}).then(success => {
    console.log(success ? "Success!" : "Failed :(");
});
```