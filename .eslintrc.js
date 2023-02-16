module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/jsx-runtime"
  ],
  overrides: [
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: `./tsconfig.json`
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
