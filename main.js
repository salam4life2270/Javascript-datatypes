/*Contact List Array*/

const names = ["Joe", "John", "David", "Erla", "Agnes"]; // These are contact names

const phonenumbers = [7438966, 2468944, 7778324, 7835442, 7439192] // These are contact phone numbers 

/* Names and nuumbers in order*/

console.log(names[0]);
console.log(phonenumbers[0]);

console.log(names[1]);
console.log(phonenumbers[1]);

console.log(names[2]);
console.log(phonenumbers[2]);

console.log(names[3]);
console.log(phonenumbers[3]);

console.log(names[4]);
console.log(phonenumbers[4]);

/*Objects with properties*/

const contact = {
    name: "Joe",
    age: 22,
    married: false,
    height: 172,
    phone: 7438966,
}
console.log(contact.name);
console.log(contact.age);
console.log(contact.married);
console.log(contact.height);
console.log(contact.phone);

/*Demostration of variables*/

var age = 100; // This is a number
var name = "John"; // This is a string
age = age-10;
console.log(age); // New age is 90 because 10 has been subtracted from the above variable

/*output the result of arithmetic operation*/

const myHeight = 167
const yourheight = 188
console.log(myHeight + yourheight); // Adding myHeight and yourHeight

/*output the result of string concantenation*/

console.log (`Hello it is Joe and my height is ${172}`);

/*demostrate the usage of if*/

const price = 200;
if(price <200) {
    console.log ("You can buy");
 }else {
    console.log("Do not buy"); // the set price 200 is not less than 200, so Do not buy is displayed
 }