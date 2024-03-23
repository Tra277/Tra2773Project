// DOM events
//1.preventDEfault
//2.stopPropagation

// //1.preventDefault: loại bỏ những hành động mặc định của trình duyệt
// var aElement = document.querySelectorAll('a');
// for(var i =0;i < aElement.length;++i){
//     aElement[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://www.google.com/')){
//             e.preventDefault();
//         }

//     }
// }
//1.Vi du 2
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ulElement.onclick = function(e){
//     function(e){
//         console.log(e.target);
//     }
//
//2.StopPropagation: ngăn chặn hiện tượng nổi bọi
document.querySelector('div').onclick = 
    function(){
        console.log('DIV');
    }

document.querySelector('button').onclick = 
    function(e){
        e.stopPropagation();
        console.log('ClickMe');
    }    