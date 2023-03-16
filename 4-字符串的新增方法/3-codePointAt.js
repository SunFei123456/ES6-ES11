// ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

let s = '𠮷a';
console.log(s.codePointAt(0)); // 134071
console.log(s.codePointAt(1).toString(16)); // dfb7
console.log(s.codePointAt(2));// 97


for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}
