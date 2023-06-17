# Event Loop 事件循环
JavaScript 是单线程执行语言，在执行过程中会出现阻塞问题，如果执行耗时较久的任务（比如网络请求）或者响应各种事件时，这种单线程执行过程就会让页面产生不必要的卡顿。

JavaScript 使用**异步回调（asynchronous callback ）**的方式解决任务阻塞问题，让某些特殊任务使用异步的方式执行，而**异步回调**就是使用**事件循环**的方式实现的。

## 事件循环（Event Loop）介绍
1、事件循环是让 JavaScript 单线程执行时又不会产生阻塞的一种机制。该机制是JavaScript的**并发模型（Concurrency Model）**基础，可以协调各种页面事件、用户交互、UI渲染、脚本执行、定时任务、网络请求等。

2、**事件循环（Event Loop）**就是一个不断监控**任务队列（Task Queue）**并将任务按照顺序执行的循环。

3、JavaScript 任务队列有2种：**宏任务队列（MacroTask Queue）和微任务队列（MicroTask Queue）**。下面继续讨论

## 宏任务队列和微任务队列
> 主线程执行时，如果遇到异步任务，会将其加入到任务队列中。多数会加入到宏任务中，有些特殊的异步任务会加入到微任务队列中并优先于宏任务执行。

1、宏任务队列

宏任务（MacroTask）是 V8 引擎术语，在 HTML 标准中并没有这么一说

宏任务可以有一个或多个，常见的有鼠标、键盘事件、AJAX、数据库操作（indexDB）、setTimeout、setInterval等，它们对应的回调都会被放入到对应的宏任务队列中等待处理。

比如，下面使用 setTimeout 来使用宏任务队列
```js
console.log(1);

// 这里的回调函数会被加入到对应宏任务队列等待执行
setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);
// 输出 1、3、2
```

根据以上代码在执行时，当前上下文会按照顺序往下执行，遇到 setTimeout ，会将其加入到宏任务队列后，继续向下执行，当上下文执行完成后，再执行 setTimeout 中的内容。

2、微任务队列

一个事件循环中微任务队列只有一个，一般我们使用 Promise、MutationObserver、queueMicrotask 创建微任务。

比如，下面使用 Promise 创建微任务
```js
console.log(1);
// 这里
new Promise(resolve => {
    // 第1部分：会以同步代码方式执行
    console.log(2);
    resolve();
}).then(() => {
    // 第2部分：这部分会放到微任务队列等待执行
    console.log(3);
});
console.log(4);
// 输出1、2、4、3
```
以上代码按照上下文顺序执行时，遇到 Promise ，会将其第1部分以同步代码执行，后面第2部分会加入到微任务队列。


3、执行优先级问题

当前上下文同步代码优先执行，并将遇到的宏任务和微任务加入到对应队列，再优先情况微任务队列，最后清空宏任务队列。

比如，下面宏任务和微任务掺杂的形式
```js
console.log(1);
// 执行顺序问题，考察频率挺高
setTimeout(function() {
  console.log(2);
});
new Promise(function(resolve, reject) {
  // 第 1 部分：会以同步代码执行
  console.log(3);
  resolve();
}).then(() => {
  // 第 2 部分：会被加入到微任务队列
  console.log(4);
});
console.log(5);
// 结果：1、3、5、4、2
```

以上代码按照如下步骤执行：
- 同步执行当前上下文：遇到异步任务时将该任务加入到队列，同步执行完成后输出：1、3、5
- 执行微任务队列后，输出：4
- 执行宏任务队列后，输出：2
- 最后结果：1、3、5、4、2

## 问题：结果输出什么？
```js
setTimeout(_ => {
	console.log(1);
}, 0);

new Promise((resolve, reject) => {
	console.log(2);
	new Promise((resolve) => {
		console.log(3);
		resolve();
	}).then(_ => {
		console.log(4);
		setTimeout(_ => {
			console.log(5);
		})
	});
	// resolve();
})
.then(_ => {
	console.log(6);
});
console.log(7);
```