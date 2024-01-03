// console.log("hello earth");

// alert("1");

// document.write("hello"); //not working in mjs only use (document.querySelector) 

// document.querySelector("#header").innerHTML = "<h1>hello world</h1> "

// document.querySelector("#header").innerHTML = `hello js` //backticks (``) are more flexible and functional than quotations("")

// document.querySelector(".sub").innerHTML = `hello earth`



//USING LET
// when we use let to intialize we can update the data at some other point in our code

// let name = "Hello Ahmed"
// name = "Hello asad"

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
 

//USING CONST
//// when we use let to intialize we cannot update the  data at some other point in our code

// const Lastname = "Hello earth"
// Lastname = "Hello shahid"

// console.log(Lastname);
// console.log(Lastname);
// console.log(Lastname);
// console.log(Lastname); //remove the second last name to remove the error


//DATATYPES IN MJS
// let myname = "Jibran" //string
// let age = 20 //number
// let isMarried = true //boolean
// let isChild = false //boolean
// let welcome = "hello"
// console.log(undefined); //undefined
// console.log(null); //null

// console.log(myname);
// console.log(age);
// console.log(isMarried);
// console.log(isChild);
// console.log(isChild);



let myname = "Jibran"
let age = 20 
let isMarried = true
let isChild = false
let welcome = "Hello"


document.querySelector(".sub").innerHTML = "<h2>" + welcome + " " + myname + " your age is " + age + "</h2>"