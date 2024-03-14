// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var name2 = 'ahmed';
console.log("Name in Upper Case ".concat(name2.toUpperCase()));
console.log("Name in Lower Case ".concat(name2.toLowerCase()));
var start = name2.slice(0, 1);
var end = name2.slice(1);
console.log("Name in title Case ".concat(start.toUpperCase() + end.toLowerCase()));
