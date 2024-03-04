// Creating a Guest List Array
var guestList = ["Danish", "Rayyan", "Ahmed", "Ali"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "Nahii Ah Saktay han");
// Add or Remove  values from Guest List Array
guestList.splice(0, 1, "Shahzad Qureshi");
// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("M.Ali");
// Adding a new value at ending index of array
guestList.push("M.Azaan");
// Get a middel index of our guest list array
var middelIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middel index of array
guestList.splice(middelIndex, 0, "Owais Shah");
// print Meesage of Update list
console.log("Updated List of our Guests");
// Sending a invitation message to our guest one with thier names
guestList.forEach(function (oneguest) { return console.log("Asalam-o-Alikum ".concat(oneguest, ", Would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the dinner table wont arrive on time, so I can invite two Guest dinner with me");
// using while.loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
//  sending a printing invitation to the last two guest on list  
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing  last two Guest from list 
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
