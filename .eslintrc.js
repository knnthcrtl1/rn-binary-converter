module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard-with-typescript'
  ],
  overrides: [
    // {
    //   // enable the rule specifically for TypeScript files
    //   files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
    //   rules: {
    //     "@typescript-eslint/explicit-function-return-type": "error"
    //   }
    // }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    'react/jsx-key': 'off',
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
