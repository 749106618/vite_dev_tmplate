import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
// 提供 Vue 相关的 ESLint 规则,似乎没有生效
import pluginVue from 'eslint-plugin-vue'
// 防止eslint和prettier冲突
import prettier from 'eslint-plugin-prettier'
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error', // prettier
      'no-var': 'error', // 禁止使用 var
      'no-useless-escape': 'off', // 禁止不必要的转义字符
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // typeScript (https://typescript-eslint.io/rules)
      //禁止在typeScript中使用var
      '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量
      '@typescript-eslint/no-useless-escape': 'off', // 禁止不必要的转义字符
      '@typescript-eslint/no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@typescript-eslint/no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off', // 禁止使用 Function 作为 type。
    },
  },
]
