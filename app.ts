//Diving into objects in typescript

//This is one way to do the syntax where you are stating there is a person and by putting curly brackets, infering an object and the types the object will hold

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Jordan',
//     age: 28
// }


//Here although the cleaner syntax would have been to not name all the types and let TS infer, because role we have to. 
//Role here is a tuple, fixed length array that takes a number first and then string
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // This here is the tuple, allows for great strictness. States we can have an array with only two indexes, first a number and second a string in this case.

} = {
    name: 'Jordan',
    age: 28, 
    hobbies: ['gaming', 'sports'], //Adding hobbies to learn about arrays in typescript
    role: [1, 'programmer'] //
}

// person.role.push('admin'); //Admin is still able to be pushed into the array, push is an exception allowed in tuples
// person.role[1] = 10;// You can see that this line doesn't work because trying to push number 10 into index 1 of role array, which must receive type of string
// person.role = [0, 'author', 'basketballer'] //This provides 3 values into the tuple array, when it is only typed to have two. This would cause an error

console.log('Hello from the TUPLE', person.role)

let favouriteActivities: string[]; //This means everything in aray must be a string, if you want to have a mixed array, could infer any[]
favouriteActivities = ['sports'];

console.log(person)

for (let hobby of person.hobbies) { //In for loop, notice if you hover over hobby or person.hobbies, in the loop it knows what the type of each variable will be!
    console.log(hobby.toUpperCase())//Since it knows hobby will be a string, can apply string methods/prototypes and are suggested by intellisense!
}
