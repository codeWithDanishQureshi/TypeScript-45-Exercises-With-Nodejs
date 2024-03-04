// Creating a Guest List Array
let guestList = ["Danish","Rayyan","Ahmed","Ali"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// print the name of guest who cant come
console.log(dontCome,"Nahii Ah Saktay han");

// Add or Remove  values from Guest List Array
guestList.splice(0, 1, "Shahzad Qureshi");

// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new value at starting index of array
guestList.unshift("M.Ali");

// Adding a new value at ending index of array
guestList.push("M.Azaan");

// Get a middel index of our guest list array
let middelIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middel index of array
guestList.splice(middelIndex, 0, "Owais Shah");

// print Meesage of Update list
console.log("Updated List of our Guests");

// Sending a invitation message to our guest one with thier names
guestList.forEach(oneguest => console.log(`Asalam-o-Alikum ${oneguest}, Would you like to dinner with me`));
