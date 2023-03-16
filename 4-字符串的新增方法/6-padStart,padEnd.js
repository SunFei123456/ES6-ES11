// padStart()用于头部补全，padEnd()用于尾部补全。

let x = '2'

x = x.padStart(5, '3333') // 这个方法会返回一个字符串
console.log(x);

let y = '66'

y = y.padEnd(4, '6')
console.log(y);

let one = '12'.padStart(10, 'YYYY-MM-DD')
let two = '09-12'.padStart(10, 'YYYY-MM-DD')
console.log(one);// "YYYY-MM-12"
console.log(two);// "YYYY-09-12"
