// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var stdName = "Jack";
console.log(stdName == "Jack");
console.log(stdName == "Ali");
console.log("_______________________________________________");
console.log(stdName.toLowerCase() == "jack");
console.log(stdName.toLowerCase() == "JACK");
console.log("_______________________________________________");
var num = 10;
console.log(num == 10);
console.log(num == 2);
console.log(num > 5);
console.log(num < 5);
console.log(num >= 10);
console.log(num <= 10);
console.log("_______________________________________________");
console.log(num > 5 && num < 15);
console.log(num > 5 || num < 3);
console.log("_______________________________________________");
var arr1 = [1, 2, 3, 4, 5];
var item = 2;
if (arr1.indexOf(item) !== -1) {
    console.log("".concat(item, " is in the array."));
}
else {
    console.log("".concat(item, " is not in the array."));
}
