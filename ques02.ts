// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name2: string = 'ahmed';
console.log(`Name in Upper Case ${name2.toUpperCase()}`); 
console.log(`Name in Lower Case ${name2.toLowerCase()}`); 
let start = name2.slice(0, 1); 
let end = name2.slice(1);
console.log(`Name in title Case ${start.toUpperCase() + end.toLowerCase()}`); 
 