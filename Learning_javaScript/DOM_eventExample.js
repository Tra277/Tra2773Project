// DOM events

//1.Input / select
//2.key up / down

var inputValue;
var inputElement = document.querySelector('input[type="text"]');


inputElement.onkeyup = function(e){
    console.log(e.key);
}
