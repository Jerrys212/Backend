import axios from "axios";

const productos = [
  {
    nombre: "Ensalada César",
    descripcion: "Lechuga, pollo a la parrilla, croutones y aderezo César.",
    precio: 8.99,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne de res, lechuga, tomate, cebolla y queso cheddar.",
    precio: 10.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    nombre: "Café Latte",
    descripcion:
      "Café expreso con leche vaporizada y una capa de espuma de leche.",
    precio: 3.99,
    categoria: "bebidas calientes",
    disponibilidad: true,
  },
  {
    nombre: "Limonada de Fresa",
    descripcion: "Refrescante limonada con jugo de fresa y hielo.",
    precio: 2.99,
    categoria: "bebidas frías",
    disponibilidad: true,
  },
  {
    nombre: "Empanadas de Queso",
    descripcion: "Empanadas rellenas de queso derretido.",
    precio: 6.99,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    nombre: "Hamburguesa BBQ",
    descripcion: "Carne de res, salsa BBQ, tocino y aros de cebolla.",
    precio: 12.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    nombre: "Capuchino",
    descripcion:
      "Café expreso con leche espumosa y un toque de chocolate rallado.",
    precio: 4.49,
    categoria: "bebidas calientes",
    disponibilidad: true,
  },
  {
    nombre: "Smoothie de Mango",
    descripcion: "Smoothie refrescante de mango y yogur.",
    precio: 3.49,
    categoria: "bebidas frías",
    disponibilidad: true,
  },
  {
    nombre: "Nachos",
    descripcion: "Nachos cubiertos de queso fundido, jalapeños y guacamole.",
    precio: 7.99,
    categoria: "entradas",
    disponibilidad: true,
  },
  {
    nombre: "Hamburguesa Vegetariana",
    descripcion: "Hamburguesa de lentejas, champiñones y vegetales.",
    precio: 9.99,
    categoria: "hamburguesas",
    disponibilidad: true,
  },
  {
    nombre: "Expreso Doble",
    descripcion: "Café expreso doble con un toque de crema.",
    precio: 3.99,
    categoria: "bebidas calientes",
    disponibilidad: true,
  },
];

productos.forEach((producto) => {
  axios
    .post("http://localhost:4500/pos/nuevoProducto", producto)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
});
