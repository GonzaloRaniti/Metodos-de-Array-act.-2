const pizzas = [
  {
    id: 1,
    nombre: "Gran Pizza",
    ingredientes: ["Mozzarella", "tomate", "Huevo Frito", "panceta"],
    precio: 550,
  },
  {
    id: 2,
    nombre: "Jamon y Morrones",
    ingredientes: ["Mozzarella", "jamon", "Morrnes"],
    precio: 700,
  },
  {
    id: 3,
    nombre: "Cuatro Quesos",
    ingredientes: ["Mozzarella", "Parmesano", "Queso Azul", "Provolone"],
    precio: 750,
  },
  {
    id: 4,
    nombre: "La Hawaiana",
    ingredientes: ["Mozzarella", "Anana", "Jamón", "Salsa de tomate extra"],
    precio: 800,
  },
  {
    id: 5,
    nombre: "Napolitana",
    ingredientes: ["Mozzarella", "tomate", "Ajo", "oregano"],
    precio: 600,
  },
];

// A

console.log("pizzas con ID impar");

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`La pizza ${pizza.nombre} tiene un ID impar (${pizza.id})`);
  }
});

// B

const pizzaBarata = pizzas.some((pizza) => pizza.precio < 600);

if (pizzaBarata) {
  console.log("Si! Hay al menos una pizza que cuesta menos de $600");
} else {
  console.log("No hay ninguna pizza que cueste menos de $600.");
}

// C

console.log("Listado de pizzas con su precios: ");
pizzas.forEach((pizza) => {
  console.log(` La pizza ${pizza.nombre} cuesta $ ${pizza.precio}`);
});

// D

console.log("Ingredientes de cada pizza:");

pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);

  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`${ingrediente}`);
  });
});
