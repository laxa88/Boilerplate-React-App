// https://eslint.org/docs/user-guide/configuring
// 0 = "off", 1 = "warn", 2 = "error"
module.exports = {
  "extends": [
    "airbnb", // import airbnb's eslint rules
  ],
  "plugins": [
    "jest", // required by "env" to allow jest tests to use global variables
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // allows .js files to have .jsx syntax
    "import/no-extraneous-dependencies": [1], // ignore error for "config" import alias
    "import/no-unresolved": [1], // ignore error for "config" import alias
    "import/extensions": [1], // ignore error for "config" import alias
    "linebreak-style": [2, "windows"], // Ignores LF (Unix) endlines in favour for CRLF
    "max-len": [1, 100, 2, {ignoreComments: true}], // Only warn for lines exceeding max-len
    "quotes": [2, "double"],
  },
  "env": {
    "browser": true, // allows the use browser variables, e.g. "document.xxx"
    "jest/globals": true,
  }
};