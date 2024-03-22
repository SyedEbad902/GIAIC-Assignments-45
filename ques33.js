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
var pizzas = ["Cheesy Heaven", "Crispy Crust", "Slice & Spice"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var i = pizzas_1[_i];
    console.log(i);
}
console.log("______________________________________________________");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var i = pizzas_2[_a];
    console.log("I like ".concat(i, " pizza"));
}
console.log("______________________________________________________");
console.log(" How much I like pizza\n I enjoy ".concat(pizzas[0], " with its simplicity and fresh flavors.\n ").concat(pizzas[1], " pizza with its tangy sauce and savory toppings is also a favorite.\n And of course, who can resist a supreme pizza loaded with all the toppings?\n I really love trying new pizza flavors and sharing a delicious pie with friends and family."));
