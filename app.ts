// //Diving into the type of UNIONS

// //Here is our add function from the basics. Let's say we want to be more flexible with what we accept here

// //Let's say we want to adjust the function so it doesn't only add numbers, but it can also concatenate strings as well.

// function combine(input1: number, input2: number) {
//     //Here we are doing the math caculation before hand. That way we can pass it into the console log, instead of doing n1 + n2 in console log which would coancatenate numbers together due to presence of string in resultphrase
//     const result = input1 + input2
//     return result;
// }

// const combinedAges = combine(30, 26) // This will work and add the numbers
// console.log(combinedAges)

// //However, what if we want to add a string to concatenate

// const combinedNames = combine('Jordan', 'Nikita') // See error because combine only accepts number, could change function take strings, but then first function call will fail

///////////////////////////////////

//Therefore to deal with these issues we use union types. This allows us to state that the input will take in more than one type

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') { //Resultconversion is example of literal types used in conjunction with union types, they allow for an EXACT value whether string or number to be required as argument for parameter
    //If we just use union, input1 + input2 will be underlined because typescript doesn't read what is in the union, just assumes it can be anything in which case you couldn't add a boolean and a string or a boolean and a number, so we need to work around

    let result;

    //Here we check if input is all number types, add them
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        //If input is not all number types, can't risk concatinating number and string so make everything a string for consistency and accurate results
        result = input1.toString() + input2.toString()
    
    }

    //Apply a final conversion based on third paramter resultConversion that is passed to function
    if (resultConversion === 'as-number') {
        return +result
    } else {
        return result.toString()
    }

    return result;
}

const combinedAges = combine(30, 26, 'as-number') // This will work and add the numbers
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Jordan', 'Nikita', 'as-text')
console.log(combinedNames)