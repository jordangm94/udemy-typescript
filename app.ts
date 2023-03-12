let userInput: unknown; // Used for when we don't know what user will enter. Same as any, but unknown a bit different.
let userName: string;

userInput = 5;
userInput = 'Hello sir!'; // Notice it still works in both of these cases 

//We canot assign userInput to userName because userName must be a string and userInput can be anything
//In this case e would have to add an extra check to ensure userInput is a string!
//Unknown ensures
if (typeof userInput === 'string') {
    userName = userInput;
}

///////////Next: Working with the never type

function generateError (message: string, code: number): never {
    throw {message: message, errorCode: code}; //Throw cancels our script. This doesn't return anything, it reutrns never! Clear for your intentions.
}

generateError('An error occured!', 500)