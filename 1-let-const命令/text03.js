// 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。

window.a = 1

console.log(a);

a = 12231

console.log(a);

// 为了保持兼容性，
// var命令和function命令声明的全局变量，
// 依旧是顶层对象的属性

// 从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩
var c = 2
console.log(window.c);

let b = 20
console.log(window.b); // undefined


