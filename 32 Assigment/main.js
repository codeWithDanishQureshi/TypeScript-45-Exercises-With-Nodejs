// Array of current users
var current_users = ["Usman", "ali", "Danish", "Zain", "osama"];
// Array of New users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Danish"];
// loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condiion for  user_name already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different messages uing if-Else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
