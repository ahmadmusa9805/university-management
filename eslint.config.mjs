import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    ignores: [
      '**/node_modules/', // ignore `node_modules/` directory
      '.git/',
      'node_modules/*', // ignore its content
      '**/dist/',
    ],
  },
  // {
  //   globals: {
  //     process: "readonly",
  //   },
  // },
]
