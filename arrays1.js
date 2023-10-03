let myArray = ["Pizza", "Hamburguesa", "Pasta"];

myArray[0] = "Sushi";
myArray[2] = "Sopa de Frijoles";

console.log(myArray);

myArray.unshift("Ensalada");

let arrayAsString = myArray.join("-");


console.log(myArray);

console.log(arrayAsString);

