let myObj = {
    car1 : "Mercedes",
    car2 : "Audi",
    car3 : "Bmw",
    car4 : "Ferrari"
};
console.log(myObj.car1);
console.log(myObj.car2);
console.log(myObj.car3);
console.log(myObj.car3);



let myObj2 = {
    "car1" : "Mercedes",
    "car2" : "Audi",
    "car3" : "Bmw",
    "car4" : "Ferrari"
};
console.log(myObj.car1);
console.log(myObj.car2);
console.log(myObj.car3);
let find1 = myObj2.car4;
console.log(find1);

myObj2.car4 = "Porche";
console.log(myObj2.car4);
myObj2.car1 = "Honda";
console.log(myObj2.car1);
console.log(myObj2);

myObj2.speed = "too fast cars no need to mention their exact speed";
console.log(myObj2.speed);


function car(num) {
    let result = "";

    let newObj = {
        "car1" : "Mercedes",
        "car2" : "Audi",
        "car3" : "Bmw",
        "car4" : "Ferrari" 
    };
    result = newObj[num];
    return result;
}

console.log(car("car1"));


function phoneticLookup (val) {
    var result ="";
  
    var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
    };
    result = lookup[val];
    
    return result;
}

console.log(phoneticLookup("echo"));


function terms(sent) {
    let x = "";

    let mterm = {
        "a" : "area",
        "v" : "volume",
        "c" : "circle"
    };
    x = mterm[sent];
    return x;

}
// mterm = math terms, sent = sentence
console.log(terms("c"));