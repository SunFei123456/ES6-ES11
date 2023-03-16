/* 
从 ES5 开始，函数内部可以设定为严格模式。
*/
'use strict';
// 例如

function log(a) {
    'use strict'
    console.log(a);
}
log(1);

// es2016 做了修改,只要函数参数使用了 默认值 解构赋值 或者扩展运算符
// 那么函数内部就不可以显示地设为i严格模式,否个会报错

// 例如

function say(x = 1) {
    // 'use strict'
    console.log(x);
}
// Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
say() 


// 两种方法可以规避这种限制。
// 第一种是设定全局性的严格模式，这是合法的



// 第二种是把函数包在一个无参数的立即执行函数里面。
const doSomething = (function () {
    'use strict';
    return function(value = 42) {
      return value;
    };
  }());