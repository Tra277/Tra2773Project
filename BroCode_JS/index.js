// let x = 3.14;
// let y = 5;
// x = Math.round(x);
// console.log(x);
// console.log(Math.max(x,y));

// hypoteuse
// let a;
// let b;
// let c;

// a  = window.prompt("Enter side a:");
// a = Number(a);

// b  = window.prompt("Enter side b:");
// b = Number(b);

// c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(c);
//compose with html

// document.getElementById("my-button").onclick = function(){
//     a = document.getElementById("a-side").value;
//     b = document.getElementById("b-side").value;
//     c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
//     document.querySelector("p").innerText = c;
// }

// Count
// let count = 0;
// document.getElementById("decrease-button").onclick= function(){
//     count--;
//     document.querySelector("#result").innerText = count;
// }

// document.getElementById("reset-button").onclick= function(){
//     count=0;
//     document.querySelector("#result").innerText = count;
// }

// document.getElementById("increase-button").onclick= function(){
//     count++;
//     document.querySelector("#result").innerText = count;
// }

//15
// document.getElementById("submit-btn").onclick = function(){
//     const subcribe = document.getElementById("subcribe");
//     const visa = document.getElementById("visa");
//     const masterCard = document.getElementById("masterCard");
//     const paypal = document.getElementById("paypal");
//     if(subcribe.checked){
//         console.log("thank you for subcribe!");
//     }
//     if(visa.checked){
//         console.log("visa");
//     } else if(masterCard.checked){
//         console.log("mastercard");
//     }else if(paypal.checked){
//         console.log("paypal");
//     }else{
//         console.log("That's okay");
//     }
// }

//19
// let username = "";
// while (username == "" || username==null) {
//     username = window.prompt("Enter your name");
// }
// console.log("Hello " + username)

//20
// let username = "Bro";
// let items = 3;
// let total = 75;

// console.log(`You have ${items} items`);
// console.log(`Goodbye, ${username}`);

// Create a guessing game
// document.getElementById("submit-btn").onclick = function(){
//     let randomNumber = Math.floor(Math.random() * 10);
//     let numberGuessed = document.getElementById("number-guessed").value;
//     let printResult = document.getElementById("game-result");
//     if(randomNumber == numberGuessed){
//         printResult.innerHTML = `You guess right!`;
//     }else{
//         printResult.innerHTML = `Wrong, the number is ${randomNumber}`;
//     }
// }

//Write program to calculate temperature
// function toCelcius(temp) {
//     return (temp - 32) * 5 / 9;
// }

// function toF(temp) {
//     return temp * 9 / 5 + 32; 
// }

// document.getElementById("submit-btn").onclick = function(){
//     let tempe = document.getElementById("number-guessed").value;
//     tempe = Number(tempe);
//     let toFRadio = document.getElementById("toF");
//     let toC = document.getElementById("toCelcius");
//     let p = document.getElementById("result-conversion");
//     if(toFRadio.checked){
//         p.innerHTML = `${toF(tempe)} do F`;
//     }else if(toC.checked){
//         p.innerHTML = `${toCelcius(tempe)} do C`;
//     }else{
//         p.innerHTML = 'Please choose the type conversion';
//     }
// }
// console.log("Hello");
// //34.sort an array of string
// let fruits = ["cam","dao","oi","buoi"];
// fruits = fruits.sort();
// for (const fruit of fruits) {
//     console.log(fruit);
// }

//2D array = Arrays of array
// let fruits = ['Aadsf','con cu','abcxyz','hanoi'];
// let vegetarians = ['ak47','vietnam','pocu no pico'];
// let meats = ['messi','siuuuuuu','valorant'];
// let groceryList = [fruits,vegetarians,meats];
// console.log(groceryList);

//36 spread operator : it's like unpack the array: co the se ap dung nhieu ve sau, dung de gop cac mang
// let numbers = [1,2,3,4,5,6,7,8];
// let maximum = Math.max(...numbers);
// console.log(maximum);

//37 rest parameter: can you ... to pack argument into array,... có thể phân rã array hoặc hợp nhất các phần tử thành array(ngược lại)
// let a = 1, b = 2, c = 3, d =4,e=5,f=6;
// console.log(sum(a,b,c,d,e,f));
// function sum(...Numbers){
//     let total = 0;
//     for (const number of Numbers) {
//         total+= number;
//     }
//     return total;
// }

