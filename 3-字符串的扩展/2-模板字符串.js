// 语法 反引号``
let name1 = `张三`
console.log(name1); // 张三

// 2.允许在模板字符串嵌入变量
let age = 26
console.log(`${name1}的年龄是${age}`); // 张三的年龄是26

// 3.允许直接换行 不会报错
let dom = `<ul>
            <li>123</li>
            <li>456</li>
          <ul>`
// 这里如果使用"" 双引号普通字符串的话  换行就会报错 必须使用+号进行拼接   
document.querySelector('body').innerHTML = dom

// 4. 允许模板字符串里面进行表达式的计算
let [a, b] = [10, 12]
let people = `这个人的名字是${name1},他的年龄是${a + b}`
console.log(people);

// 5. 允许在模板字符串中进行函数的调用
let getNumer = (num) => num

console.log(`这个数值是${getNumer(234)}`);


