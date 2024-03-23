//Thêm một element vào một element trong DOM
var boxE = document.querySelector('.box');

//innerHTML, outerHTML
//INner
boxE.innerHTML = '<h1 title ="Con cu">Con Cặt</h1>'
console.log(boxE.innerHTML);

//;Outer
//Khác với inner box ở chỗ là nó sẽ ghi đè chính nó luôn