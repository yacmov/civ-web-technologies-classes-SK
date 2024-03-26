// Put your challenge code here

// Challenge 2
// Create two variables
let length = 5;
let width = 8;

// Calculate the area of rectangle
let area = length * width

// Display on the console
console.log(`This is the size of rectangle: ${Math.round(area)}`)


// Challenge 3
let randomNumberCounter = 10
let sum = 0
const randomNumbers = []


// Generator 10 random number include 100
console.log(`\n** New Number generator **`)
for (let result = 0; result < randomNumberCounter; result++)
{
    newNumber = Math.floor(Math.random() * 100) + 1
    randomNumbers.push(newNumber);
    console.log(`Random Number Generated: ${newNumber}`)
    sum += newNumber
};

console.log(`\n** Numbers in list **`)
console.log(randomNumbers);



// Show sum
console.log(`\n** Sum is: ${sum}`)

// Show average
let average = sum / randomNumberCounter
console.log(`\n** Average number is: ${average}`)

// Calculate the square root of the average
let squareRoot = Math.sqrt(average).toFixed(3)
console.log(`\n** Squire root is: ${squareRoot}`)


// Find Largest number
let largestNumber = Math.max(...randomNumbers) // ... will pass all the value in array
console.log(`\n** Largest Number is: ${largestNumber}`)

// Calculate the factorial of the largest number
// factorial is multiply all the numbers between 1 to target number
// ex) 5! = 5 * 4 * 3 * 2 * 1 = 120
let factorialLargestNumber = 1 // set as 1 for start

for (let i = largestNumber; i > 0; i-- ) // if i is greater then 0, run the code and i = i -1 
{

    /** 
    * First run:  1 * i(given number) = Target number
    * ex) 1 * 5 = 5
    * Second run: Target number * (i - 1) 
    * ex) 5 * ( 5 - 1) = 20 
    * Tired run: ex) 20 * ( 4 - 1 ) = 60 
    * and so on
    */
    factorialLargestNumber = factorialLargestNumber * i

}
console.log(`\n** Factorial result : ${factorialLargestNumber}`)

