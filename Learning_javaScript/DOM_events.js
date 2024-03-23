//events: hiểu nôm na ở đây là sự kiện, nó nói về những hành vi của trình duyệt hoặc người dùng
//Javascript sẽ có những công cụ để lắng nghe những hành vi, tương tác của người dùng với trang web

//Attribute events: cho hẳn vào thuộc tính luôn 
//Assign event using the element node

//Cần phải nhận biết được cái tên event là gì
//VD : click, resize, ....
//Cần để ý đến hiện tượng nổi bọt
var h1Element = document.querySelector('h1');
h1Element.onclick = function(){
    console.log(Math.random());
}