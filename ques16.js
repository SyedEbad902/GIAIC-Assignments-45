// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var guests = [
    "Jeff Bezos",
    "Mukesh Ambani",
    "Mark",
    "Bill Gates",
    "Elon Musk",
    "Henry",
];
console.log("Sorry! we can only invite 2 people for dinner\n");
var guest1 = guests.pop();
console.log("Sorry ".concat(guest1, ", you are not invited to dinner\n"));
var guest2 = guests.pop();
console.log("Sorry ".concat(guest2, ", you are not invited to dinner\n"));
var guest3 = guests.pop();
console.log("Sorry ".concat(guest3, ", you are not invited to dinner\n"));
var guest4 = guests.pop();
console.log("Sorry ".concat(guest4, ", you are not invited to dinner\n"));
console.log(guests[0] + " You are invited for dinner\n");
console.log(guests[1] + " You are invited for dinner\n");
guests.pop();
guests.pop();
console.log(guests);
