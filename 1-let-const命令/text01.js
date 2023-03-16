// 基本用法
// 不存在变量提升
// 暂时性死区
// 不允许重复声明

// 1.基本用法

{
    // let声明的变量只在它所在的代码块有效。
    let a = 10;
    var b =1;
}

console.log(a); // ReferenceError 引用错误
console.log(b); // 1

// 2.不存在变量提升
console.log(a1); // 输出underfined
var a1 = "哈哈哈"
console.log(b1); // Cannot access 'b1' before initialization              // 在初始化之前无法访问'b1'
let b1 = "嘿嘿嘿"


// 3.暂时性死区
// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区

console.log(c); // Cannot access 'c' before initialization
let c;
c = 123
console.log(c);

// 4. 不允许重复声明
function a(){
    let a = 10;
    let a = 12;
}
function a1(){
    let a = 12
    var a =  1;
}
