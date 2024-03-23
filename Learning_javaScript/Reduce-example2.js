const numbers = [1,2,3,4,5];

// callback gọi là hàm gọi lại
// trong hàm callback ngoài 2 tham số hay dùng nữa thì còn có thêm là currentIndex và Array:mảng gốc

var totalNumber = numbers.reduce(function(a,b){
    return a + b;
},0);

console.log(totalNumber); 
