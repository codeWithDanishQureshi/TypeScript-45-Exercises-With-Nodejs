 let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "usman",]

 userNames =[]
 if(userNames.length === 0){
   console.log("Your Array in Empty We need to some users!")
 }else{
    // Using ForEach Loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
       console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})
 }

 