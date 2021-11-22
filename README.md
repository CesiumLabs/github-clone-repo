# GitHub Clone Repo

Simple library to download github repo without git.

# Install

```sh
$ npm install github-clone-repo
```

# Example

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
