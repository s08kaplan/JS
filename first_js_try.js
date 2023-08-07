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

function checkNumbers(a,b,c) {
    if (a > b && a > c) {
        return "a is the biggest number";
    }
    if (b > a && b > c) {
        return "b is the biggest number";
    }
    if (c > a && c > b) {
        return "c is the biggest number";
    }
}

console.log(checkNumbers(61,35,36));


function checkLetters(val) {
       var answer = "";
       switch (val) {
         case "a":
            answer = "angel";
            break;
         case "b":
            answer = "blouse";
            break;
         case "c":
            answer = "chimney";
            break;
         default:  
            answer = "at the end it is finished"  
            break;     
       }
         return answer;
}

console.log(checkLetters("a"));
console.log(checkLetters("c"));
console.log(checkLetters("3"));

//---------------------------------------

function isLess(a,b) {
    return a < b;
}

console.log(isLess(25,33));
console.log(isLess(43,33));
//-----------------------------

function abTest(a,b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(-2,2));
//-------------------------------


