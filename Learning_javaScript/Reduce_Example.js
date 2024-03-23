// var courses = [
//     {
//         id:1,
//         name:'Js',
//         coin:100
//     },
//     {
//         id:2,
//         name:'CSD',
//         coin:200
//     },
//     {
//         id:3,
//         name:'C',
//         coin:70
//     },
//     {
//         id:4,
//         name:'C++',
//         coin:127
//     },
//     {
//         id:5,
//         name:'Python',
//         coin:456
//     },
// ];

// var totalCoin = courses.reduce(function(total,course){
//     return total+course.coin;
// },0);
// Giá trị khởi tạo không bắt buộc, khi không có thì lấy phần tử đầu tiên của mảng làm giá trị khởi tạo
//Không cần đặt: khi các phần tử có kiểu dữ liệu trùng với kiểu dữ liệu bản thân mong muốn
// var numbers =[100,
//     200,
//     70,
//     127,
//     456]

// var totalCoin = numbers.reduce(function(a,b){
//     return a+b;
// })

// console.log(totalCoin);

//Bai Tap1: Làm phẳng mảng bên dưới
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput,depthItem){
    return flatOutput.concat(depthItem);

},[]);

console.log(flatArray);

//Lấy ra các khóa học đưa vào một mảng mới
var topics = [
    {
        topic:"Front-end",
        courses:[
            {
                id:1,
                title:"HTML, CSS"
            },
            {
                id:2,
                title:"Javascript"
            }
        ]
    },
    {
        topic:"Back-end",
        courses:[
            {
                id:1,
                title:"PHP"
            },
            {
                id:2,
                title:"NodeJS"
            }
        ]
    }
];

var newCourses =topics.reduce(function(courses,topic){
    return courses.concat(topic.courses);
},[]);

console.log(newCourses);

