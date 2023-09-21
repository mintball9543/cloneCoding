//alert("hi");
/*
console.log(5+2);
console.log(5*2);
console.log(5/2);
*/
/*
const a = 10;
const b = 2;
let myName = "nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "nicolas";
console.log("your new name is " + myName);
*/
/*
let amIFat = false;
console.log(amIFat);

amIFat = null;
console.log(amIFat);

let something;
console.log(something);
*/

//list array
/*
const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
const nonsense = [1,2,"hello",false,null,true,undefined,"nico"];
console.log(daysOfWeek[4],nonsense);

daysOfWeek.push("sun");
console.log(daysOfWeek);*/

//Object
/*
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
player.lastName = "potato";
console.log(player);
console.log(player.name);

player.points+=15;
console.log(player);
*/
/*
//함수
function sayHello(name, age){
    console.log("Hello my name is " + name + "am I'm "+ age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);


function plus(a,b){
    console.log(a+b);
}
function devide(a,b){
    console.log(a/b);
}

plus(8, 60);
devide(98,20);
*/
/*
const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
}

player.sayHello("lynn");
player.sayHello(player.name);
*/
/*
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    devide: function (a, b) {
        console.log(a / b);
    },
    times: function (a, b) {
        console.log(a * b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },

}

calculator.add(10, 5);
calculator.minus(10, 5);
calculator.devide(10, 5);
calculator.power(10, 5);
calculator.times(10, 5);
*/
/*
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
*/

//return
/*
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    devide: function (a, b) {
        return a / b;
    },
    times: function (a, b) {
        return a * b;
    },
    power: function (a, b) {
        return a ** b;
    },

}

const plusResult = calculator.add(10, 5);
const minusResult = calculator.minus(plusResult,5);
const timesResult = calculator.times(10, minusResult);
const devideResult = calculator.devide(timesResult, plusResult);
const powerResult = calculator.times(devideResult, minusResult);
*/

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
}
else if (age < 18) {
    console.log("You are too young.");
}
else if (age >= 18 && age <= 50) {
    console.log("You can drink");
}
else if (age >= 50 && age <= 80) {
    console.log("You should exercise");
}
else if(age === 100){
    console.log("wow you are wise");
}
else if (age > 80) {
    console.log("You can do whatever you want");
}
else {
    console.log("You can't drink");
}