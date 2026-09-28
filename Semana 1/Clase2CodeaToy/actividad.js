//Crea un carnét
const titulo = "CARNÉT GENERATION";
const nombre = "Alexandra Del Valle";
const ciudad = "Barranquilla";
const edad = 24;
const edadMeses = edad * 12;
const primerEmpleoTech = true;
const lenguajePorDominar = "JavaScript";

console.log("=========", titulo, "=========");
console.log("Nombre:", nombre);
console.log("Ciudad:", ciudad);
console.log(`Edad: ${edad} años (${edadMeses} meses)`);
console.log("Busca su primer empleo tech:", primerEmpleoTech);
console.log("Quiere dominar:", lenguajePorDominar);

console.log("====================================");

console.log("Tipos:" + " " + typeof nombre + ", " + typeof edad + ", " + typeof primerEmpleoTech);

console.log(" ");

const mensajeCumpleaños = "¡Feliz cumpleaños, " + nombre + "!";
const edadCumple = "Ahora tienes " + (edad + 1) + " años.";

console.log(mensajeCumpleaños);
console.log(edadCumple);

console.log(" ");

