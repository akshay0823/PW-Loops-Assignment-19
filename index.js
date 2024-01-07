// Conditional statements are fundamental constructs in programming that allow the execution of different blocks of code based on whether a specified condition evaluates to true or false. They enable your program to make decisions and execute specific code based on the given conditions.

// There are typically three main types of conditional statements in programming:

// if statement: The if statement executes a block of code if a specified condition is true.

if (condition) {
  // Code to be executed if the condition is true
}

let num = 10;
if (num > 0) {
  console.log("Number is positive");
}

// if-else statement: The if-else statement executes one block of code if the condition is true and another block if the condition is false.

// Syntax:

if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}

let num1 = -5;
if (num1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is non-positive");
}

// if-else if-else statement: The if-else if-else statement allows checking multiple conditions.

// Syntax:

if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if none of the conditions are true
}

let num3 = 0;
if (num3 > 0) {
  console.log("Number is positive");
} else if (num3 < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}
