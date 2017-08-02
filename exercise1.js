var age;

age = Number(prompt("Enter your age."));


if (age < 0) {
    alert("Error!");
} 

else if ((age % 2 != 0) && (Math.sqrt(age) % 1 == 0)) {
    alert("Your age is odd.");
    alert("Perfect square!");
} 

else if (age == 21) {
    alert("Happy 21st birthday!");
    alert("Your age is odd.");
} 

else if (age % 2 != 0) {
    alert("Your age is odd.");
} 

else if (Math.sqrt(age) % 1 == 0) {
    alert("Perfect square!");
}  

else if (age == 21) {
    alert("Happy 21st birthday!");
}

