
//1)
var nameArray = ["Lars", "Petter", "Frederik", "Bo", "Jan"]
console.log(nameArray.join(", "))

console.log("skriv ut navn med høyst tre bokstaver: ")
var filteredNameArray = nameArray.filter(x=>x.length<=3)
filteredNameArray.forEach(x=>console.log(x))
console.log("Eller på linje: ")
console.log(filteredNameArray.join(", "))

//2)
var allUpper = nameArray.map(function(x){ return x.toUpperCase(); });
console.log(allUpper.join(", "))
console.log("\n")

//3)
var html = '<ul>' + nameArray.map((x)=> '<li>' + x + '</li>') + '</ul>'
console.log(html)
console.log("\n")

var html2= nameArray.map((x)=>'<li>' + x + '</li>')
html2.unshift('<ul>')
html2.push('</ul>')
console.log(html2)
console.log(html2.join(""))
console.log("\n")

//4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
console.log("\n")

//4a)
console.log("Cars newer than 1999: ")
console.log(cars.filter(x => x.year > 1999))
console.log("\n")

console.log("Volvo: ")
console.log(cars.filter(x => x.make === 'Volvo'))
console.log("\n")

console.log("Costs less than 5000: ")
console.log(cars.filter(x => x.price < 5000))
console.log("\n")

//Sql
var sqlCars = cars.filter(x => x.year == 1997).map(x => "INSERT INTO cars (id,year,make,model,price) VALUES (" + x.id + "," + x.year + "," + x.make + "," + x.model + "," + x.price + ");")
console.log(sqlCars.join(""))