//call back: a function passed as an argument to another function
//Ứng dụng ở đây là bạn có thể nhét cả một hàm vào làm tham số của một hàm
// sum(2,3,DisplayConsole); //==> tiện lợi hơn vì có thể gọi hàm khác,không phải chỉ có mỗi DisplayConsole
// function sum(x,y,callback){
//     let result = x + y;
//     callback(result);//callback
// }
// function DisplayConsole(output){
//     console.log(output);
// }

//39.forEach duyệt từng phần tử và không return cái gì cả.
// let movie = ['Eimi Fukada','Yui Hatano','To Ku Da'];
// movie.forEach(toUpper);
// movie.forEach(prInt);
// function toUpper(element, index, array){
//     array[index] = element[0].toUpperCase() + element.slice(1);
// }
// function prInt(element){
//     console.log(element);
// }

//array.Map() :create new Array dựa vào return statement cuả từng phần tử lặp.
// let numbers = [1,2,3,4,5]; 
// console.log(numbers.map(square));
// function square(element){
//     return Math.pow(element,2);
// }

//array.filter()
// let ages = [18,16,21,17,19,90];
// console.log(ages.filter(checkAge));

// function checkAge(element){
//     return element > 19;
// }

//array.reduce() = reduces an array to a single value
// let prices = [5,10,15,20,25];
// let total= prices.reduce(checkOut);
// console.log(total);
// function checkOut(total,element){
//     return total + element;
// }

//array.sort()
// let grades = [100,50,90,60,80,70];
// grades = grades.sort(ascendingSort);
// function ascendingSort(x,y){
//     return x-y;
// }

// console.log(grades);

//45.arrow functions
// const greeting = username => {
//     console.log(`Hello ${username}`);
// }
// greeting('Bro');
// const percent = (x,y) => x/y*100;
// console.log(`${percent(37,50)}%`)
// let grades = [100,50,90,60,80,70];
// grades.sort((x,y) => y-x);
// grades.forEach(element => {
//     console.log(element);
// });

//46.shuffle cards
// let cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
// shuffle(cards);
// cards.forEach(element => console.log(element));

// function shuffle(cards){
//     let countIndex = cards.length;
//     while(countIndex != 0){
//         let randomIndex = Math.floor(Math.random() * cards.length);
//         countIndex--;
//         let temp = cards[countIndex];
//         cards[countIndex] = cards[randomIndex];
//         cards[randomIndex] = temp;
//     }
//     return cards;
// }

//47.Nested function
// let username = "Bro";
// let userInbox = 0;

// login();
// function login() {
//     displayUserName();
//     displayUserInbox();
//     function displayUserName() {
//         console.log(`Welcome ${username}`);
//     }


//     function displayUserInbox() {
//         console.log(`You have ${userInbox} new messages`);
//     }
// }
//So in this example, you will need to login first and then 2 function after it execute, if can't login => can execute, so it can relate to promise

//48. Maps = object that holds key-value pairs
// const store = new Map([
//     ["t-shirt",20],
//     ['jean',30],
//     ['skirt',10],
//     ['underwear',40]
// ]);
// store.set("hat",100);
// store.delete("hat");
// console.log(store.size);
// store.forEach((value,key) => console.log(`${key} $${value}`));

//49.Object
// const car = {
//     model: "kia-morning",
//     color:'yellow',
//     year:2023,
//     drive : function(){
//         console.log('You drive a car');
//     },
//     brake: function(){
//         console.log('You stop the car');
//     }
// }

// console.log(car.model);

//51.Class = a blueprint for creating object, Nó khác java ở chỗ là nó không cần khai báo biến, và dùng trực tiếp luôn constructor
//56.getter and setter.
// class Car{
//     constructor(power){
//         this._gas = 24;
//         this._power = power; // giống private trong java.
//     }
//     get power(){
//         return this._power + ' hp';
//     }

//     get gas(){
//         return this._gas + ' L'
//     }

//     set gas(gas){
//         if(gas > 50){
//             gas = 50;
//         }

//         this._gas = gas;
//     }
// }

// let car = new Car(400);
// car.gas = 39;
// console.log(car.power + ' '+ car.gas);

