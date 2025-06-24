import js from '@eslint/js'
import globals from 'globals'
import ReactHooks from 'eslint-plugin-React-hooks'
import ReactRefresh from 'eslint-plugin-React-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'React-hooks': ReactHooks,
      'React-refresh': ReactRefresh,
    },
    rules: {
      ...ReactHooks.configs.recommended.rules,
      'React-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
