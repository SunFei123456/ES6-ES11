// 函数的name属性，返回该函数的函数名。


// 1
function add(){
    console.log(add);
}

console.log(add.name); // add


// 2.
let max = ()=>{
    console.log(max);
}

// es5
console.log(max.name); // ""
// es6
console.log(max.name); // "max"


// 3.


let min = function minNumber() {
    console.log(min);
}
// 返回具名函数的名字
console.log(min.name); // minNumber