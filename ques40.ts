// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician : string[] = ["Singer1", "Singer2", "Singer3"];

const show_magicians = (magiciansName: string[])=>{ 
    magiciansName.forEach(mag => {
        console.log(mag)
    });
}
show_magicians(magician);

