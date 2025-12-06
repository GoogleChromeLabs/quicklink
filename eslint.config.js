const {fixupConfigRules, fixupPluginRules} = require('@eslint/compat');
const globals = require('globals');
const googleConfig = require('eslint-config-google');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const reactPlugin = require('eslint-plugin-react');

const jsdocRecommended = jsdocPlugin.configs['flat/recommended'] || jsdocPlugin.configs.recommended;

const [reactRecommended] = fixupConfigRules(reactPlugin.configs.recommended);
const googleRules = {
  ...googleConfig.rules,
};
delete googleRules['valid-jsdoc'];
delete googleRules['require-jsdoc'];

module.exports = [
  {
    ignores: [
      '**/*.min.js',
      '**/dist/',
      '**/build/',
      '**/vendor/',
      'eslint.config.js',
    ],
  },
  {
    name: 'quicklink/base',
    languageOptions: {
      ecmaVersion: 2017,
      sourceType: 'script',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: fixupPluginRules(reactPlugin),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...(reactRecommended?.rules ?? reactPlugin.configs.recommended.rules),
      ...googleRules,
      'max-len': [
        'warn',
        {
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
      'no-const-assign': 'error',
      'prefer-destructuring': [
        'off',
        {
          object: true,
          array: false,
        },
      ],
      'prefer-template': 'error',
      strict: [
        'error',
        'global',
      ],
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
  },
  {
    files: [
      'src/**',
    ],
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      strict: [
        'error',
        'never',
      ],
    },
  },
  ...(Array.isArray(jsdocRecommended) ? jsdocRecommended : [jsdocRecommended]),
  {
    files: [
      'site/src/assets/js/**',
    ],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'jsdoc/require-jsdoc': 'off',
      strict: [
        'error',
        'function',
      ],
    },
  },
];
