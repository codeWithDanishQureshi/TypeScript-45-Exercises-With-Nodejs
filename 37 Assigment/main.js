// Making a Function 
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a function with by defualt values
make_shirt();
// calling a function now with Medium size and defult message
make_shirt("Medium");
// Calling a function now with Small size and also different message
make_shirt("Small", "I Love Javascript");
