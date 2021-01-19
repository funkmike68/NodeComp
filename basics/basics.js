// The old way to write a variable
var firstName = 'Michael';
console.log(firstName);

// Concatenation, the old way
var lastName = 'Dodson';
console.log(firstName + '' + lastName);

// Concatenation the new way - next gen
// const never changes but let can
const city = 'St. Louis';
const state = 'Missouri';
let job = 'web developer';
let isMarried = true;
let age = 52;
console.log(`My name is ${firstName} ${lastName}. I live in ${city}, ${state}.`);
console.log(`${firstName} is a ${age} year old ${job}. He is married. ${isMarried}`);
