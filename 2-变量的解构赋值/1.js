// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

// 以前定义变量
let a = 1
let b = 2
let c = 3

// 现在可以这样ES6
let [d, e, f] = [1, 2, 3]
// 意思是 从数组取值 按照对应位置 对变量进行赋值
console.log(a, b, c);  // 1,2,3
console.log(d, e, f);  // 1,2,3

// 看一些例子
1.
let [color, price, size] = ["红色", 21, "1kg"]
console.log("苹果的颜色", color);
console.log("苹果的价格", price);
console.log("苹果的重量", size);

2.
let [head, ...foot] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(head); // 1
console.log(foot); // [2,3,4,5,6,7,8,9]

// 如果解构不成功，变量的值就等于undefined。
let [y] = []
console.log(y); // underfined


// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

// 报错
let [x1] = 1;
let [x11] = false;
let [x111] = NaN;
let [x1111] = undefined;
let [x11111] = null;
let [x111111] = {};

