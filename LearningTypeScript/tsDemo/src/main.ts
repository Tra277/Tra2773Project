import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
type Address = string;
type stringOrNumb = string | number;
type sumOfTwo = (x:number,y:number) => number;
let value: unknown;
value = "Hello";
console.log(value); // Không có lỗi tại thời gian biên dịch nhưng sẽ gây ra lỗi tại thời gian chạy
let array : readonly string[] = ["Nolan"];

console.log(array);

let tuple :  [string,number,string] = ["hello",5,"shit"];
tuple.push("haha");
let dest : [x:number,x:number] = [41.2,56];
let [x,y] = dest;
console.log(`${x} and ${y}`);
console.log(tuple);

let obj : {name:string,class:string,age?:number} = {
  name:"Do Son Tra",
  class:"11a12",
}
console.log(obj);

enum Fruit {
  Orange,
  Mango,
  Apple,
  PineApple,
  Evil
}

const favFruit = Fruit.Orange;
console.log(favFruit);

let object : {[index : string] :number} = {};
object.Mark = 26;
console.log(object);
let myAddress : Address = "Cau to, Van Dien";
console.log(myAddress);
// interface
interface Person {
  name:string,age:number
}

interface Idol extends Person {cup:string,code:string}

let yuaMikami : Idol = {name:"Yua Mikami",age:24,cup:"H cup",code:"NAH-4689"}
console.log(yuaMikami);
let address : stringOrNumb = "102 Hoang Hoa Tham";
console.log(address);
function printStatusCode(code: stringOrNumb,total? : number) : string {
  return (`My status code is ${code} and total is ${total || "bruh"}.`); 
  
}
const sumTwo : sumOfTwo =  (x:number,y:number) =>{
    return x+y;
}

console.log(printStatusCode(12,89));
printStatusCode("shit");
console.log("The sum of two is "+sumTwo(4,6));
let a : unknown = "hello";
console.log((a as string ).length);
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
