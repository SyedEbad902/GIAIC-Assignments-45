// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        let greatMagician = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

let magicians: string[] = ["Singer1", "Singer2", "Singer3"];

let originalMagicians: string[] = [...magicians];

let greatMagicians: string[] = makeGreat(originalMagicians);

console.log("Original magicians:");
showMagicians(originalMagicians);

console.log("\nMagicians with 'the Great' added:");
showMagicians(greatMagicians);
