// 1.ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
for (const codePoint of "hello") {
    console.log(codePoint); // "h" "e" "l" "l" "o"
    // console.log(typeof codePoint);
}

// 2.遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
let text = String.fromCodePoint(0x20BB7)

// 传统的for循环无法识别大于 0 xFFFF的码点
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);   // � �
}
// for of 则可以进行识别
for (const i1 of text) {
    console.log(i1); // 𠮷
}

