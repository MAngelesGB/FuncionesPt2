//Se crea una funcion con la estructura convencional
function greet()
{
    console.log('Hello'); 
}
//Se manda a llamar en una arrow function
let logGreeting = (miParametro) => miParametro();
logGreeting(greet); 

//Se requiere una funcion como parametro
logGreeting2 = (miParametro) => miParametro(); 
logGreeting(function(){ //Se crea una funcion dentro del mismo parentesis. Funciones creadas al vuelo
    console.log('Hello from function created on the fly'); 
})

//Interpolación de string "clasica"

let logGreeting3 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor); 
}
logGreeting3("Carlos", "azul"); 

//Interpolacion de strings
let color = "rojo"; 
let talla = "M"; 
let modelo = "Clasico"; 
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`); 
//Interpolacion 
console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo); 

//Se hace referencia al documento greet
require('./greet'); 