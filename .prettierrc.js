// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  trailingComma: 'all', //拖尾逗号
  singleQuote: true, //使用单引号
  semi: false, //要不要分号
  printWidth: 100, //打印多少个字符换行
  arrowParens: 'avoid', //箭头函数要不要见括号 avoid always
  endOfLine: 'lf', //换行符的格式 Unix lf  Windows crlf  Auto
  experimentalTernaries: true, //允许在三元表达式中使用换行符
  tabWidth: 2, //缩进空格数
  useTabs: false, //是否使用Tab缩进
  quoteProps: 'consistent', //对象属性是否使用引号
  jsxSingleQuote: false, // jsx是否使用单引号
  bracketSpacing: true, //对象花括号内是否加空格
  bracketSameLine: false,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
}
