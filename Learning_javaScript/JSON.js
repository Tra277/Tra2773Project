// JSON

// Là một định dạng dữ liệu (chuỗi)
// Viết tắt của Javascript object notation
//JSON: null , Number,boolean, array, Object

//Encode / decode 
//Stringify / Parse
//Stringify: Từ javascript types --> JSON
//Parse: Từ JSON --> Javascript type

// var json = '["JavaScript","PHP"]';
var json = '{"name":"Son dang","age":18}';


console.log(JSON.stringify(true));
console.log(JSON.parse(json));