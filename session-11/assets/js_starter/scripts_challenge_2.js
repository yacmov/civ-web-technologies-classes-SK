// Challenge 2 Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code goes here

for (const [index, value] of numbers.entries()){
    let remainder = value % 2;
    if (remainder === 0) {
        console.log(`Number ${value} is "EVEN"`);
    }
    else {
        console.log(`Number ${value} is "ODD"`);
        
    }
}