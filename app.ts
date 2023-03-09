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


