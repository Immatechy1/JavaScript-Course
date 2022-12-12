// let name = 'Imma'; //string
// let age = 30; //number
// let isApproved = true; //boolean
// let firstName = undefined;
// let selectedColour = null;
 
//OBJECT
let person = {
    name: "Imma",
    age: 30
};

//Dot Notation
person.name = "john"

//Bracket Notation
let selection = "name"
person[selection] = 'mary'

console.log(person.name)

//ARRAYS
let selectedColours = ['red', 'blue'];
selectedColours[2] = 1
console.log(selectedColours.length)

//Fuction
function greet() {
    console.log('hello world')
}
greet();


//concatination
//Performing a task
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}
greet("john", "imma");
greet("mary");
// john is the agument why name is the parameter

//Calculating a value
function square (number) {
    return number * number;
}

console.log(square(2));

alert("Hello World");