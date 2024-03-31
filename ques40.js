// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magician = ["Singer1", "Singer2", "Singer3"];
var show_magicians = function (magiciansName) {
    magiciansName.forEach(function (mag) {
        console.log(mag);
    });
};
show_magicians(magician);
