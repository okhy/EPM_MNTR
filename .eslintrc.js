module.exports = {
  globals: {
    require: true,
    CustomEvent: true,
    // jest config
    jest: true,
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    describe: true,
    require: true,
    test: true,
    it: true,
    expect: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  env: {
    jest: true,
    browser: true
  },
  plugins: ["react", "@typescript-eslint", "prettier"]
}