//57.object as argument.PASS
//58.Array of object 
// class Car{
//     constructor(model,year,color){
//         this.model = model,
//         this.year = year,
//         this.color = color
//     }

//     drive(){
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car1 = new Car("a",1,'while');
// const car2 = new Car("b",2,'black');
// const car3 = new Car("c",3,'blue');
// const cars = [car1,car2,car3];
// console.log(cars);

//59.anonymous object= object without a name  not directly referenced less syntax.No need for unique name.
// class Card{
//     constructor(value,suit){
//         this.value = value, 
//         this.suit = suit
//     }
// }
// let cards = [ new Card("A","Hearts"),
// new Card("B","Tree")];
// console.log(cards[0].value);

//60.error handling = try,catch, finally trong Java
//error = object with a description of something went wrong.
//61.setTimeOut(): Sau khoảng bao nhiêu giây thì sẽ thực hiện một lệnh
// setTimeout(firstMessage,2000,"Game",450);
// let a = setTimeout(secondMessage,10000);
// clearTimeout(a);
// setTimeout(thirdMessage,15000);
// function firstMessage(item,price){
//     alert(`Buy this ${item} for $${price}!`);
// }

// function secondMessage(){
//     alert('Buy this course for $1000!');
// }

// function thirdMessage(){
//     alert('Buy this course for $799!');
// }

//62.setInterval(): sau mỗi chu kì milisecond thì sẽ thực hiện một lệnh =>> có thể dùng làm dự án đồng hồ !!!!!!!
//==> Dự án tự nghĩ ra: Tạo ra một chương trình đếm số giây có chức năng reset về 0
// let count = 0;let a;
// function countingSecond() {
//     count++;
//     document.getElementById("show-time").innerText = count;
// }
// document.getElementById("begin-btn").onclick = function () {
//      a = setInterval(countingSecond, 1000);

// };
// document.getElementById("stop-btn").onclick = function () {
//     clearInterval(a);
// };
// document.getElementById("reset-btn").onclick = function () {
//     count = 0;
//     document.getElementById("show-time").innerText = count;
// }; PASSED

//64.Clock program.
// const myLabel = document.getElementById("myLabel");
// setInterval(update,1000);
// function update(){
//     let date = new Date();
//     myLabel.innerHTML = date.toLocaleTimeString();
// }

//65.synchronous (đồng bộ) vs asynchronous

//66.console.time() = starts a timer that you can use to track how long an operation takes 
//Give each timer a unique name
//start
// console.time("Response time");
// alert("click the ok button");
// console.timeEnd("Response time");

//67.promises. = object that encapsulates the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// "I promise to return something in the future"
// const wait = time => new Promise(resolve => {
//     setTimeout(resolve,time);
// });

// wait(3000).then(()=>console.log("Thanks for waiting!"));

//68.async = make a function return a promises
// async function loadFile(){
//     let fileLoad = false;
//     if(fileLoad){
//         return "File Loaded";
//     }
//     else{
//         throw "can't load"
//     }
// }

// loadFile().then(value => console.log(value))
//         .catch(error => console.log(error));

//69.await = makes an async function wait for a promise.
// async function loadFile(){
//     let fileLoad = false;
//     if(fileLoad){
//         return "File Loaded";
//     }
//     else{
//         throw "can't load"
//     }
// }
//await keyword dùng để thay thế cho hai dòng sau,lưu ý là nó cũng phải được đặt cho một async function,
//Nó cho phép bạn tạm dừng thực thi của hàm cho đến khi một Promise được giải quyết. Điều này cho phép bạn viết mã bất đồng bộ một cách tuần tự
//, giống như viết mã đồng bộ.
// loadFile().then(value => console.log(value))
//         .catch(error => console.log(error));
// async function startProcess(){
//     try{
//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error);
//     }

// }
// startProcess();
//=>> async và await giúp các code bất đồng bộ dễ đọc và xử lý hơn và nhìn giống đồng bộ hơn.

//73.Dom traversal. PASSED
//74.Add/change HTML element.
// const nameTag = document.createElement("h1");
// nameTag.innerHTML = "Bro";
// document.body.append(nameTag);
// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.innerText = "Siuuuuuu";
// myList.append(listItem);//them vao sau
// myList.prepend(listItem);

