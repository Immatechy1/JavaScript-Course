// var youLikeMeat = false;
// var myNum = 10

// if (youLikeMeat) {
//     document.write("here is the meaty menu");
// }

// if (7 < 5) {
//     document.write("this expression is true");
// } else {
//     document.write("this expression is false");
// }

// if (myNum == 20) {
//     document.write("myNum is equal to 10");
// } else {
//     document.write("myNum is not equal to 10");
// }

// var myAge = 15;

// if (myAge > 30) {
//     document.write("you are over 30");
// } else if (myAge > 20) {
//     document.write("you are over 20");
// }  else if (myAge > 10) {
//     document.write("you are over 10");
// }  else{
//     document.write("you are not over 10");
// }


// Logical Operators
// var myAge = 25;

// if (myAge >=18 && myAge <= 30) {
//     document.write("you can come you cool dude");
// }   else{
//     document.write("you aint coming");
// }

// var myAge = 26;

// if (myAge < 18 || myAge > 30 || myAge === 25 ) {
//     document.write("you aint coming");
// }   else{
//     document.write("you can come you cool dude");
// }


// var links = document.getElementsByTagName("a");

// for (i = 1; i < links.length; i++) {
//     console.log("this is link number" + i); 
// }

// document.write("all links now looped");


// BREAK AND CONTINUE

// for (i = 0; i < 10; i++) {
//     console.log(i);

//     if(i === 7) {
//         break;
//     }
// }
// console.log("i have broken out of the loop");

// for (i = 0; i < 10; i++) {
    
//     if(i === 5 || i === 3 ) {
//         continue;
//     }

//     console.log(i);

//     if(i === 7) {
//         break;
//     }
// }
// console.log("i have broken out of the loop");

// PRATICAL EXAMPLE USING LOOPS
// var links = document.getElementsByTagName("a");

// for (i = 0; i < links.length; i++) {
//     links[i].className = "link-" + i;

// }

// FUNCTIONS

// function getAverage (a,b) {
//     var average = (a + b) /2
//     console.log(average)
// }

// getAverage (7, 12);

function getAverage (a,b) {
    var average = (a + b) /2
    console.log(average)
    return average;
}

var myResult = getAverage (7, 12);
console.log("the average is" + myResult);
