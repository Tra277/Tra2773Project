//Xây dựng hàm forEach()
Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
    }
}

//1.Object proototype
//2.For in
//3.hasOwnProperty

var courses = [
    'JavaScript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course,index,array){
    console.log(course, index, array);
});


// forEach() nó như vòng lặp lặp qua từng phần tử
//Hàm không trả về cái gì
//Nó không chạy qua phần tử Empty
/*courses.forEach(function(course,index,array){
    console.log(course, index, array);
});*/

