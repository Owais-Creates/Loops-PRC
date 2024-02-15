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

while (nonReverseNum > 0) {

    let lastDigit = nonReverseNum % 10;
    reverseNum = (reverseNum * 10) + lastDigit;
    nonReverseNum = Math.floor(nonReverseNum / 10);

}

console.log( reverseNum );

//---------------------------------------------------------------------------------------------------

