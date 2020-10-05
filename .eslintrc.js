module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "error",
    "import/no-unresolved": "off",
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    semi: "off",
    "@typescript-eslint/semi": "error"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off"
      }
    }
  ]
};
