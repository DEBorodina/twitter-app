module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
           "jsx": true
       }
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/exports": "error",
        'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react | <THIRD_PARTY_MODULES>'],
          ['^@?\\w'],
          ['@/(.*)'],
          ['^[./]'],
        ],
      },
    ],
    }
}
