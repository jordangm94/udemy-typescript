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
    age: 28, 
    hobbies: ['gaming', 'sports'] //Adding hobbies to learn about arrays in typescript
}

let favouriteActivities: string[]; //This means everything in aray must be a string, if you want to have a mixed array, could infer any[]
favouriteActivities = ['sports'];

console.log(person)

for (let hobby of person.hobbies) { //In for loop, notice if you hover over hobby or person.hobbies, in the loop it knows what the type of each variable will be!
    console.log(hobby.toUpperCase())//Since it knows hobby will be a string, can apply string methods/prototypes and are suggested by intellisense!
}
