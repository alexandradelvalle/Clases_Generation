// Creación de arrays
let nombreEjemplo = "Ana"; //variable con un valor
let nombres = ["Ana", "Pepito", "Pepita"]; //array: una variable, varios valores
console.log(nombres)

//ejemplo
const inventario = ["Espada", "Poción", "Mapa"];
//posición en índice:   0        1         2

console.log(inventario);
console.log(inventario[0]);
console.log(inventario[2]);
console.log(inventario[3]);
console.log(inventario.length);

//papás arrays -> nació el hijo inventario
// acaba de heredar muchas cosas cool (después del punto)
// cosas que heredó y puede hacer "push", "pop"

// push: agregar elementos al final del array
inventario.push("Llave");
console.log(inventario);

// pop: eliminar elementos al final del array
inventario.pop();
console.log(inventario);

inventario[1] = "Escudo";
console.log(inventario);

console.log(inventario[10]);



//ejemplo de variables undefined y null
let nombre; 
console.log(nombre);

let nombre1 = null;
console.log(nombre1);
