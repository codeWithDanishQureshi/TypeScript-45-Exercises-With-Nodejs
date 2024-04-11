// Define the function  to show magicians names
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry poter", "Danish", "Rayyan"]

// call make_great function to modify magician names
 let great_magicians = make_great(magician_names);
  
 // Call show_magician that show modified list of magicians
show_magician(great_magicians);
