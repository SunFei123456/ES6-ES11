/* 
ES6 引入 rest 参数（形式为...变量名），
用于获取函数的多余参数，这样就不需要使用arguments对象了。
rest 参数搭配的变量是一个数组，
该变量将多余的参数放入数组中。
*/


function add(...numbers) {
    let sum = 0

    for (const i of numbers) {
        sum += i
    }

    return sum
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// arguments变量的写法
// function sortNumbers() {
//     return Array.prototype.slice.call(arguments).sort();
// }
// rest参数的写法
let arr = [1,3,10,5,6]

const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(arr));

