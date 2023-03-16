// repeat方法返回一个新字符串，表示将原字符串重复n次。
let name = "张三"

console.log(name.repeat(3)); // 张三 张三 张三

// 参数如果是小数 会被取整 向前

console.log(name.repeat(2.7)); // 张三 张三 

// 如果repeat的参数是负数或者Infinity，会报错。


// 但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。

console.log(name.repeat(NaN)); // ""

// 如果repeat的参数是字符串，则会先转换成数字。

console.log(name.repeat('6')); // 会输出6次name
