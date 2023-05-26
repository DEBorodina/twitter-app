module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
      "airbnb", 
      "airbnb/hooks",
      'airbnb-typescript',
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    "settings": {
        "import/resolver": {
            "alias": {
                "map": [
                    ["@", "./src"],
                ],
                "extensions": ['.js', '.jsx', '.ts', '.tsx', '.svg'],
            }
        }
    },
    
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
           "jsx": true
       },
      "project": ['./tsconfig.json'], 
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort"
    ],
    "rules": {
       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
       '@typescript-eslint/no-var-requires': 'off',
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/exports": "error",
        'import/prefer-default-export':'off',
        '@typescript-eslint/no-implied-eval':'off',
        'react/jsx-props-no-spreading':'off',
        '@typescript-eslint/dot-notation':'off',
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/function-component-definition':'off',
        'react/prop-types':'off',
        'prefer-template':'off',
        'react/display-name':'off',
        'no-nested-ternary':'off',
        '@typescript-eslint/no-shadow':'off',
        'pt-eslint/no-non-null-assertion':'off',
        '@typescript-eslint/no-empty-interface':'off',
        '@typescript-eslint/no-non-null-assertion':'off',
        '@typescript-eslint/naming-convention':'off',
        'react-hooks/exhaustive-deps':'off',
        'consistent-return':'off',
        'import/no-cycle':'off',
        'no-case-declarations':'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain':'off',
        '@typescript-eslint/default-param-last':'off',
        '@typescript-eslint/no-nested-ternary':'off',
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
