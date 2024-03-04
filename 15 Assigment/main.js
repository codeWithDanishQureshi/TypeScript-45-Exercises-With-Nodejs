var guestlist = ["Danish", "Rayyan", "Ahmed", "Ali"];
var dontCome = guestlist[0];
console.log(dontCome, "Nahi ah skta");
guestlist.splice(0, 1, "Shahzad Qureshi");
guestlist.forEach(function (guest) { return console.log("Asalam-o-Alikum ".concat(guest, ", would you like dinner with me?")); });
