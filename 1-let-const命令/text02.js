// const 声明得一个只读的常量.一旦声明,常量的值就不可以改变

const PI = 3.1415;
PI // 3.1415
// PI = 3;
// TypeError: Assignment to constant variable. 赋值给常数变量。




//  const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

// const a  // 必须初始化const声明的变量



// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (1 === 1) {
    const hello = "hello"
}
console.log(hello); //  hello is not defined


// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

if (true) {
    console.log(heihei);
    const heihei = "嘿嘿嘿" //  Cannot access 'heihei' before initialization
}

// const声明的常量，也与let一样不可重复声明。


// 实质

// cosnt 声明的变量 并不是变量的值不得改动,而是变量指向的内存地址所保存的数据不可以更改
//  对于简单的类型 比如 字符串 数字 布尔 ,值就保存在变量所指向的内存地址,因为就可以等同于
// 常量 

// 但对于符合类型的数据(对象 , 数组 ), 变量指向的内存地址,保存的知识一个指向实际数据的指针


// 看一段代码
const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123
// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only