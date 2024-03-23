var languages = [
    'Javascript',
    'PHP',
    'RUBY'
];

var languages2 = [
    'CSGO',
    'PHO',
    'RUBaaY'
];

console.log(languages.toString());
console.log(languages.join('-'));

//Pop:Xóa bỏ phần tử cuối của mảng, trả về phần tử đã xóa
console.log(languages.pop());

//Thêm phần tử vào mảng 
console.log(languages.push('Con Cu'));

//Shift: ngược với pop là nó sẽ xóa phần tử đầu mảng
console.log(languages.shift());

//Unshift:Giống với push nhưng nó sẽ thêm phần tử vào đầu mảng
console.log(languages.unshift('Con Cu gia'));

//splicing : liên quan đến xóa phần tử và chèn
languages.splice(1,0,'Dart');



//concat: dùng để nối array
languages = languages.concat(languages2);
console.log(languages);

//slicing : giống substring trong JaVa
console.log(languages.slice(1,3));
