// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love

let pizzas = ["Cheesy Heaven", "Crispy Crust", "Slice & Spice"];
for (const i of pizzas) {
  console.log(i); 
}
console.log("______________________________________________________");

for (const i of pizzas) {
  console.log(`I like ${i} pizza`);
}
console.log("______________________________________________________");

console.log(` How much I like pizza
 I enjoy ${pizzas[0]} with its simplicity and fresh flavors.
 ${pizzas[1]} pizza with its tangy sauce and savory toppings is also a favorite.
 And of course, who can resist a supreme pizza loaded with all the toppings?
 I really love trying new pizza flavors and sharing a delicious pie with friends and family.`);
