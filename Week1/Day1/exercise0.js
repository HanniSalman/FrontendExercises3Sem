// Exercise 0.1
const arrName = ["Lars","Jan","Peter","Bo","Frederik","Ida"];
const subArrName = arrName.filter((name) => name.length <=3); // "filter()" metoden opretter et nyt array med det ønskede data. Ændrer ikke det originale array.
// callback til retunere en boolean, der skal være true. Når det kommer til "filter()" metoden.  

console.log("Original Array:")
arrName.forEach(name => console.log(name));
console.log("");

console.log("New Array:")
subArrName.forEach(name => console.log(name));
console.log("");

// Exercise 0.2
const uppercaseArr = arrName.map((name) => name.toUpperCase()); // "map()" metoden er tilgængelig på arrays. Kører over hvert element og anvender callback på hvert element.
// arrow function'en bruges som callback for "map()" metoden. Retunere et object  
console.log(uppercaseArr);

// Exercise 0.3
const namesArray = ["Lars", "Peter", "Jan", "Ian"];
const htmlList = generateHTMLList(namesArray);

function generateHTMLList(names) {
    const listItems = names.map(name => `<li>${name}</li>`);
    const htmlString = `<ul>${listItems.join("")}</ul>`;
    return htmlString;
}
console.log(htmlList);
console.log("");

// Exercise 0.4
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  // Exercise 0.4.1
  console.log("Cars newer than 1999:");
  const newCar = cars.filter((car) => car.year > 1999);  
  console.log(newCar);

  console.log("All Volvo's:");
  let modelCar = cars.filter((car) => car.make === 'Volvo');
  console.log(modelCar);

  console.log("All cars with a price below 5000:");
  let priceCar = cars.filter((car) => car.price < 5000);
  console.log(priceCar);

  //Exercose 0.4.2
  console.log("SQL into String");
  const sqlStatement = sqlQuery(cars);

  function sqlQuery(cars) {
    const query = cars.map(car => {
        return `INSERT INTO cars (id,year,make,model,price) VALUES (${car.id}, ${car.year}, '${car.make}','${car.model}', ${car.price});`;
    });

    const sql = query.join("\n");
    return sql;
  }
  //console.log(sqlStatement);


  //EKSTRA TIL REVIEW
  // "reduce()" metoden. 

  const numbers = [182, 40, 42];
  const reduceNumber = numbers.reduce(substractNumbers);
  
  function substractNumbers(total, nextNumber) {
    return total - nextNumber;
  }

  console.log(reduceNumber);

  