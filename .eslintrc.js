module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:all"],
  "overrides": [
    {
      "extends": "./linter/.eslintrc.javascript.js",
      "files": ["*.js"]
    },
    {
      "extends": "./linter/.eslintrc.typescript.js",
      "files": ["*.ts"]
    },
    {
      "extends": "./linter/.eslintrc.svelte.js",
      "files": ["*.svelte"]
    }
  ],
  "rules": {
    // キャメルケースを強要しない
    "camelcase": "off",

    // コメントアウトの文章の初めを大文字にしない
    "capitalized-comments": "off",

    // デフォルト値がある引数は最後にしなくても良い
    "default-param-last": "off",

    // function がズレるので無効
    "function-call-argument-newline": "off",

    // 1文字の変数を許可しない
    "id-length": [
      "error",
      { "exceptions": ["_"] }
    ],

    // import 文はソートする
    "import/order": [
      2,
      { "alphabetize": { "order": "asc" } }
    ],

    // インデントはスペース2個分
    "indent": [
      "error",
      2
    ],

    // 初期化するときに初期値がなくても良い
    "init-declarations": "off",

    // コメントのみ最大列無視
    "max-len": [
      "error",
      { "ignoreComments": true }
    ],

    // ファイルの最大行数を制限しない
    "max-lines": "off",

    "max-statements": "off",

    "no-duplicate-imports": "off",

    // マジックナンバーを許可する
    "no-magic-numbers": "off",

    // process.env 使用許可
    "no-process-env": "off",

    // return の時に変数に代入できる
    "no-return-assign": "off",

    // 三項演算子有効
    "no-ternary": "off",

    // undefined 使える
    "no-undefined": "off",

    // object の隙間を開ける
    "object-curly-spacing": [
      "error",
      "always"
    ],

    // const 宣言をまとめない
    "one-var": "off",

    // object キーをソートする
    "sort-imports": 0,

    "sort-keys-fix/sort-keys-fix": "error",

    // "use strict" を強要しない
    "strict": [
      "error",
      "never"
    ]
  }
};
