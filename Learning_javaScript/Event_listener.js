//Khá tương tự DOM events
//1.Xử lý nhiều việc khi một event xảy ra
//2. Lắng nghe / hủy bỏ lắng nghe
var btn1 = document.querySelector('.btn');

function viec1(){
    console.log('Viec 1');
}

btn1.addEventListener('click',viec1);
setTimeout(function(){
    btn1.removeEventListener('click',viec1);
},3000);
//Chúng ta sử dụng Dom event trong những trường hợp đơn giản không cần gỡ bỏ những hành động