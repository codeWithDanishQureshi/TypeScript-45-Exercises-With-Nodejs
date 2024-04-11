// Making a Function 
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
  console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by defualt values
make_shirt();

// calling a function now with Medium size and defult message
make_shirt("Medium")

// Calling a function now with Small size and also different message
make_shirt("Small", "I Love Javascript")