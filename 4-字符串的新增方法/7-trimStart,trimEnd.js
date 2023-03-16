/* 
ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。
它们的行为与trim()一致，
trimStart()消除字符串头部的空格，
trimEnd()消除尾部的空格。
它们返回的都是新字符串，不会修改原始字符串。
*/

let s = "     你好" // 前面留了5个空格字符
s = s.trim() // 返回一个新的字符串
console.log(s); // 去除之后

let s1 = "  尚硅谷  "

s1 = s1.trimStart()
console.log(s1); // "尚硅谷  "

s1 = s1.trimEnd()
console.log(s1); // "尚硅谷"