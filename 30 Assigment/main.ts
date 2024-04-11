// Creating a Array
let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];

// Using ForEach Loop on array
userNames.forEach(oneUser =>{
     if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
     }else{
         console.log(`Hello ${oneUser},thank you for logging in again.`)
     }
})
