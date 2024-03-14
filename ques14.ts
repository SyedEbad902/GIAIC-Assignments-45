// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// // in your list.

let guests: string[] = [
  "Mukesh Ambani",
  "Bill Gates",
  "Elon Musk",
  "Jeff Bezos",
];
console.log(guests);

console.log(`${guests[0]} can not come for dinner.`); 
let newGuests = guests.filter(item => item !== "Mukesh Ambani");
newGuests.push("Mark Zackerberg");
console.log("Our new guests are:");
console.log(newGuests);
