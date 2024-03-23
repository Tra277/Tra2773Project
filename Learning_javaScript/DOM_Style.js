//Dom style : là một thuộc tính nằm trong Element node
var boxElement = document.querySelector('.box');

//background-position ==> Javascript thì nó sẽ thành : backgroundPosition
//

//Cách viết chỉ trong 1 dòng
Object.assign(boxElement.style,{
    width:'100px',
    height:'200px',
    backgroundColor:'red'
});

console.log(boxElement.style.backgroundColor);
