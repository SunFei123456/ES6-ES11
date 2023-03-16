// 1. 1个参数
let a = a => a
console.log(a(22)); // 22
// 上面这个是箭头函数的写法 下面演示一下用普通函数的写法

var a1 = function (a1) {
    return a1
}
console.log(a1(22)); // 22


// 2. 多个参数
var add = (a, b) => a + b;
console.log(add(1, 2)); // 3
// 上面这个是箭头函数的写法 下面演示一下用普通函数的写法
let getNumber = function (number1, number2) {
    return number1 + number2
}
console.log(getNumber(1, 2)); // 3


// 判断是否是偶数
const isEven = n => n % 2 === 0;
console.log(isEven(3));  // false
// 返回一个数值的平方
const square = n => n * n;
console.log(square(2)); // 4



// 数组各个元素进行计算
let arr1 = [1, 2, 3]
// 正常函数写法
arr1 = arr1.map(function (x) {
    return x * x;
});
console.log(arr1);
// 箭头函数写法
console.log([1, 2, 3].map(x => x * x))




// 数组排序 正序和倒序
// 正常函数写法
let values = [2, 1, 5, 3, 11, 8]

var result = values.sort(function (a, b) {
    return a - b;
});
console.log(result);
// 箭头函数写法
var result1 = values.sort((a, b) => b - a);
console.log(result1);
