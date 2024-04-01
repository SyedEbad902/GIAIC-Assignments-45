
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magicians : string[] = ["Singer1", "Singer2", "Singer3"];

const show_magicians = (magiciansName: string[])=>{ 
    magiciansName.forEach(mag => {
console.log(mag);

       
    });
    
}
const make_great = (magician) => { 
     for (let i = 0; i < magician.length; i++) {
        magician[i] += " the Great";
    } 
}
make_great(magicians)
console.log("Great added");

show_magicians(magicians);

