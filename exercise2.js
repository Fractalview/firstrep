/*console.log("Print all the numbers between -10 and 19");

var xstr = -10;
var x = Number(xstr);
while(x<19) {
    console.log(x);
    x++
}

console.log("Print all even numbers between 10 and 40");

var xstr = 10;
var x = Number(xstr);
while(x<40) {
    if(x%2==0){
        console.log(x);
    }
    x++
}

console.log("Print all odd numbers between 300 and 333");

var xstr = 300;
var x = Number(xstr);
while(x<333) {
    if(x%2!=0){
        console.log(x);
    }
    x++
}

console.log("Print all odd numbers between 300 and 333");

var xstr = 5;
var x = Number(xstr);
while(x<50) {
    if(x%3==0 && x%5==0){
        console.log(x);
    }
    x++
} */

/*for(var x=1; x<10; x++){
     console.log(x);
}

alert(x);*/

// function isEven(x) {
//     if (x % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

/*var x = prompt("Enter a number");

alert("That number is even: " + isEven(x));*/



// function factorial(x) {
//     var i = 1
//     var result = 1;
//     console.log(x);
//     while (i < Number(x) +1 ) {
//         console.log(i);
//         result *= i;
//         i++;
//     }

//     return result;
// }

// var x = prompt("Enter a number");

// alert("Factorial of that number is: " + factorial(x));


function kebabToSnake(str) {
    newStr = str.replace(/-/g , "_");
    return newStr;
}