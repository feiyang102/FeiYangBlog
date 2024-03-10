---
outline: deep
---

# 关于 JavaScript 内存泄漏的特殊情况记录

正常使用各种函数和变量时不会造成内存泄漏，但当我们没有及时销毁不需要的变量时，则会导致内存泄漏。

在闭包中，我们经常会因为没有及时回收不再使用的内存，导致内存泄漏。

其中最值得注意的就是闭包返回多个函数时，这些函数会共用同一个词法环境，当我们需要回收内存时，需要将共用词法环境的函数全部回收才能避免这里的内存泄漏：

```js
// 内存泄漏测试代码
function run() {
  let param1 = "测试";
  let bigArr = new Array(10000000);
  function func1() {}
  function func2() {
    console.log(bigArr);
  }
  return { func1, func2, hello: bigArr };
}

// 1、如果直接 run()，不赋值给变量则不会造成内存泄露
run();

// 2、如果赋值给 res，func1没有引用 bigArr，func2 引用了 bigArr
let res = run();
delete res.func2; // 即使销毁 func2，原先测发环境中仍然存在bigArr（可以在浏览器控制台 - Memory 中采集查看内存占用）
delete res.func1; // 销毁 func1 也不行，因为 hello 中仍然引用这 bigArr
delete res.hello; // 只有将所有引用该变量的函数删除，才会销毁该词法环境，此时bigArr占用的内存和词法环境才会被销毁
```
