// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
var makeShirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " T-shirt will be printed with the message: '").concat(message, "'."));
};
// Making a large shirt with the default message
makeShirt();
// Making a medium shirt with the default message
makeShirt("medium");
// Making a large shirt with a custom message
makeShirt("large", "Hello, World!");
// Making a small shirt with a custom message
makeShirt("small", "This is a small shirt.");
