/* 👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las Pizza que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

class Pizza {
  static lastID = 0;
  constructor(nombre, ingredientes, precio) {
    this.id = ++Pizza.lastID;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

listaDePizzzas = [
  new Pizza("Mozzarella", ["Salsa de tomate", "Mozzarella", "Aceitunas"], 520),
  new Pizza(
    "Napolitana",
    ["Salsa de tomate", "Mozzarella", "Tomate fresco", "Aceitunas"],
    550
  ),
  new Pizza(
    "Epecial",
    ["Salsa de tomate", "Jamón", "Mozzarella", "Morrón", "Aceitunas"],
    590
  ),
  new Pizza(
    "4 Queso",
    ["Mozzarella", "Parmesano", "Queso Azul", "Fontina", "Salsa de Tomate"],
    690
  ),
  new Pizza(
    "De Rúcula",
    [
      "Rúcula",
      "Jamón crudo",
      "Mozzarella",
      "Salsa de Tomate",
      "Aceitunas Negras",
    ],
    790
  ),
  new Pizza("De Ananá", ["Ananá", "Mozzarella", "Salsa de Tomate"], 890),
];

// a)  Las Pizza que tengan un id impar.

const idImpar = listaDePizzzas.filter((pizza) => pizza.id % 2 !== 0);

console.log("Las Pizzas con id Impar son: ");
idImpar.forEach((pizza) =>
  console.log(
    `La pizza %c${pizza.nombre} %ctiene un id de %c${pizza.id}`,
    "color: blue;",
    "color: white;",
    "color: red;"
  )
);

console.log(" ");

// b) ¿Hay alguna pizza que valga menos de $600?

const precioMenor600 = listaDePizzzas.filter((pizza) => pizza.precio <= 600);
console.log("Las Pizzas con el precio menor a 600 son: ");
precioMenor600.forEach((pizza) =>
  console.log(
    `%c${pizza.nombre} %ctiene un precio de %c${pizza.precio}`,
    "color: blue;",
    "color: white;",
    "color: red;"
  )
);
console.log(" ");

// c) Los nombres de todos las pizzas.
console.log("Los nombres de todas las pizzas son: ");
listaDePizzzas.forEach((pizza) => console.log(pizza.nombre));

console.log(" ");

// d) Los precios de las pizzas.
console.log("Los precios de todas las pizzas son: ");
listaDePizzzas.forEach((pizza) => console.log(pizza.precio));

console.log(" ");
// e) El nombre de cada pizza con su respectivo precio.
console.log("Las pizzas con sus respectivos precios son: ");
listaDePizzzas.forEach((pizza) =>
  console.log(
    `La ${pizza.nombre} tiene un precio de %c$ ${pizza.precio}`,
    "color: red;"
  )
);
