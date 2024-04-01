// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var magicians = ["Singer1", "Singer2", "Singer3"];
var show_magicians = function (magiciansName) {
    magiciansName.forEach(function (mag) {
        console.log(mag);
    });
};
var make_great = function (magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] += " the Great";
    }
};
make_great(magicians);
console.log("ORignam arre");
show_magicians(magicians);