//75.add/change CSS property
// const title = document.getElementById("myTitle");
// title.style.backgroundColor = "#000";

//77.addEventListener
// const innerDiv = document.getElementById("inner-div");

// innerDiv.addEventListener("mouseover",changeRed);
// innerDiv.addEventListener("mouseout",changeGreen);
// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }
// function changeGreen(){
//     innerDiv.style.backgroundColor = "blue";
// }

/* 78.show and hide html element */
// const myButton = document.getElementById("myButton");
// const myImg =document.getElementById("myImg");

// myButton.addEventListener("click",() => {
//     if(myImg.style.display == "none"){
//         myImg.style.display = "block";
//     }else{
//         myImg.style.display = "none";
//     }
// });

// 79.detect key presses (Hiển thị bạn đã ấn phím nào)
// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown",move);
// let x = 0;
// let y = 0;
// function move(event){
//     switch(event.key){
//         case "s":
//             y+=5;
//             myDiv.style.top = y + "px";
//         break;
//         case "w":
//             y-=5;
//             myDiv.style.top = y + "px";
//         break;
//         case "d":
//             x+=5;
//             myDiv.style.left = x + "px";
//         break;
//         case "a":
//             x-=5;
//             myDiv.style.left = x + "px";
//         break;
//         default:
//             break;
//     }
// }

//80.Animation
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click",begin);

// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     let x = 0;
//     let y =0;
//     timerId = setInterval(frame,5);
//     function frame(){
//         if(x >= 300 || y>= 300){
//             clearInterval(timerId);

//         }else{
//             degrees+=5;
//             x+=1;
//             y+=1;
//             myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//             myAnimation.style.top = y+"px";
//             myAnimation.style.left = x+"px";

//         }
//     }
// }

//81.Canvas API = a mean for drawing graphics used for animations, games, data visualization NOTPASS
//82.window.
// console.dir(window);
//83.cookies
// console.log(navigator.cookieEnabled);
// function setCookie(name,value,daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime()+(daysToLive * 24 *60*60*1000));
//     let expires = "expires=" + date.toUTCString();
//     document.cookie = `${name}=${value};${expires};path =/`
// }
// function deleteCookie(name){
//     setCookie(name,null,null);
// }
// setCookie("email","Sponge@gmail.com",365);
// deleteCookie("email");
// console.log(document.cookie);
//84.Watch
// let hour = 0;
// let minute = 0;
// let seconds = 0;
// let intervalID = 0;
// let isRunning = false;
// document.getElementById("startBtn").onclick =function(){
//     if(!isRunning){
//         isRunning = true;
//         intervalID = setInterval(function(){
//             if(minute == 59 && seconds == 59){
//                 hour ++;
//                 minute = 0;
//                 seconds =0;                
//             }else if(seconds == 59){
//                 minute++;
//                 seconds = 0;
//             }else{
//                 seconds++;
//             }
//             hour = pad(hour);
//             minute = pad(minute);
//             seconds = pad(seconds);

//             document.getElementById("show").innerText = `${hour}:${minute}:${seconds}`;
//         },1000);
//     }
//     function pad(unit){
//         return ("0"+unit).length == 2 ? "0"+unit : unit;
//     }

// }

// document.getElementById("stopBtn").onclick =function(){
//     if(isRunning){
//         clearInterval(intervalID);
//         isRunning = false;
//     }
// }

// document.getElementById("resetBtn").onclick =function(){
//     clearInterval(intervalID);
//     isRunning = false;
//     hour = 0;
//     minute = 0;
//     seconds = 0;
//     document.getElementById("show").innerText = `00:00:00`;
// }
// 85.JSON
// const jason = '{"name":"Son Tra Do","age":19}';
// console.log( JSON.parse(jason));
// let object = JSON.parse(jason);
// console.log(JSON.stringify(object));
// 86.Promise
// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log("1");
//         return sleep(2000);
//     })
//     .then(() => {
//         console.log("2");
//         return sleep(3000);
//     })
//     .then(() => {
//         console.log("3");
//     })

// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });
// 87.Promise methods
// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log("1");
//         return sleep(2000);
//     })
//     .then(() => {
//         console.log("2");
//         return new Promise((resolve,reject) => {
//             reject("Error");
//         });
//     })
//     .then(() => {
//         console.log("3");
//     })
//     .catch(err => {
//         console.log(`ABC: ${err}`);
//     })

// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// // Cái này sẽ luôn trả về resolve
// let promise = Promise.resolve('Success');
// let promise2 = Promise.resolve('Co Loi');
// // Cái này sẽ luôn trả về reject 
// let promise3 = Promise.reject('Co Loi');

// //Promise.all(): gộp tất cả các promise lại với nhau, resolve của cái này nó sẽ trả về kết quả resolve của cả ba cái nhỏ kia.
// Promise.all([promise,promise2])
//     .then(result => console.log(result));
// 88.Promise practice
// let users = [
//     {
//         id: 1,
//         name: 'Kien Dam'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     }
// ];

// let comments = [
//     {
//         id: 1,
//         user_id: 1,
//         name: 'Anh chao em'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         name: 'Video vua moi ra roi em!'
//     },
//     {
//         id: 3,
//         user_id: 1,
//         name: 'Hay luon anh oi'
//     }
// ];
// function getComments() {
//     return new Promise(resolve => setTimeout(resolve(comments), 650));
// }
// function getUsers(users_Id) {
//     return new Promise(resolve => resolve(users_Id));
// }
// getComments()
//     .then(comments => {
//         let users_Id = comments.map(comment => {
//             return comment.user_id;
//         }
//         );
//         return getUsers(users_Id);
//     })
//     .then(users_Id => {
//         let usersWithComment = users.filter(user => {
//             return users_Id.includes(user.id);
//         });
//         return {
//             users: usersWithComment,
//             comments: comments
//         }
//     })
//     .then(data => {
//         let ul = document.getElementById("happy");
//         let html = "";
//         data.comments.forEach(comment => {
//             let user = data.users.find(user => {
//                 return user.id === comment.user_id;
//             }
//             );
//             html+=`${user.name}:${comment.name}`;
//         });
//         ul.textContent = html;
//     });
// 89.Fetch
// let postAPI = "https://jsonplaceholder.typicode.com/comments";

// fetch(postAPI)
//     .then(postAPI => postAPI.json())
//     .then(data => console.log(data));
//90.JSON-server
// const course = "http://localhost:3000/courses"
// fetch(course)
//     .then(response => response.json())
//     .then(courses => console.log(courses));
// 91.Postman example: Course management.
// READ
// const coursesAPI = 'http://localhost:3000/courses';
// function start(){
//     getCourse(renderCourse);
//     handleCreateForm();
// }

// start();

// function getCourse(callback){
//     fetch(coursesAPI)
//     .then(response => response.json())
//     .then(callback);
// }
// function createCourse(data){
//     let option = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//       };
//     fetch(coursesAPI,option)
//       .then(response => response.json())
//       .then(() => getCourse(renderCourse));
// }
// function handlingDeleteCourse(id){
//     let option = {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         }
//       };
//     fetch(coursesAPI+'/'+id,option)
//     .then(response => response.json())
//     .then(() => getCourse(renderCourse))
// }
// function renderCourse(courses){
//     let courseBlock = document.getElementById("coursesBlock");
//     let html ="";
//     courses.forEach(course => {
//         html+=`<li>
//             <h2>${course.name}</h2>
//             <p>${course.description}</p>
//             <button onclick="handlingDeleteCourse(${course.id})">delete</button>
//         </li>`
//     });
//     courseBlock.innerHTML = html;
// }

// function handleCreateForm(){
//     document.getElementById("create-Btn").onclick = function(){
//         let name = document.querySelector('input[name="name"]').value;
//         let description = document.querySelector('input[name="description"]').value;
//         let data = {
//             name: name,
//             description:description
//         }
//         createCourse(data);
//     }
// }
//92.destructuring, rest
let a = [1,2,3,4,5];
// destructuring là cú pháp giúp giải nén các mảng hoặc object vào các biến riêng biệt
// ...param: lưu các phần tử còn lại vào biến này.
var [a1,b,c,...remain] = a;
console.log(a1,b,c,remain);

// EXAMPLE with object
let object = {
    name:'Son Tra Do',
    age:20
}
var {name, age} = object;
console.log(name,age);


