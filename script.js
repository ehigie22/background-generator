// function multiply(a,b){
//   if (a> 5 || b> 10){
//     return("that,s too difficult")
//   }
//     else {
//       return a*b
//     }
  
// }
// multiply(5, 10)
// function multiply(a,b){
//   return a*b
// }
// var total = multiply(4,8)
// alert(tot
// var list = ["tiger", "dogs", "birds", "cats"]

// var numbers = [1, 2, 3, 4, 5]
// console.log(numbers[2])
// var database = [
//  { 
//   username: "Destiny",
//   password: "Cruzdest"
// }
// ]

// var newsfeed = [
//   {
//     username: "Betty",
//     timeline: "you're so great"
//   },
//   {
// 		username: "Sally",
// 		timeline: "Javascript is sooooo cool!"
// 	}
  
// ]
// var userNamePrompt = prompt("Whta's your username?")
// var passwordPrompt = prompt("What's your password")
// var user= {
//   name: "destiny",
//   age: 20,
//   hobby: "soccer",
//   isMarried: false,
//   shout: function(){
//     console.log("AHHHHHHHHHH!")
//   }


// }


// var list = ["apple","orange","banana", "cherry"]
// var database = [
//   {
//     username: "destiny",
//     password: "cruz"
//   },
//   {
//     username: "bella",
//     password: "777"
//   },
//   {
//     username: "brenda",
//     password: "888"
//   }
// ]
// var newsFeed = [
//   {
//     username:"bossman",
//     timeline:"So sad you failed to run your project correctly"
//   },

//   {
//     username:"richie",
//     timeline:"javascript requires a whole lot of thinking"
//   }
// ]

//  function isUserValid(username, password){
//   for (var i=0; i< database.length; i++){
//   if (database[i].username===username &&
//     database[i].password===password
//     )
//     {
//       return true;
//     }
//     return false;
//   }

//  }
//  function signIn(username, password){
//   if (isUserValid(username, password))
//   console.log(newsfeed)
//  } else {
//     alert("Sorry, your password is incorrect")
  
//  }

//  var userNamePrompt = prompt("What is your username?")
//  var passwordPrompt = prompt("input your password")
//  function signIn(user, pass){
//   if (user=== database[0].username  &&
//     pass=== database[0].password
//     )
//     {console.log(newsFeed)}
//     else {
//       alert("Sorry, wrong password")
//     }
//  }
//  signIn (userNamePrompt, passwordPrompt)
// var todos = [
//   "Blurry photos",
//   "Devastated chicken",
//   "Blessed soul",
//   "Cleaned house",
//   "Greatest of all time"
// ]
// var todosLength = todos.length
// for (var i= 0; i< todosLength; i++){
// console.log(todos[i], i)
// // todos.pop()
// }
// todos.forEach(function(todo, i){
// console.log(todo, i)
// }
// )

// var counterOne =  10
//   while(counterOne > 0){
//   console.log(counterOne)
//   counterOne--
//   }
// var button = document.getElementsByTagName("button")[0]
// button.addEventListener("mouseleave", function(){
//     console.log("click!!")
// })
// var button = document.getElementById("enter")
// var input = document.getElementById("userinput")
// var ul = document.querySelector("ul")

// function inputValue(){
//     return input.value.length

// }

// function createListElement(){
//     var li = document.createElement("li")
//     li.appendChild(document.createTextNode(input.value))
//     ul.appendChild(li)
//     input.value = ""

// }
// function addListAfterClick(){
//     if (inputValue() > 0){
//         createListElement()
//           }
// }
// function addListAfterKeypress(evemt){
//     if (inputValue() > 0 && event.keyCode === 13){
//         createListElement()
//          }
// }

// button.addEventListener("click",addListAfterClick )

// var b = "Can I access this?"
// function bb(){
//     var a = "hello world"
// }

// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }


// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
//    function isUserValid(bool){
//     return bool
//    }
//    var answer = isUserValid(true)? "You.re the best": "very bad"
// function moveCommand(direction){
//     var whatHappens
//     switch (direction){
//         case "forward":
//             whatHappens = "you're the best"
//             break
//             case "back":
//             whatHappens = "you just encountered a monster bruh"
//             break
//             case "right":
//                 whatHappens = "There is a porthole over there"
//                 break
//                 case "left":
//                     whatHappens = "I think i need a break for now"
//                     break
//                     default:
//                         whatHappens = "pls enter a valid direction"


//     }
//     return whatHappens
// }
// const player = 'bob'
// let experience = 100
// let userLevel = false

// if(experience > 90){
//     let userLevel = true
//     console.log('inside', userLevel)
// }
// console.log('outside', userLevel)
// var object1 = {value: 10}
// var object2 = object1
// var object3 = {value: 10}

// const object4 ={
//     a: function(){
//         console.log(this)
//     }
// }

// class Player{
//     constructor(name, type){
//     this.name = name
//     this.type = type
//     }
//     introduce(){
//         console.log('Hi I am ${this.name} I am ${$this.type}')
//     }
// }

// class wizard extends Player{
//     constructor(name, type){
//         super(name,type)
//     }
//     play(){
//         console.log('Ohhh I am ${this.type}')
//     }
// }
// const wizard1 = new Wizard('shelly', 'Healer')
// const wizard2 = new Wizard('Shawn', 'Dark Magic')

// Object.values
// Object.entries
// Object.keys

// let obj = {
//     username0: 'Santa',
//     username1: 'Mr Johnson',
//     username2: 'Ferdnard'

// }
// Object.keys(obj).forEach((key, index) =>
// {
//     console.log(key, obj[key])
// })
// Object.values(obj).forEach (value=> {
//     console.log(value)
// })
// Object.entries(obj).forEach (value=> {
//     console.log(value)
// }\]]'
// Object.entries(obj).forEach (value=> {
//     console.log(value)
// })
// Object.entries(obj).map(value =>{
//     return value[1] + value[0].replace('username', '')

// })
// const flattend = [[0,1], [2,3], [4,5]].reduce(
//     (accumulator, array)=> {
//         debugger
    
//         return [].concat([0,1])
//     },
//  [])

// const a = 1
// const b = 10
// const c = 100

// console.log('1')
// setTimeout(() =>{
// console.log('2')
// }, 5000)
// console.log('3')
// var changed = 0
// function change(num){
//     return (num + 5) / 3
// }
// changed = change(10)
// var processed = 0
// function processArg(num){
//     return (num+3)/5
// }
// processed = processArg(20)
// function nextInLine(arr, item){
//     arr.push(item)
//     return arr.shift()
// }
// var testArr = [1,2,3,4,5]
// console.log("Before: " + JSON.stringify(testArr))
// console.log(nextInLine(testArr, 6))
// console.log("After: " + JSON.stringify(testArr))
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// }
// function checkObj(checkProp){
//     if(myObj.hasOwnProperty(checkProp)){
//         return myObj[checkProp]
//     } else{ 
//         return "not found"
//     }
// }
// console.log(checkObj("gift"))
