//Diving into functions, let's recreate the add function

function add(n1: number, n2: number) {
    return n1 + n2; //Return actually has a type and it is what you designated, if you hover over function it will tell you "function add(n1: number, n2: number): number", the number at the end is the return type
}

//The return type can be inferred based on what the function is returning, or it can be explicitly stated like this: 

// function add(n1: number, n2: number): number {
//     return n1 + n2; //Return actually has a type and it is what you designated, if you hover over function it will tell you "function add(n1: number, n2: number): number", the number at the end is the return type
// }

//However please note, it is better to let typescript do its job with type inference

///////////////////Introduction to new type specific to RETURN

//For the printResult function here, the current return type is actually VOID, which means the function is not returning anything. 
//That is because we are only console logging on the inside, we are not returning anything! 
//In typescript we cannot have the function return undefined, instead we must state it is void. If you state undefined typescript expects you to have a return but with nothing beside it.

function printResult(num: number) {
    console.log('Result: ' + num);
}

//This could also be written without type inference where type of return "void" is specifically stated

// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }

printResult(add(5, 5));

//BUT WHAT IF you could have functions themselves as types? Imagine the following: 

//You can say that hey this combinedValues can hold any function

// let combineValues: Function;

//However, if we want to be more specific we can use function types! 

// let combineValues: () => number; //This wouldn't work as this is letting it hold a function that takes no parameters and returns a function, we want combined values to hold our function add that holds two parameters/numbers

let combineValues: (a: number, b: number) => number; // Notice the syntax - Variable, semicolon, assignment of parameter types, arrow, result/return type

combineValues = add; 

console.log(combineValues(8, 8)) //Add would run perfectly here as the combineValues type matches add as a function, in how it requires two numbers as two parameters

// combineValues= printResult; //Print values would not run well here, because it requires one number as a parameter, but we are saying that our function stored in combinedValues must hold two parameters, each a number. Mismatch of type and therefore error

//////////////////////////////////////////////////

//So here we create a function and we state the name of each argument being passed in and what number it can be
//In the third parameter spot, we pass parameter call callback, which can hold a function that must receive a number and return nothing
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);//Here we pass the result to the callback and the function provided will do what it is supposed to with result
}

//Now down here fire the function, we can pass it two numbers, and also a function that takes result (which we know will be the two numbers added together) and console logs it. 
//This works because function passed into addAndHandle must produce void, and this function is only console logging result, not returning it! 
addAndHandle(10, 20, (result) => {
    console.log(result);
})



