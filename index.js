var youLikeMeat = false;
var myNum = 10;
var myAge = 29;
var userAge = 25;
var age = 5;


if (youLikeMeat) {
    document.write("Here is the meaty menu"); 
}   else{
    document.write("You hate meat");
}


if ( myNum === 10) {
    document.write("myNum is equal to 10"); 
} else{
    document.write("myNum is not equal to 10")
}

if ( myAge > 30) {
    document.write("You are over 30"); 
}   else if  ( myAge > 20) {
    document.write("You are over 20");
} else if  ( myAge > 20) {
    document.write("You are over 10");
} else {
    document.write("You are not over 10");
}

if ( userAge >= 18 && userAge <= 30) {
    document.write("you can come cool dude"); 
} else {
    document.write("you aint coming");
}

// while loop
while (age < 10) {
  console.log("your age is less than 10");
  age++;
}
document.write("you are now over 18");


// for loops
for (age = 6; age < 10; age++) {
    console.log("your age is less than 10");
  
  }
  document.write("you are now over 18");

var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {
    console.log("this is link number" + i); 
}

document.write("all links now looped");


// BREAK AND CONTINUE

for (i = 0; i < 10; i++) {
    console.log(i);

    if(i === 10) {
        break;
    }
}
console.log("i have broken out of the loop");


for (i = 0; i < 10; i++) {
    
    if(i === 5 || i === 3 ) {   
        continue;
    }

    console.log(i);

    if(i === 7) {
        break;
    }
}
console.log("i have broken out of the loop");

// PRATICAL EXAMPLE USING LOOPS

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
    links[i].className = "link-" + i;

}

// FUNCTIONS

function getAverage (a,b) {
    var average = (a + b) /2
    console.log(average)
}

getAverage (7, 8, 12);

function getAverage (a,b) {
    var average = (a + b) /2
    console.log(average)
    return average;
}

var myResult = getAverage (7, 12);
console.log("the average is " + myResult);


// GLOBAL AND LOCAL VARIABLE

function getAverage (a,b) {
    var average = (a + b) /2; //local variable
    console.log(average)
    return average;
}

var myResult = getAverage (7, 12); // global variable

function logResult() {
    console.log("the average is" + myResult + "inside the function");
}

logResult();

//NUMBERS
var a = 7;
var b = 5;

console.log(a+b);

console.log(Math.round(7.8));
console.log(Math.floor(7.8));
console.log(Math.PI);

//STRING
var myString = 'I\'m a "fun" string ninja'
console.log(myString)
console.log(myString.length)
console.log(myString.toLocaleUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja"));


if (myString.indexOf("ninja")=== -1){
    console.log("the word ninja is not in the string");
} 
else {
    console.log("the word ninja starts at the position " + 
    myString.indexOf("ninja"));
}

var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2)
console.log(string1 > string2)

//SLICE AND SPLIT STRING
var str = "hello, world";
console.log(str.slice(2,9));

var tags = "meat, ham, salami, pork, beef, chicken"
console.log(tags.split(","));

// ARRAY
var myArray = [];
myArray[0] = 25
myArray[1] = 30
myArray[2] = true
myArray[3] = "hello"
console.log(myArray);
console.log(myArray.length);
console.log(myArray.sort());

// Object

var myArray = new Array();
myArray[0] = 8;
myArray[0] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun"
myCar.drive = function() { console.log ('now driving');};

myCar.drive()

var myCar2 = {
    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time) { 
        console.log (speed * time);
    },

    test: function() {
        console.log("driver name " + this.driver)
    }
}

var myCar3 = {
    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time) { 
        console.log (speed * time);
    },

    logDriver: function() {
        console.log("driver name " + this.driver);
    }
}

myCar2.test();
// myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

// CONSTRUCTOR FUNCTION

// var myArray = new Array();
// var myString = new String();


var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed
    this.driver = driver;
    this.drive = function(speed, time) { 
        console.log (speed * time);
    };
    this.logDriver = function (){
        console.log("driver name " + this.driver);
    };
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(70, "Humply Mac");
var myCar3 = new Car(70, "Shaun Alister");
var myCar4 = new Car(70, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();

//DATE OBJECT

myDate = new Date();
console.log(myDate)

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(25155, 0, 31);

console.log(myPastDate)
console.log(myFutureDate)

var birthday = new Date (1985, 0, 15, 11, 15, 25);
var birthday2 = new Date (1985, 0, 15, 11, 15, 25);

//get the month of the date (0 11)
console.log(birthday.getMonth())

//get the full year(YYYY)
console.log(birthday.getFullYear())

//get the date of the month (1-31)
console.log(birthday.getDate())

//get the day of the week (0 - 6)
console.log(birthday.getDay())

//get the hours of the date (0 - 23)
console.log(birthday.getHours())

//get the number of milli seconds since 1st jan 1970 
console.log(birthday.getTime())

if (birthday == birthday2) {
    console.log("birthdays are equal")
} else {
    console.log("birthdays are not equal")
}

if (birthday.getTime() == birthday2.getTime()) {
    console.log("birthdays are equal")
} else {
    console.log("birthdays are not equal")
}

// DOM MANIPULATION