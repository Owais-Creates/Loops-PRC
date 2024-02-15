// Here iam gonna solve questions based on ALL types of loops. 

// Q1 - calculate the length of the number stored in the variable.

let lengthNum = 123456;
console.log(`The length of ${lengthNum} is `);
let count = 0;

// USING WHILE LOOP
while (lengthNum > 0) {

    lengthNum = Math.floor(lengthNum / 10);
    count++

}

console.log(`${count}`);

//---------------------------------------------------------------------------------------------------

// Q2 - Given a number in the variable reverse that number using loop only.
// Ex - 123 OUTPUT - 321

let nonReverseNum = 123456;
let reverseNum = 0;

// USING WHILE LOOP
while (nonReverseNum > 0) {

    let lastDigit = nonReverseNum % 10;
    reverseNum = (reverseNum * 10) + lastDigit;
    nonReverseNum = Math.floor(nonReverseNum / 10);

}

console.log(reverseNum);

//---------------------------------------------------------------------------------------------------

// Q3 - Write a program which takes two values "LOWER LIMIT" and "UPPER LIMIT" and print the prime numbers in between the "LL" and "UL"

let lowerLimit = 10;
let upperLimit = 30;

// USING FOR LOOP
for (i = lowerLimit; i <= upperLimit; i++) {
    let count = 0;

    for (div = 1; div <= i; div++) {
        if (i % div == 0) {
            count++;

            if (count > 2) {
                break
            }
        }
    }

    if (count == 2) {
        console.log(`prime numbers ${i}`);
    }
}

//---------------------------------------------------------------------------------------------------

// Q4 - Write a program which prints the given number like this.
// let num = 786
/* OUTPUT - 7
            8
            6 
            */

let num = 786;
let hundred = 100;

while (num > 0) {

    let digit = num / hundred;
    console.log(Math.floor(digit));
    num = num % hundred;;
    hundred = (hundred / 10);

}

//---------------------------------------------------------------------------------------------------
