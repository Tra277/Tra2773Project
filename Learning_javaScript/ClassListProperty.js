//ClassList property
//Đây là thuộc tính chứa các class của element đó

//add 
//contains
//remove
//toggle ? Nếu có thì xóa bỏ, không có thì thêm vào

var boxElement = document.querySelector('.box');

boxElement.classList.add('red');
console.log(boxElement.classList.contains('red'));
boxElement.classList.remove('red');
boxElement.classList.toggle('blue');
boxElement.classList.toggle('red');
boxElement.classList.toggle('red');