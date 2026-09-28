// Operaciones y bug
const puntos = "100";
const bonus = 10;

console.log(`Puntaje: ${puntos + bonus}`); //muestra 10010 ya que está concatenando string ("100") + number (10)

//verificar el tipo de dato
console.log(`Tipo de puntos: ${typeof puntos}`);
console.log(`Tipo de bonus: ${typeof bonus}`);

//para solucionarlo se usa la conversión explícita con la function Number
const total = Number(puntos) + bonus; //se convierte el string de puntos a number: "100" → 100 
console.log(`Puntaje: ${total}`);
