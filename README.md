# GitHub Clone Repo

Simple library to download github repo without git.

# Install

```sh
$ npm install github-clone-repo
```

# Example

```js
const clone = require("github-clone-repo");

clone({
    owner: "DevSnowflake",
    repository: "minichat",
    branch: "main",
    outPath: `${__dirname}/output`
}).then(status => {
    if (status) console.log("Success!");
    else console.log("Failed :(");
});
```