// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var username = [];
if (username.length == 0) {
    console.log("We need to find more users");
}
for (var i = 0; i < username.length; i++) {
    if (username[i] === "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(username[i], ", thank you for logging in again"));
    }
}
