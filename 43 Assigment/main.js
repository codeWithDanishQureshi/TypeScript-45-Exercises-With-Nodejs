// Define the function  to show magicians names
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry poter", "Danish", "Rayyan"];
// Making a copy of Orignal array through .Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays original and Copied
// Original
console.log("Original Array\n");
show_magician(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);
