module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
  },
  extends: [
    'google',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-len': [
      'warn',
      {
        // 130 on GitHub, 80 on npmjs.org for README.md code blocks
        code: 130,
      },
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-negated-condition': 'warn',
    'prefer-destructuring': [
      'off',
      {
        object: true,
        array: false,
      },
    ],
    'prefer-template': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '/',
        ],
      },
    ],
  },
  overrides: [
    {
      'files': [
        'site/**',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
      'rules': {
        'require-jsdoc': 'off',
      },
    },
  ],
};
