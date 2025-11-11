import radsjs from '@radsjs/eslint-plugin'






export default radsjs.getConfig({
  rules: {
    'test/no-only-tests': ['off'],
    'unicorn/no-array-for-each': ['off'],
    'node/prefer-global/process': ['off'],
    'vue/block-order': ['off'],

    'ts/no-unsafe-function-type': ['off'],
    'regexp/no-unused-capturing-group': ['off'],
    'ts/no-empty-object-type': ['off'],
    'unicorn/number-literal-case': ['off'],
    'unicorn/prefer-number-properties': ['off'],
    'ts/method-signature-style': ['off'],
    'ts/no-wrapper-object-types': ['off'],
    'ts/no-use-before-define': ['off'],
    'perfectionist/sort-named-imports': ['off'],
    'unicorn/new-for-builtins': ['off'],
    'jsdoc/require-returns-description': ['off'],
    'regexp/use-ignore-case': ['off'],
    'node/prefer-global/buffer': ['off'],
    // Causes Maximum call stack size exceeded - disabled for now
    'prefer-const': 'off',
    'unused-imports/no-unused-imports': 'off',
  },
  ignores: [],
})
