---
outline: deep
---

# npm script串/并行执行
> npm-run-all 解决串并行问题

## 概述
- 源码：https://github.com/mysticatea/npm-run-all?tab=readme-ov-file
- npmjs：https://www.npmjs.com/package/npm-run-all
- 安装
```bash
$ npm install npm-run-all --save-dev
# or
$ yarn add npm-run-all --dev
```
- 3个指令
```bash
# 经典指令，通过参数控制串并行
npm-run-all
# 串行执行命令
run-s
# 并行执行命令
run-p
```

## npm-run-all 命令使用
> 参考文档：https://github.com/mysticatea/npm-run-all/blob/master/docs/npm-run-all.md

package.json
```json
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```



### 顺序执行这些命令
```bash
$ npm-run-all clean lint build

# 并行执行这些命令
$ npm-run-all --parallel lint build
```

### 混合串并行脚本案例1
> 1、先串行clean、lint
> 2、再并行执行watch:html、watch:js
```bash
$ npm-run-all clean lint --parallel watch:html watch:js
```

### 混合串并行脚本案例2
> 1、先顺序执行 a、b
> 2、再并行执行 c、d
> 3、再顺序运行 e、f
> 4、再并行运行 g、h、i
```bash
$ npm-run-all a b --parallel c d --serial e f --parallel g h i
```

### 脚本名称匹配
这种方式会运行 watch 的子脚本，如：watch:html、watch:js，不运行子-子脚本
```bash
$ npm-run-all --parallel watch:*
```

这种方式会运行 watch 的子脚本，如 watch:html、watch:js，也会运行 watch 的子-子脚本，如 watch:js:index
```bash
$ npm-run-all --parallel watch:**
```

### 带参数等方式(略，见下面 npm-s，或见文档)

## npm-s 串行执行脚本
> 文档：https://github.com/mysticatea/npm-run-all/blob/master/docs/run-s.md

package.json
```json
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```


### 以下两种方式相同，npm-s 更短
```bash
$ run-s clean lint build
$ npm run clean && npm run lint && npm run build
```

### 同样支持类全局模式匹配子脚本，如 build 子脚本
```bash
$ run-s build:*
```

### 同样支持子-子脚本，如build子-子脚本
```bash
$ run-s build:**
```

### 带参数运行，将脚本名称或模式扩在引号中以使用参数，以下2个命令相同
```bash
$ run-s start:server "delay 3000" start:client
$ npm run start:server && npm run delay 3000 && npm run start:client
```

### 参数占位符
```bash
$ run-s build "start-server -- --port {1}" -- 8080
```

这对于传递来自 npm run 命令的参数很有用。
```json
{
    "scripts": {
        "start": "run-s build \"start-server -- --port {1}\" --"
    }
}
$ npm run start 8080

> example@0.0.0 start /path/to/package.json
> run-s build "start-server -- --port {1}" -- "8080"
```

有以下占位符
- {1}, {2}, ... -- An argument. {1} is the 1st argument. {2} is the 2nd.
- {1} ， {2} ，...一场争论。 {1} 是第一个参数。 {2} 是第二个。
- {@} --所有参数。
- {*} -- 所有参数组合


## run-p 并行执行命令
> 参考文档：https://github.com/mysticatea/npm-run-all/blob/master/docs/run-p.md

package.json
```json
{
    "scripts": {
        "clean": "rimraf dist",
        "lint":  "eslint src",
        "build": "babel src -o lib"
    }
}
```

### 以下两个命令相同，run-p更简短
```bash
$ run-p lint build
$ npm run lint & npm run build
```

### 匹配子脚本，如 watch 子脚本 watch:html、watch:js
```bash
$ run-p watch:*
```

匹配子-子脚本，如 watch 子-子脚本 watch:js:index
```bash
$ run-p watch:**
```

### 带参数
```bash
$ run-p "build:* -- --watch"
$ npm run build:aaa -- --watch & npm run build:bbb -- --watch
```

### 参数占位符（见上面 npm-s，或者文档）