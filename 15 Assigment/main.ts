let guestlist = ["Danish", "Rayyan", "Ahmed", "Ali"];

let dontCome = guestlist [0];

console.log(dontCome, "Nahi ah skta");

guestlist.splice(0, 1, "Shahzad Qureshi");

guestlist. forEach(guest => console.log(`Asalam-o-Alikum ${guest}, would you like dinner with me?`));
