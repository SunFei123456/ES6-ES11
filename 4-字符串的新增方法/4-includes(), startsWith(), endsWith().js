// 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

/* 
includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
*/

let s = "hello"
console.log(s.includes('h')); // true

console.log(s.startsWith('h')); // ture

console.log(s.endsWith('l'));  //false


// 这三个方法都支持第二个参数，表示开始搜索的位置。

let s1 = "hello world"

console.log(s1.startsWith('world', 6)); // ture
console.log(s1.endsWith('d', 7)); // false
console.log(s1.includes('world', 6)); //true

