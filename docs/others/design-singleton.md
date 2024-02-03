# 单例模式

## 基本概念

单例模式是指限制某个类型最多只能有一个实例，如果我们重复创建实例，一般会抛出异常或返回第一次创建的实例。

## 单例模式常见使用场景

- 日志管理：项目全局会通过同一个日志实例去记录和输出日志
- 配置管理：项目全局会通过统一的配置去管理项目的配置
- 状态管理：APP 的状态会通过同一个状态实例去统一管理
- 数据库连接池：在单例模式中会确保只有一个数据库连接实例，从而提高性能和资源利用率
- 缓存系统：在前端单例模式管理缓存时，会创建一个缓存管理工具去统一管理页面的缓存
- 等等

## 实现单例模式的几种方法

### 1、基本写法

这里我们使用构造函数结合闭包的形式来实现一个单例模式

```js
let Person = (function () {
  let instance = null;
  return function (name, age) {
    if (instance) {
      return instance;
    } else {
      this.name = name;
      this.age = age;
      instance = this;
    }
  };
})();

let xiaoming = new Person("小明", 12);
let xiaohong = new Person("小红", 13);

console.log(xiaoming); // {name: '小明', age: 12}
console.log(xiaohong); // {name: '小明', age: 12}
```

### 2、使用代理类的方式

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let PersonProxy = (function () {
  let instance = null;
  return function (name, age) {
    if (!instance) {
      instance = new Person(name, age);
    }
    return instance;
  };
})();

let xiaoming = new PersonProxy("小明", 12);
let xiaohong = new PersonProxy("小红", 13);

console.log(xiaoming); // Person {name: '小明', age: 12}
console.log(xiaohong); // Person {name: '小明', age: 12}
```

### 3、使用 ES6 的 constructor

```js
class Person {
  static instance = null;
  constructor(name, age) {
    if (Person.instance) {
      return Person.instance;
    }
    this.name = name;
    this.age = age;
    return (Person.instance = this);
  }
}

let xiaoming = new Person("小明", 12);
let xiaohong = new Person("小红", 13);

console.log(xiaoming); // Person {name: '小明', age: 12}
console.log(xiaohong); // Person {name: '小明', age: 12}
```

### 4、使用 ES6 静态函数

注意：这种方式不能使用 new 去实例化对象

```js
class Person {
  static instance = null;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getInstance(name, age) {
    if (!Person.instance) {
      Person.instance = new Person(name, age);
    }
    return Person.instance;
  }
}

let xiaoming = Person.getInstance("小明", 12);
let xiaohong = Person.getInstance("小红", 13);

console.log(xiaoming); // Person {name: '小明', age: 12}
console.log(xiaohong); // Person {name: '小明', age: 12}
```

### 5、单例工厂函数

```js
class Person {
  constructor(options) {
    this.name = options.name;
    this.isPerson = true;
  }
}
class XiaoMing extends Person {}
class XiaoHong extends Person {}
class XiaoWang extends Person {}
class SingletonFactory {
  static instances = {};
  constructor(type, options) {
    let instances = SingletonFactory.instances;
    if (!SingletonFactory.instances[type]) {
      // 根据type 声明并赋值给 instances
      switch (type) {
        case "xiaoming":
          instances[type] = new XiaoMing(options);
          break;
        case "xiaohong":
          instances[type] = new XiaoHong(options);
          break;
        case "xiaowang":
          instances[type] = new XiaoWang(options);
          break;
        default:
          instances[type] = null; // 或者抛出异常等特殊处理
      }
    }
    return instances[type];
  }
}

let xiaoming = new SingletonFactory("xiaoming", { name: "小明" });
let xiaohong = new SingletonFactory("xiaohong", { name: "小红" });
let xiaowang = new SingletonFactory("xiaowang", { name: "小王" });

console.log(xiaoming); // XiaoMing {name: '小明', isPerson: true}
console.log(xiaohong); // XiaoHong {name: '小红', isPerson: true}
console.log(xiaowang); // XiaoWang {name: '小王', isPerson: true}
```
