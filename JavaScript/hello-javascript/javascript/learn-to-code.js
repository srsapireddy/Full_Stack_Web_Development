/*
var name = "Jack";
var age = 23;
var shootingScore: 45.6;

var message = "Hi, my name is " + name + " and I am " + age + " years old!";

// --------------------------------------------------------------------------

var firstName = "John";
var lastName = "JacobJingleHeimerSmith";
var dateOfBirth = "10-09-82";
var age = 23;
var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";

console.log(loginWelcomeMessage);

// ---------------------------------------------------------------------------

var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var div = 10 / 3;
var mod = 10 % 3;

var msg = "10 / 3 = 3 with a remainder of " + mod;

var result = 10 * ((5 + 3) - 4);

console.log(result);

// ----------------------------------------------------------------------------

// Conditional Operators

var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

if (nikeSBShoes <= myAccountBalance) {
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance) {
    console.log("We just bought some dope shoes with a coupon!");
    myAccountBalance -= nikeSBShoes - coupon;
    console.log("Account Balance: " + myAccountBalance);
} else {
    console.log("You too broke of shoes bra!");
} 



var val1 = 23;
var val2 = "23";

if (val1 !== val2) {
    console.log("These are not the same!");
} else {
    console.log("One of these is like the other...");
}


// ------------------------------------------------------------------------------

// Logical Operators

if (1 === 1 && 2 === 2 || "Joe" === "Joe") {
    console.log("These are both true!");
}

if (true && false) {
    console.log("These are the same!");
}

if (1 === 3 || "Joe" === "Joe") {
    console.log("one of these are true!");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3disabledHandicap = false;

if ((cat1 > cat2 && cat1 > cat3) && cat3disabledHandicap === false) {
    console.log("Cat 1 is the cutest!");
} else if ((cat2 > cat1 && cat2 > cat3) && !cat3disabledHandicap) {
    console.log("Cat 2 is the cutest!");
} else if ((cat3 > cat1 && cat3 > cat2) || cat3disabledHandicap) {
    console.log("Cat 3 is the cutest!");
}



// ------------------------------------------------------------------------------

// JavaScript Arrays

var student1 = "Timmy";
var student2 = "Janessa";
var student3 = "Arun";

var balances = [50.45, 4000.12, -300.50];

// var person = ["John",12,"USA",true];

var studentNames = ["Timmy", "Janessa", "Arun"]

var naughtyList = [];
naughtyList.push(studentNames[0]);

var index = naughtyList.indexOf("Timmy");
var index2 = studentNames.indexOf("Arun");


console.log(naughtyList);
if(index > -1) {
    naughtyList.splice(index, 1);
}

console.log(naughtyList);

*/

// ------------------------------------------------------------------------------

// Loops

/*
var total = 10;
for (var x = 0; x < total; x++){
    console.log(x);
}

var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

for (var index = 0; index < students.length; index++){
    console.log(students[index]);
}
*/

// ------------------------------------------------------------------------------

// Functions and Methods
/*

var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

var length2 = 12 ;
var width2 = 14;
var area2 = length2 * width2;

// console.log(area1);
// console.log(area2);

function area(length, width) {
    return length * width;
}

var rectanglesAreas = [];
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14, 2));
rectanglesAreas.push(area(4,5));

// console.log(rectanglesAreas);


var bankBalance = 500;

function makeTranscation(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficient Funds");
    }
}

console.log(bankBalance);
makeTranscation(79.00);

console.log(bankBalance);
makeTranscation(2.32);

console.log(bankBalance);
makeTranscation(10.45);

console.log(bankBalance);
makeTranscation(450.00);

var transaction = function(priceOfSale){
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficient Funds");
    }
};

transaction(10);

var printCustomerName = function(first, last) {
    console.log("First Name: " + first + " Lase Name: " + last);
}

var applyForCreditCard = function(creditScore, soul){
    // call some functions to process application
}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);
console.log(bankOperations);
*/


// ------------------------------------------------------------------------------

// JavaScript Objects --> Collection of named values
// Grouping of things

// A function that is an object
// Object constructor --> Constructing an object every time
// Blue Print

/*

var students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
        return "Hi, I'm " + this.firstName + " and I'am " + this.age + " years old."
    };
}

students.push(new Student("Jenny", "Lage", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Jr", 4));

var student = students[0];

// for in loop
for (var key in student) {
    console.log(student[key]);
}

//var s1 = new Student("Jenny","Laga",5);
//console.log(s1);
//c//onsole.log(s1.greeting());

//var student0 = {
//    firstName: "Jayen",
//    lastName: "Looo",
//    age: 8,
//    greeting: function(){
//        return "Hi, I'm " + this.firstName + " and I'am " + this.age + " years old."
//    }
//};

//console.log(student0.greeting());

// Creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;

//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;

//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);

//for(var index = 0; index < students.length; index++){
//    var student = students[index];
//    console.log(student.greeting());
//}

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

*/

// ------------------------------------------------------------------------------

// Javascript Bind

// Alex Brown's

/*

this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
    car: "Aston Martin",
    getCar: function(){
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarLater = marksGarage.getCar;

// Now work is over and Mark wants his car
console.log(storeGetCarLater());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());

*/

// ------------------------------------------------------------------------------


















































































































