// console.log("Hello world!");
// console.log("Apna college");

// let a = 10;
// let b = 15;
// console.log("sum is : ", a+b);


// Template literals--


// let pencilPrice = 10;
// let eraserPrice = 5;
// let output = "the total price is : " + (pencilPrice + eraserPrice) + "Rupees.";
// let output = `the total price is : ${pencilPrice+eraserPrice} Rupees. ` ;        Trailing spaces----
// console.log(output);


// Arithmetic operator--


// let a = 10; 
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a%b);
// console.log(a/b);
// console.log(a*b);

// Unary operator--

// console.log(a++);
// console.log(++a);

// Assignment operator--
// let a = 10; 
// let b = 5;
// b=a;
// console.log(b);


// Operators--
// let age = 10;
// console.log(age>18);
// console.log(age>=18);
// console.log(age<18);
// console.log(age<=18);
// console.log(age==18);
// console.log(age!=18);


// Comparison operator--


// let n = 5;
// let str = '5';
// console.log(n==str);  true
// console.log(n===str); false
// console.log(0==' ');  true
// console.log(0===' ');  false
// console.log(0==false); true
// console.log(0===false); false
// console.log(null==undefined); true
// console.log(0===undefined); false


// comparison for non-numbers---
// 'a' = 61;
// 'b' = 62

// 'A' = 41;
// 'B' = 42;


// Coditional Statement--
// console.log("before my if statement");
// let aage = 23;
// if(age>=18){
//     console.log("you can vote");
//     console.log("you can drive");
// }if(age<18){
//     console.log("you cannot vote");
// }
// console.log("after my if statement");


// let firstName = "mukul";
// if(firstName == "mukul"){
//     console.log(`welcome ${firstName}`);
// }


// Practise question---

// Traffic light system
// let color = "red";
// if(color === "red"){
//     console.log("stop!. light color is red");
// }
// else if(color === "yellow"){
//     console.log("slow down. light color is yellow");
// }
// else if(color === "green"){
//     console.log("go. light color is green");
// }


// else-if Statement---
// let marks = 75;
// if(marks >= 80){
//     console.log("A+");
// }else if(marks >= 60){
//     console.log("A");
// }else if(marks >= 33){
//     console.log("B");
// }else if(marks < 33){
//     console.log("F");
// }


// else  Statement--
// let age = 17;
// if(age >= 18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// let color = "white";

// if(color == "red"){
//     console.log("stop");
// }else if(color == "yellow"){
//     console.log("slow down");
// }else{
//     console.log("traafic light is broken");
// }


// Truthy and Falsy---

// if(true){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if(1){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if(false){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if(""){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if(" "){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if("mukul"){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// if(null){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }

// let num = 0;
// if(num){
//     console.log("num is not equal to zero");
// }else{
//     console.log("num is equal to zero");
// }

// let num = -10;
// if(num){
//     console.log("num is not equal to zero");
// }else{
//     console.log("num is equal to zero");
// }


// switch statement---

// let color = "red";
// switch(color){
//     case "red":
//         console.log("stop");
//     break;

//     case "yellow":
//         console.log("slow down");
//         break;

//         case  "green":
//             console.log("go");

//             default:
//                 console.log("light is broken");
// }

// console.log("after switch statement");


// Alert----important

// alert("something is wrong!");
// console.log("this is a simple log");
// console.error("this is an error msg");
// console.warn("this s warning msg" );


// Prompts:---important

// prompt("enter your name");
// let FirstName = prompt("enter first name");
// let lastName = prompt("enter the lastname");
// console.log("welcome", FirstName, " ", lastname, "!");
// let msg = "welcome" + firstName + lastName + "!";
// alert(msg);


// Strings Method--

// Trim  Method--
// let msg = "   Hello   ";    "  He  llo  "
// msg.trim();   'Hello'      '   He  llo  '

// msg   only msg wriiten then
// "  Hello  "

// let password = prompt("set ypur password");
// console.log(password.trim());
// let newpass = password.trim();
// console.log(newpass);
// console.log(password);


