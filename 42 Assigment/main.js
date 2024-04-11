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
// call make_great function to modify magician names
var great_magicians = make_great(magician_names);
// Call show_magician that show modified list of magicians
show_magician(great_magicians);
