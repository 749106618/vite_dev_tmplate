# Vue 3 + TypeScript + Vite

> Vite、eslint、prettier、husky、commitlint、lint-staged

### 1. 使用Vite脚手架初始化项目

```
pnpm create vite
```

### 2. 代码加入`eslint`校验，与`prettier`自动格式化

```
1.安装 eslint,@eslint/js: ESLint的核心库
安装 prettier: prettier格式化代码的核心库
2.npx eslint --init  初始化eslint配置文件
3.添加自定义规则
```

### 3. 使用husky、commitlint、lint-staged

```
1.安装husky: git钩子工具
2.配置package.json文件添加"prepare": "husky install"
3.npx husky add .husky/pre-commit "npx lint-staged"
4.安装lint-staged: git提交代码时，只对暂存区的文件进行校验
5.
package.json文件中，添加
"lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      "npm run prettier"
    ]
  }

6.安装commitlint/cli: git提交规范
7.安装@commitlint/config-conventional: commitlint的配置文件，使用规范
8.在项目根目录下，新建commitlint.config.js文件
9.npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```

### 4. 环境变量和模式

> 开发环境 `dev` .env
> 预发环境，`pre` .env.staging
> 生产环境，`pro` .env.production 文件内容如下：
> VITE_BASE_URL = 'http://yewu-pre.jd.com/api'
> import.meta.env.VITE_BASE_URL 用于获取环境变量
> 注意：获取当前模式一般用 process.env.NODE_ENV 执行vite是development，执行vite build是production

### 5. normalize.css

> 安装normalize.css，解决浏览器默认样式不一致问题

### 6. axios

> 安装axios，用于发送网络请求

### 7. vue-router

> 安装vue-router，用于路由管理

### 8. pinia

> 安装pinia，用于状态管理
