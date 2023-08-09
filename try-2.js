//string methods
let str = "Apple, Banana, Kiwi";
let part = str.substring(0,5);
console.log(part);
let part2 = str.substring(5);
console.log(part2);
/*substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.*/
//----------------------------------------------
//Replacing String Content
//The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft and meet the software engineers who work for a long time for Microsoft";
let newText = text.replace("Microsoft","W3Schools");
console.log(newText);
/*The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match*/
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work

//To replace case insensitive, use a regular expression with an /i flag (insensitive)
let text2 = "Please visit Microsoft and meet the software engineers who work for a long time for Microsoft";
let newText2 = text2.replace(/MICROSOFT/i,"W3Schools");
console.log(newText2);

//To replace all matches, use a regular expression with a /g flag (global match)

let text3 = "Please visit Microsoft and meet the software engineers who work for a long time for Microsoft";
let newText3 = text3.replace(/Microsoft/g,"W3Schools");
console.log(newText3);
