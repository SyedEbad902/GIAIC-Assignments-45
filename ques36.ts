// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

const makeShirt = (
  size: string = "large",
  message: string = "I love TypeScript"
): void => {
  console.log(
    `A ${size} T-shirt will be printed with the message: '${message}'.`
  );
};

makeShirt();

makeShirt("medium");

makeShirt("large", "Hello, World!");

makeShirt("small", "This is a small shirt.");
