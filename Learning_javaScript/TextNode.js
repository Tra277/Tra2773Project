//innerText, textContent
var headingElement = document.querySelector('h1');

console.log(headingElement.textContent);
headingElement.innerText = "Con Cac";

//Vậy innerText và textContent nó khác gì nhau
//InnerText trả thứ giống như bạn nhìn thấy trên trang web ( DOM)
//TextContent nó trả về thứ thật sự (khoảng cách, đặc tính,...) bên trong phần tử
