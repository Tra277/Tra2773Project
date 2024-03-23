var headingElement = document.querySelector('h1');

//Đây là cách đặt đối với các attribute hợp lệ của từng element
headingElement.className = "heading";
// Ngoài ra chúng ta còn có cách khác như sau
headingElement.setAttribute('data-1','con cac');

// Mình cũng có thể lấy ra bằng hàm getAttribute

console.log(headingElement.getAttribute('class'));