// CHAPTER 9-11

// Question 1
let city = prompt("Enter your city name:");

if (city === "karachi") {
    document.write("Welcome to the city of lights");
} else {
    document.write("Welcome to " + city);
}

// Question 2
let Gender = prompt("Enter your gender name:");
let gender = prompt("Enter your gender name:");

if (Gender === "male") {
    document.writeln("Good Morning Sir");
}

if (gender === "female") {
    document.writeln("Good Morning Ma'am");
}

// Question 3
let trafficLight = prompt("Enter the color of the traffic light (Red, Yellow, Green):");

if (trafficLight === "red" || trafficLight === "Red") {
    document.write("Must Stop <br>");
} else if (trafficLight === "yellow" || trafficLight === "Yellow") {
    document.write("Ready to move <br>");
} else if (trafficLight === "green" || trafficLight === "Green") {
    document.write("Move now <br>");
} else {
    document.write("Invalid color entered! Please enter Red, Yellow, or Green.<br>");
}

// Question 4
let fuel = prompt("Enter the fuel level in your car (in liters):");
if (fuel >= 0.25) {
    document.write("<h2>Please refill the fuel in your car</h2>");
} else {
    document.write("<h2>Fuel level is sufficient</h2>");
}

// Question 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (++c === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 6
let sub1 = Number(prompt("Enter obtained marks for Subject 1:"));
let sub2 = Number(prompt("Enter obtained marks for Subject 2:"));
let sub3 = Number(prompt("Enter obtained marks for Subject 3:"));

let totalMarks = 300;

let marksObtained = sub1 + sub2 + sub3;
let percentage = (marksObtained / totalMarks) * 100;

let grade = "";
let remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// Question 7
let secretNum = 7;

let userGuess = Number(prompt("Enter a number between 1 and 10: "));

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
} else {
    alert("wrong Answer");
}

// Question 8
let userNumber = Number(prompt("Enter your number:"));

if (userNumber % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}

// Question 9
let evenNumber = Number(prompt("Enter your number:"));

if (evenNumber % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// Question 10
let temperature = Number(prompt("Enter the temperature in Celsius:"));

if (temperature <= 40) {
    alert("It's too hot outside.");
} else if (temperature <= 30) {
    alert("the weather today is normal.");
} else if (temperature <= 20) {
    alert("todays weather today is normal");
} else if (temperature <= 10) {
    alert("today weather is so cool.");
} else {
    alert("omg today weather is so cool.");
}

// Question 11
let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));
let operation = prompt("Enter the operation:");

if (operation === "+") {
    alert(num1 + num2);
} else if (operation === "-") {
    alert(num1 - num2);
} else if (operation === "*") {
    alert(num1 * num2);
} else if (operation === "/") {
    alert(num1 / num2);
} else if (operation === "%") {
    alert(num1 % num2);
} else {
    alert("Invalid operation");
}