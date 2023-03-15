module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  ignorePatterns: [
    '.eslintrc.js',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'prettier.config.js',
    'eslintrc.js',
    'rollup.config.mjs',
    'dist',
    'node_modules'
  ],
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        groups: ['/^react/', 'module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        newlinesBetween: 'always',
      },
    ],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'import/prefer-default-export': 'off'
  },
};
