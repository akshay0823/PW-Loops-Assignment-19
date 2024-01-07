// Loops are essential programming constructs used to execute a block of code repeatedly as long as a specified condition is true. They help automate repetitive tasks and iterate over data structures, making code more efficient and concise.

// There are mainly three types of loops:

// For Loop: Used when the number of iterations is known or defined.

// Syntax:

for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
}
Example:



for (let i = 0; i < 5; i++) {
    console.log(i);
}

// This loop will print numbers from 0 to 4.

// While Loop: Executes a block of code as long as the specified condition is true. Suitable when the number of iterations is not known initially.

// Syntax:


while (condition) {
    // Code to be executed as long as the condition is true
}
Example:


let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// This loop will also print numbers from 0 to 4.

// Do-While Loop: Similar to the while loop but guarantees that the code block is executed at least once before checking the condition.

Syntax:

do {
    // Code to be executed
} while (condition);
Example:

let z = 0;
do {
    console.log(z);
    z++;
} while (z < 5);

// This loop will also print numbers from 0 to 4.

// Loops are crucial in programming because they allow you to:

// Iterate through arrays, collections, or ranges of values.
// Perform repetitive tasks without writing the same code multiple times.
// Control the flow of execution based on conditions.
// Each loop type has its strengths; for loops are generally used when the number of iterations is known, while while and do-while loops are employed when the number of iterations is based on a condition that may change during runtime.