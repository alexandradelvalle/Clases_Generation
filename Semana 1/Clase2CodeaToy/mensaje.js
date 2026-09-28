// Escribir VARIABLES para mensajes predeterminados largos de diferentes formas:
const nombre = "Laura";
const ciudad = "Pasto";

//forma 1: con `${}`
const mensaje = `Hola, ${nombre}. Te conectas desde ${ciudad}.`;
console.log(mensaje);

const mensajePrueba = `Bienvenida, ${nombre}, espero que estés muy bien en ${ciudad}.`;
console.log(mensajePrueba);

//forma 2: concatenando con el signo +
const mensajeConcat = "Hola, " + nombre + ". Te conectas desde " + ciudad + ".";
console.log(mensajeConcat);

const mensajePruebaConcat = "Bienvenida, " + nombre + ", espero que estés muy bien en " + ciudad + ".";
console.log(mensajePruebaConcat);

// La misma idea de como se imprimía antes vs concatenando
console.log("Hola,", nombre);
console.log("Hola, " + nombre);

// Imprimiendo dos variables en un mismo mensaje con concatenar
const SUSTANTIVO = "Casa";
const ADJETIVO = "Azul";
console.log(SUSTANTIVO + " " + ADJETIVO);

// Imprimiendo operación de variable con número con `${}` y concatenación
const edad = 24
console.log(`Edad: ${edad} años (${edad*12} meses).`)
console.log("Edad actual vs en un año: " + edad + " años vs " + (edad+1) + " años.")
console.log("Edad actual vs edad anterior: " + edad + " años vs " + (edad-1) + " años.")
