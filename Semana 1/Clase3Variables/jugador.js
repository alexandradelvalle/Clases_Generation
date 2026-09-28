//ejemplo objeto: jugador, clave: nombre, valor: Kira, todas son propiedades del objeto
const jugador = {
    nombre: "Kira",
    nivel: 3,
    vidas: 2,
    tieneLlave: false,
    companero: null,
    inventario: ["Espada", "Poción"],
};

console.log(jugador)

//Mostrar solo un campo (o propiedad) del objeto: jugador
console.log(jugador.nombre);
console.log(jugador.nivel);

//Actualizar propiedades del objeto. Se selecciona la propiedad para reescribirla en el objeto: jugador
jugador.tieneLlave = true;
jugador.vidas = jugador.vidas - 1;
jugador.monedas = 50;
console.log(jugador);

//Mostrar solo un elemento del array (según la posición del índice que comienza en 0)
console.log(jugador.inventario[0]); //inventario: ["Espada", "Poción"] → Según el índice: Espada está en 0 y Poción está en 1

//Agregar un elemento al array
jugador.inventario.push("Mapa");
console.log(jugador.inventario);

//Contar cantidad de elementos en array: Se usa .length
console.log(jugador.inventario.length)
console.log(`${jugador.nombre} tiene ${jugador.inventario.length} objetos`)

//Mostrar un elemento en específico del objeto
console.log(jugador.puntos); //Como no existe la propiedad "puntos", aparece undefined
console.log(jugador.companero); //Como se le asignó un valor vacío: null, aparece null
