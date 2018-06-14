module.exports = {
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "globals": {
    //"window": true
  },
  "env": {
    //"browser": true,
    "node": true,
    "es6": true,
    //"commonjs": true
    "mocha": true
  },
  /*  "extends": "eslint:recommended",
    "rules": {
      "indent": [
        "error",
        4
      ],
      "linebreak-style": [
        "error",
        "windows"
      ],
      "quotes": [
        "error",
        "double"
      ],
      "semi": [
        "error",
        "always"
      ]
    }*/
};
