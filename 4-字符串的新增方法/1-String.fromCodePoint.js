// String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，
// 但是这个方法不能识别码点大于0xFFFF的字符。

/* 
ES6 提供了String.fromCodePoint()方法，
可以识别大于0xFFFF的字符，
弥补了String.fromCharCode()方法的不足。在作用上，
正好与下面的codePointAt()方法相反。
*/

let p = String.fromCodePoint(0x20BB7)
console.log(p); // "𠮷"
let p1 = String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
console.log(p1);  // true

// 上面代码中，如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。