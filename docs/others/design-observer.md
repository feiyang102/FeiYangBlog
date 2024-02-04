---
outline: deep
---

# 观察者模式

## 基本概念

观察者模式又叫发布订阅模式，是指发布者和观察者属于一对多的关系，当发布者改变时，会通知观察者做相应处理。

观察者模式有几个关键点：观察者、订阅者、订阅函数、触发器、取消订阅函数、只订阅一次、通知。

## 使用场景

- 数据响应式更新。Vue、React 中的数据绑定，当数据发生变化时，使用这些数据的视图组件就会自动更新，从而保证数据的同步
- 前端页面中注册的各种事件和回调函数
- 表单校验。表单内各种组件 value 改变时触发的自动校验功能
- 各种消息通知系统。比如观察对象发生改变时，发送邮件、短信通知等

## 案例 1：放学（简易版）

老师说放学的时候，学生就会想着去干各自的事情，其中老师就是发布者，等待放学的学生就是观察者。

```js
function Teacher() {
  // 订阅者都会存在这里
  this.subscribers = [];

  // 发布事件方法
  this.xiaKeEvent = function () {
    console.log("同学们，下课了！~");
    this.subscribers.forEach((item) => {
      item.say();
    });
  };

  // 订阅方法
  this.subscribe = function (student) {
    this.subscribers.push(student);
  };
}

function Student(name, hobby) {
  this.name = name;
  this.hobby = hobby;
  teacher.subscribe(this);
}
Student.prototype.say = function () {
  console.log(`哈哈哈哈！~${this.hobby}`);
};

let teacher = new Teacher();
// 订阅
let xiaoming = new Student("小明", "打王者");
let xiaohong = new Student("小红", "打篮球");
let xiaowang = new Student("小王", "回家吃饭");

// 老师在这里发布下课事件
teacher.xiaKeEvent();
```

## 案例 2：动物餐厅（健全版）

我们再写一个更健全的发布订阅模式，动物餐厅老板在开门前，各种小动物提前订阅老板开饭的通知。

```js
let HotelBoss = function () {
  this.subscribers = [];
  // 订阅
  this.subscribe = function (animal) {
    this.subscribers.push(animal);
  };
  // 取消订阅
  this.unsubscribe = function (key, value) {
    this.subscribers = this.subscribers.filter((item) => item[key] != value);
  };
  // 通知
  this.notice = function () {
    this.subscribers.forEach((animal) => {
      animal.trigger();
    });
  };
};

let AnimalsRegister = function (name, hobby) {
  this.name = name;
  this.hobby = hobby;
  // 响应器
  this.trigger = function () {
    console.log(`${name}: ${hobby}`);
  };
  // 取消订阅
  this.unsubscribe = function () {
    hotel.unsubscribe("name", this.name);
  };
  hotel.subscribe(this);
};

// 这里对发布者和订阅者进行声明注册和订阅
let hotel = new HotelBoss();
let cat = new AnimalsRegister("小咪", "喵喵喵，我爱吃鱼");
let dog = new AnimalsRegister("旺财", "旺旺旺，我要吃肉");
let cow = new AnimalsRegister("小花", "哞哞，哥们来点草");

// 餐厅老板发布可以点餐的消息，此时三个动物都正常接到消息了
hotel.notice();

// 此时旺财着急饿得慌，跟老板说不等了出去吃现成的
dog.unsubscribe();

// 老板再发布消息，旺财就接不到了
hotel.notice();
```
