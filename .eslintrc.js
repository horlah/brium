module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'semi': [2, 'always'],
        'space-before-function-paren': ['error', 'never'],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
