# your-poster

> A Mpvue project
> mpvue 快速入门五分钟教程传送门 http://mpvue.com/mpvue/quickstart.html

> 微信开发者工具传送门 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

## Build Setup

``` bash
# 初始化项目
https://github.com/epicmr/your-poster.git
cd your-poster

#安装依赖van-weapp ui

#安装依赖painter

# 安装依赖
npm install

# 开发时构建
npm run dev

# 打包构建
npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev:wx
npm run dev:swan
npm run dev:tt
npm run dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 导入项目到微信开发者工具即可运行
记得开启es6 转 es5

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
