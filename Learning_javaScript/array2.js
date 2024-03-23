// Array method

var courses = [
    {
        id:1,
        name: 'Js',
        coin:111111
    },
    {
        id:2,
        name: 'HTML, CSS',
        coin:100009831
    },
    {
        id:3,
        name: 'PHP',
        coin:0
    },
    {
        id:4,
        name: 'Kotlin',
        coin:897123
    },
    {
        id:5,
        name: 'Python',
        coin:5
    }
]

//forEach() hàm duyệt qua từng phần tử của mảng, hàm callback (giá trị, index)
courses.forEach(function(course){
    console.log(course);
});//call back

// every() giống forEach nhưng thêm điều kiện và tất cả điều kiện phải đúng, trả về boolean
 var isFree = courses.every(function(course,index){
    return course.coin === 0;
});//call back
console.log(isFree);

//some() giống every() nhưng chỉ cần 1 ông đúng là đúng
var isFree1 = courses.some(function(course,index){
    return course.coin === 0;
});//call back
console.log(isFree1);

//find() trả về 1 giá trị cần tìm kiếm
var findName = courses.find(function(course,index){
    return course.name == 'Python';
});//call back
console.log(findName);

//filter() giống find() nhưng trả về tất cả giá trị cần tìm kiếm
//map() muốn thay đổi element của một array, hàm callback ngoài ra có thể trả về originArray
var newCourses = courses.map(function(course){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        
    }
});// cần có một đối số truyền vào là một function
console.log(newCourses);

//reduce(): muốn nhận về giá trị duy nhất cuối cùng sau khi tính toán trên các phần tử của một array
var i =0;
function coinHandler(accumulator,currentValue,currentIndex,originArray){
 
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler,0); // 0 ở đây là giá trị khởi tạo,accumulation là biến lưu trữ, return cái gì thì lưu trữ cái đó
console.log(totalCoin);