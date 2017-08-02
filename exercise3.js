//printReverse

var myArr = [];

var ans = "yes"

var e

while (ans != "no") {
    e = prompt("Enter an element of an array:")
    myArr.push(e)
    ans = prompt("Are there more elements you'd like to enter?")
}

function printReverse(arr) {
    var newArr = []
    var i;
    var q;
    for (i=0; i<arr.length; i++) {
        q = arr[i];
        arr[i] = arr[arr.length - (i+1)];
        
        newArr.push(arr[i]);
        arr[i] = q;
    }
    return newArr;
}

alert(printReverse(myArr));
