// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guests = [
    "Mukesh Ambani",
    "Bill Gates",
    "Elon Musk",
];
//let newGuest = [];
console.log(guests);
console.log("Hey! we found a biiger dinner");
console.log("Our new guest is");
guests.unshift("Jeff Bezos");
console.log(guests);
console.log("---------------------------------------------");
guests.splice(2, 0, "Mark");
console.log(guests);
console.log("---------------------------------------------");
guests.push("Henry");
console.log(guests);
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to join us for an exclusive event.\n"));
}
