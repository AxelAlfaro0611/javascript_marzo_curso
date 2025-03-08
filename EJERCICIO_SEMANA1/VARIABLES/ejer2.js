let num1 = parseInt(prompt("Por favor ingresa el número 1: "));
let num2 = parseInt(prompt("Por favor ingresa el número 2: "));
let text = "Hola bienvenidos, este es mi primer proyecto en javascript"
let sum = num1 + num2;

let altura = 15.6;
let peso = 17.2;
let sum2 = altura + peso;
console.log(sum2);

let ver = true;
let fal = false;

let modulo = num1 % num2;
console.log(modulo);

console.log(text);
console.log(num1);
console.log(num2);
console.log("La suma es: " +sum);

//----------------------------------------------------------------------------------------

// Usar el modulo readline para ejecutarlo en la terminal de node

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log("Hola bienvenidos, este es mi primer proyecto en JavaScript");

// rl.question("Por favor ingresa el número 1: ", (num1) => {
//     rl.question("Por favor ingresa el número 2: ", (num2) => {
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
        
//         let sum = num1 + num2;
//         console.log("La suma es: " + sum);
        
//         let altura = 15.6;
//         let peso = 17.2;
//         let sum2 = altura + peso;
//         console.log("La suma de altura y peso es: " + sum2);
        
//         let modulo = num1 % num2;
//         console.log("El módulo es: " + modulo);
        
//         console.log("Número 1: " + num1);
//         console.log("Número 2: " + num2);
        
//         rl.close();
//     });
// });