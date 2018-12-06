module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 9
    },
    extends: 'google',
    rules: {
        'max-len': ['warn',
            {
                code: 130
            } // 130 on GitHub, 80 on npmjs.org for README.md code blocks
        ],
        'arrow-parens': ['error', 'as-needed'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'no-negated-condition': 'warn',
        'spaced-comment': ['error', 'always',
            {
                exceptions: ['/']
            }
        ]
    },
    globals: {
        DOMException: false,
        URL: false,
    }
};