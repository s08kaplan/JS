console.log('welcome to the JS world');
console.log("hi are you ok?")
let x = 5;
let y = 10;
console.log(x + y)
function myFunc(val) {
    if (val == 10) {
        return "Yep they are equal";
    }
    return "Sorry they are not equal";
}
console.log(myFunc(20));


function myFunc2(val) {
    if (val === 10) {
        return "exactly they are same";
    }
    return `Sorry there are two options but both of them shows that they are not equal`;
}

console.log(myFunc2("10"));

function myFunc3(a,b) {
    if (a == b) {
        return "they are equal but be careful";
    }
    return "Sorry they are not equal";
}
console.log(myFunc3(10,"10"));