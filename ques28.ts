// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favFruits: string[] = ["apple", "banana", "peach"]
if (favFruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favFruits.includes("banana")) {
  console.log("You really like banana!");
}
if (favFruits.includes("berrys")) {
  console.log("You really like berrys!");
}
if (favFruits.includes("peach")) {
  console.log("You really like peach!");
}
if (favFruits.includes("pineapple")) {
  console.log("You really like pineapple!");
}

