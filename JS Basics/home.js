console.log("hello");
// console.log("Hello i am akshta");

//variables
var b = "smoothie";
console.log(b);

var someNumber  = 45;
console.log(someNumber);

// var age = prompt("what is your age?");

// document.getElementById("someText").innerHTML = "My age is" +age;

//Numbers in javascript
var num1 = 10;

//Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;

console.log(num1);

//Devide, Multiply and remainder
console.log(num1 * 5);

//Increment or decrement any number you want
num1 += 10;
console.log(num1);

/*Functions
1.Create a function
2.Call a function
*/
//create
function fun() {
    console.log('this is a function');
}

//call
fun();

/* Lets createa function that take in a name and says hello followed by your name
For Example
Name: Akshata
Return: "Hello World"
*/
// var name = prompt("What is your name?");
// greeting(name);
function greeting(yourName) {
    var result = "Hello" +' '+ yourName;//String concatination
    console.log(result);
}


//How do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10,10);

/*while loops
var num = 0;

while(num < 100) {
    num += 1;
    console.log(num);
}

*/
//For loop
for(let num=0; num<=100; num++) {
 console.log(num);
}
//Data types
let yourAge= 24;//number
let yourName = 'Akshata';//string
let name = {first:'jone', last:'Doe'};//object
let truth = false;//boolean
let groceries =['apple','banana','oranges'];//array
let random;//undefined
let nothing = null // value null

//Strings in Javascript (common methods)
let fruit = 'banana,apple,orange';
let moreFruits = 'banana\napple'; //new line
 
console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit[2]);
console.log(fruit.charAt(2));
console.log(fruit.split(','));// split by a comma
console.log(fruit.split('')); // split by charcter


//Array
let fruits = ['banana','apple','orange'];
fruits = new Array('banana','apple','orange');
console.log(fruits[1]);//access value at index 2nd
fruits[0] = 'pear';
console.log(fruits);
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods
console.log('Hello',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);//removes last items
console.log(fruits.push('Berry'),fruits);// appends item
console.log(fruits[3]);
fruits[3] = 'New fruits';
console.log(fruits);
fruits.shift(); //remove the first element
console.log(fruits);
fruits.unshift('Kiwi'); //add first element
console.log(fruits);
let vegetables = ['aspargus','tomoto','brcccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [6,3,2,8,4,23,435,32,5,9,0];
console.log(someNumbers.sort(function(a,b){return a-b}));//ascending order
console.log(someNumbers.sort(function(a,b){return b-a}));//descending order

let emptyArray = [];
for(let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

//objects
let student = {
                first:"Akshata", 
                last:"Patil",
                age:24,
                height:156,
                studentInfo:function() {
                    return this.first+ '\n' +this.last+ '\n' +this.age;
                }
            }
console.log(student.first);
console.log(student.first="Akshu");
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//conditionls,control flows (if else)
//18-35 is my target demographic
//&& AND
//|| OR
// let age = prompt('what is you age?');
let age = 23;
if((age >= 18) && (age<= 35)) {
    let status = 'target demo';
     console.log(status);
} else {
    let status = 'Not my audience';
    console.log(status);
}

//Switch statements
//Diffrenciate between weekday and weekend
//day 0 --> Sunday
//day 6 --> Saturday -->
//day 4 --> Thursday --> weekday

switch(2) { 
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';
}
console.log(text);
