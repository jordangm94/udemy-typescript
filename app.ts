//Diving into objects in typescript

//This is one way to do the syntax where you are stating there is a person and by putting curly brackets, infering an object and the types the object will hold

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Jordan',
//     age: 28
// }

//The cleaner syntax however is to let typescript infer by just adding the keys with the values, this tells Typescript it should be a string or number automatically

const person = {
    name: 'Jordan',
    age: 28
}

console.log(person)