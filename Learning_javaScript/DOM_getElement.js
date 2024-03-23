//HỌc cách lấy ra element
//1.by ID
// var headingNode = document.getElementById('heading');
// console.log(headingNode);

//2.by Class
// var headingNode = document.getElementsByClassName('heading');
// console.log(headingNode);

//3.by tag name
// var headingNode = document.getElementsByTagName('p');
// console.log(headingNode);

//4.by CSS selector
var headingNode = document.querySelector('html .box .heading-2:nth-child(2)');
console.log(headingNode);
//document.querySelectorAll: nó sẽ chọn tất cả dựa theo CSS selector