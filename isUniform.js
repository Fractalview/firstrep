//isUniform

var myArr = [];

var ans = "yes"

var e

while (ans != "no") {
    e = prompt("Enter an element of an array:")
    myArr.push(e)
    ans = prompt("Are there more elements you'd like to enter?")
}

function isUniform(arr) {
    var t;
    var i;
    for (i=0; i<(arr.length-1); i++) {
        if (arr[i] === arr[i+1]) {
            console.log("Same");
        }
        else {
            t = "False";
            return t;
        }
    }
    
    t = "True";
        return t;
}

alert(isUniform(myArr));