// String Method----
// let str = "mukul kumar";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// String method as a argument--
// let msg = "mukul";
// msg.indexOf("k");
// msg.indexOf("l");

// Metod caining--
// let msg = "  Hello   ";
// let newMsg = msg.trim();
// console.log("after trim: " , newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase " ,  newMsg);

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


// Slice method---
// let msg = "apnacollege";
// console.log(msg.slice(0,4));
// console.log(msg.slice(4,11));

// console.log(msg.slice(-1));
// console.log(msg.slice(-3));

// let cars = ["bmw", "audi" , "thar", "xuv" , "maruti"];

// let arr = [2,6,-9,5];
// let n = 3;
// console.log(arr.slice(arr.length-n));

// let str = prompt("Please enter a string");
// let str = "";
// if(str.length == 0){
//     console.log("string is empty");
// }else{
//     console.log("string is no empty");
// }

// let str = "ApNaCOLLEGE";
// let idx = 3;
// if(str[idx] == str.toLowerCase[idx]){
//     console.log("character is lower case");
// }else{
//     console.log("character is not a lower case");
// }

// let str = prompt("please enter a string");
// // console.log(`original string = ${str}`);
// console.log(`string witout spaces = ${str.trim()}`);


// let arr = ["hello", 'a', 23, 64, 99, -64];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("element exit in an array");
// }else{
//     console.log("element doesn't exist in array")
// }



// object literals----
// let student = {
//     name : "Shradha",
//     age : 23,
//     marks : 94.4
// };

// const student = {
//     name : "Shradha",
//     age : 23,
//     marks : 94.4
// };


// const item = {
//     price : 100.99,
//     discount : 50,
//     colors : ["red", "pink"]
// };

// let sum = 15;
// function calsum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// // console.log(sum);
// calsum(1,2);
// console.log(sum);

// function outerFunc(){
//     let x =5;
//     let y=10;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }

//     innerFunc();
// }

// function outerFunc(){
    
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }

//     let x =5;
//     let y=10;

//     innerFunc();
// }


// let greet = "hello";/* Global scope */ 

// function changegreet(){
//     let greet = "namaste"; /* function scope */ 
//     console.log(greet);
//     function innergreet(){  /* Lexical scope */ 
//         console.log(greet);
//     }

//     innergreet();
// }

// console.log(greet);
// changegreet();

// let hello = function(){
//     console.log("hello");
// }
 
// hello = function(){
//     console.log("mukul");
// }


// function multiplegreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }
// multiplegreet(greet, 2);




// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         } 
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }

//         return even;
//     }else{
//         console.log("wrong request")
//     }
// }
 
// let request = "odd";




// important questions ----
// question 1---
// let returnLarger = (arr,num) => arr.filter(n => n > num);

// console.log(returnLarger( [65 ,16, 0, 1, 68] , 16));

// question 2---

// function findunique(str){
//     let uniq = "";

//     for(let i=0; i<str.length; i++){
//         if(uniq.includes(str[i]) === false){
//             uniq += str[i];
//         }
//     }
//     return uniq;
// }

// console.log(findunique("Geeksforgeeks"));
// console.log(findunique("GekksforGeeks"));

// problem 3----
// Function to find the longest country name in an array
function Longest_Country_Name(country_names) {
  // Check if the input array is not empty
  if (country_names.length === 0) {
    return "Input array is empty";
  }

  // Sort the array of country names based on the length of each name in descending order
  const sortedNames = country_names.sort((a, b) => b.length - a.length);

  // Return the first element (longest country name) after sorting
  return sortedNames[0];
}

// Example usage:
// Input array of country names
var countryNames = ["Australia", "Germany", "United States of America"];
// Call the function and print the result to the console
console.log(Longest_Country_Name(countryNames));

//  this kwyword---
// const student = {
//   name: "Shradha",
//   age: 23,
//  eng: 95,
//  math: 93,
//  phy: 97,

//  getAvg(){
//   console.log(this);
//   let avg = (this.eng + this.math + this.phy)/3;
//   console.log(`$(this.name) got avg marks = ${avg}`);
//  }
// }

// function getAvg(){
//   console.log(this);
// }


