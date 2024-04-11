// Define a function with a rest parameter that accept items arugments representing our sandwish
function makeSandwich(...items: string[]){
    console.log("\n Making a sandwich with the following items: \n");

     items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich")
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chiken", "Cheese", "Mayo", "Chilli Sauces");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Chilli Sauces", "Egg", "Chicken", "Lettuce",);