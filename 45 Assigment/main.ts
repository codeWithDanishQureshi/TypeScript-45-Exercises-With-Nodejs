// Define a function to create a car object with optional options...

function create_car(manufacturer, model, ...options){
  // initialize a car object with manufacturer and model
  let car = {
    manufacturer:manufacturer,
    model:model
  };

  // Add additional option to the car object
  options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });

  return car;

}

// call the function to create a car object

let my_car = create_car("Toyota", "Corrolla", "color: Black", "sunroof: True", "year: 2024" );

// print the value to ensure all the informaon is stored correctly in the car object
 console.log(my_car);