// // try and catch---
// console.log("hello");
// console.log("hello");
// console.log("hello");

// try{
//   console.log(a);
// } 
// // catch {
// //   console.log("caught an error.. a is not defined");
// // }

// catch(err){
//   console.log("caught an error.. a is not defined");
//   console.log(err);
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// Arrow function---
// const sum = (a,b) => {console.log(a+b);}    single line

// const sum = (a,b) => {
//   console.log(a+b);
// };

// const cube = (n) => {
//   return n*n*n;
// };

// const pow = (a,b) => {
//    return a ** b;
// };

// const hello = () => {
//   console.log("hello");
// };



// implict return---
// const mul = (a,b) => a*b;
// const cube = (n) => n*n*n;

// const mul = (a,b) => (
//   a*b
// );



// Set time ut ---
// console.log("hii there!");

// setTimeout(() => {
//   console.log("apna college");
// }, 4000);

// console.log("welcome to ");
// console.log("welcome to ");
// console.log("welcome to ");


// Set interval ---

// console.log("hii there!");

// setInterval(() => {
//   console.log("apna college");
// }, 2000);

// console.log("welcome to ");
// console.log("welcome to ");
// console.log("welcome to ");

// let id = setInterval(() => {
//   console.log("apna college");
// }, 2000);



// let id1 = setInterval(() => {
//   console.log("hello");
// }, 3000);


// this with Arrow function--
// const student = {
//   name: "aman",
//   marks : 95,
//   prop : this, // Global scope
//   GetName : function () {
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); // parent's scope -> window
//     return this.marks;
//   },
//   getInfo1:  function(){  // arrow function k liye iska jo parent h outer me function uper wala ka sara property ayega
//     setTimeout( () => { // student
//       console.log(this);
//     }, 2000);
//   },
//   getInfo2:  function(){
//     setTimeout( function () {
//       console.log(this); // window
//     }, 2000);
//   }
// };

// problem 1--
// let id = setInterval(() => {
//   console.log("hello world");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear interval run")
// }, 10000);

// let arr = [{
//   name: "aman",
//   marks: 95,
// },{
//   name: "mukul",
//   marks: 96,
// },{
//   name: "saurav",
//   marks: 98,
// }];

// arr.forEach((student) => {
//   console.log(student.marks);
// });



// map-  function--

// let num = [1,2,3,4];

// let double = num.map((el) => {
//   // return el*2;
//   return el*el;
// });


let students = [{
  name: "aman",
  marks: 95,
},
{
  name: "mukul",
  marks: 96,
},
{
  name: "saurav",
  marks: 98,
},
];

let gpa = students.map((el) => {
  return el.marks/10;
});


// filter function ---

// let nums = [10,12,13,14,15,16];
// let ans = nums.filter((el) => {
//   return el%2 == 0; //even -> true  odd-> false
// });

// // Every function--
// let arr = [2,4,6];
// let output = arr.every((el) => el%2==0);
// console.log(output);


// // dafault parameter--
// function sum(a,b = 2){
//   return a+b;
// }

// function sum (a=2, b){
//   return a+b;
// }

// sum(1,3); //4
// sum(1); // a=1, b=udefined


// function sum(...args){
//   //arguments
//   for(let i=0; i<args.length; i++){
//     console.log("you gave us: ", args[i]);
//   }
// }

// function min() {
//   console.log(arguments);
//   console.log(arguments.length);
  // arguments.push(1);
// }


// Rest---

// function sum(){
//   return args.reduce((sum,el) => sum + el);
// } // error ayega ky this is not a function

function sum(...args){
  return args.reduce((sum,el) => sum + el);
}



// function min(...args){
//   return args.reduce((min,el) => {
//     if(min > el){
//       return el;
//     }else {
//       return min;
//     }
//   });
// }


// add krwa skte h baad me string ko--
// function min( msg, ...args){
//   console.log(msg);
//   return args.reduce((min,el) => {
//     if(min > el){
//       return el;
//     }else {
//       return min;
//     }
//   });
// }



const name = "mukul";
let roll = 21;
var regNo = 22;

addcity = "bihar";

console.log(name);
