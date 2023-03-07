const number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: '
//Typescript infers that the value you passed to each of these variables will be the type it will always use. If you added resultPhrase = 0, it would bring up error and say this is supposed to be string not number
// resultPhrase = 0;

//Assign types within parameters of function, for each individual parameter
function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    //Here we are doing the math caculation before hand. That way we can pass it into the console log, instead of doing n1 + n2 in console log which would coancatenate numbers together due to presence of string in resultphrase
    const result = n1 + n2

    if (showResult === true) {
        console.log(resultPhrase + result)
    } else {
        return n1 + n2;
    }
}


const result = add(number1, number2, printResult, resultPhrase);