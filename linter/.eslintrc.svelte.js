module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "extraFileExtensions": ["svelte"],
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "svelte3",
    "@typescript-eslint",
    "import",
    "sort-keys-fix"
  ],
  "processor": "svelte3/svelte3",
  "rules": {
    "import/first": 0,
    "import/no-duplicates": 0,
    "import/no-mutable-exports": 0
  },
  "settings": {
    "svelte3/typescript": require("typescript")
  }
};