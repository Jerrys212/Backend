import axios from "axios";

const productos = [
  {
    id: "1",
    nombre: "Papas Fritas",
    descripcion: "Papas fritas crujientes con ketchup y mayonesa.",
    precio: 5.99,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    id: "2",
    nombre: "Queso Fundido",
    descripcion: "Queso fundido con chorizo y tortillas de maíz.",
    precio: 9.49,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    id: "3",
    nombre: "Alitas de Pollo",
    descripcion: "Alitas de pollo con salsa barbacoa y aderezo ranch.",
    precio: 8.99,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    id: "4",
    nombre: "Ensalada de Pollo",
    descripcion:
      "Lechuga, pollo a la parrilla, aguacate y aderezo de mostaza y miel.",
    precio: 12.99,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "5",
    nombre: "Ensalada César",
    descripcion: "Lechuga, pollo a la parrilla, croutones y aderezo César.",
    precio: 10,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "6",
    nombre: "Ensalada de Remolacha",
    descripcion: "Remolacha, espinacas, nueces y vinagreta de balsámico.",
    precio: 9.99,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "7",
    nombre: "Ensalada de Aguacate",
    descripcion:
      "Lechuga, aguacate, tomate, cebolla morada y aderezo de cilantro y limón.",
    precio: 10.99,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "8",
    nombre: "Ensalada Griega",
    descripcion:
      "Pepino, tomate, cebolla roja, aceitunas kalamata y queso feta.",
    precio: 9.49,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "9",
    nombre: "Ensalada de Espinacas",
    descripcion:
      "Espinacas, fresas, nueces, queso de cabra y vinagreta de frambuesa.",
    precio: 10.99,
    categoria: "ensaladas",
    disponibilidad: true,
  },
  {
    id: "10",
    nombre: "Hamburguesa Vegetariana",
    descripcion: "Hamburguesa de lentejas, champiñones y vegetales.",
    precio: 9.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    id: "11",
    nombre: "Hamburguesa de Pollo",
    descripcion: "Hamburguesa de pollo a la parrilla con lechuga y mayonesa.",
    precio: 8.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    id: "12",
    nombre: "Hamburguesa BBQ",
    descripcion:
      "Hamburguesa de carne con salsa BBQ, tocino y aros de cebolla.",
    precio: 12.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    id: "13",
    nombre: "Hamburguesa Hawaiana",
    descripcion:
      "Hamburguesa de carne con piña a la parrilla y salsa teriyaki.",
    precio: 11.49,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    id: "14",
    nombre: "Hamburguesa de Champiñones",
    descripcion:
      "Hamburguesa de carne con champiñones salteados y queso suizo.",
    precio: 10.49,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    id: "15",
    nombre: "Smoothie",
    descripcion: "Smoothie refrescante del sabor de tu eleccion.",
    precio: 3.49,
    categoria: "bebidasFrias",
    disponibilidad: true,
  },
  {
    id: "16",
    nombre: "Agua Fresca",
    descripcion: "Agua del sabor de tu eleccion natural y refrescante.",
    precio: 2.49,
    categoria: "bebidasFrias",
    disponibilidad: true,
  },
  {
    id: "17",
    nombre: "Refresco",
    descripcion: "Refresco del sabor de tu eleccion.",
    precio: 1.99,
    categoria: "bebidasFrias",
    disponibilidad: true,
  },
  {
    id: "18",
    nombre: "Capuchino",
    descripcion:
      "Café expreso con leche espumosa y un toque de chocolate rallado.",
    precio: 4.49,
    categoria: "bebidasCalientes",
    disponibilidad: true,
  },
  {
    id: "19",
    nombre: "Expreso Doble",
    descripcion: "Café expreso doble con un toque de crema.",
    precio: 3.99,
    categoria: "bebidasCalientes",
    disponibilidad: true,
  },
  {
    id: "20",
    nombre: "Chocolate Caliente",
    descripcion: "Chocolate caliente cremoso con malvaviscos.",
    precio: 4.49,
    categoria: "bebidasCalientes",
    disponibilidad: true,
  },
  {
    id: "21",
    nombre: "Pizza Hawaiana",
    descripcion: "Pizza con salsa de tomate, mozzarella, piña y jamón.",
    precio: 12.99,
    categoria: "pizzas",
    disponibilidad: true,
  },
  {
    id: "22",
    nombre: "Pizza de Pepperoni",
    descripcion:
      "Pizza con salsa de tomate, mozzarella y rodajas de pepperoni.",
    precio: 10.99,
    categoria: "pizzas",
    disponibilidad: true,
  },
  {
    id: "23",
    nombre: "Pizza Cuatro Quesos",
    descripcion:
      "Pizza con salsa de tomate, mozzarella, queso azul, queso de cabra y queso gouda.",
    precio: 13.49,
    categoria: "pizzas",
    disponibilidad: true,
  },
  {
    id: "24",
    nombre: "Pizza Vegetariana",
    descripcion:
      "Pizza con salsa de tomate, mozzarella y una variedad de vegetales frescos.",
    precio: 11.49,
    categoria: "pizzas",
    disponibilidad: true,
  },
  {
    id: "25",
    nombre: "Brownie con Helado",
    descripcion: "Brownie caliente con helado de chocolate.",
    precio: 5.99,
    categoria: "postres",
    disponibilidad: true,
  },
  {
    id: "26",
    nombre: "Frutas Frescas",
    descripcion: "Selección de frutas frescas de temporada.",
    precio: 4.99,
    categoria: "postres",
    disponibilidad: true,
  },
  {
    id: "27",
    nombre: "Cheesecake de Fresa",
    descripcion: "Cheesecake con base de galleta y cobertura de fresa.",
    precio: 6.49,
    categoria: "postres",
    disponibilidad: true,
  },
  {
    id: "28",
    nombre: "Helado de Vainilla",
    descripcion: "Helado cremoso de vainilla con toppings a elección.",
    precio: 4.49,
    categoria: "postres",
    disponibilidad: true,
  },
];

productos.forEach((producto) => {
  axios
    .post("http://localhost:4500/pos/nuevoProducto", producto)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  setTimeout(() => {}, 2000);
});
