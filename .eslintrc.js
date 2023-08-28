module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors", 
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "plugins": ["react", "@typescript-eslint", "import"],
  "rules": {
    "@typescript-eslint/no-loss-of-precision": "off",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-native/no-inline-styles": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "warn",
    "import/order": [
      "error",
      {
        "groups": [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        "pathGroups": [],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
        "newlines-between": "always",
      },
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/ignore": ["react-native"],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": {}
    },
  }
};
