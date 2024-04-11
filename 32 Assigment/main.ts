 // Array of current users
let current_users = ["Usman", "ali", "Danish", "Zain", "osama"]

// Array of New users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Danish"]

// loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
 
 // Making a condiion for  user_name already exist and save in our_condition variable
    let our_condition = current_users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

 // print Different messages uing if-Else statments
if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
} else{
    console.log(`This username ${new_one_user} is available.`)
 }
  })