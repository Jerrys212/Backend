import axios from "axios";

const productos = [
  {
    nombre: "Hawaiana",
    descripcion: "Queso machego con mozzarella, piña y jamón.",
    precio: 65,
    categoria: "crepas-saladas",
    disponibilidad: true,
  },
  {
    nombre: "Jamón",
    descripcion: "Queso philadelphia y jamón",
    precio: 55,
    categoria: "crepas-saladas",
    disponibilidad: true,
  },
  {
    nombre: "Plátano",
    descripcion: "Queso philadelphia, nutella y plátano.",
    precio: 45,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Durazno",
    descripcion: "Queso philadelphia y durazno.",
    precio: 45,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Fresa",
    descripcion: "Queso philadelphia, nutella y fresa.",
    precio: 50,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Fresa y Plátano",
    descripcion: "Queso philadelphia, nutella, fresa y plátano.",
    precio: 55,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Oreo y Helado",
    descripcion:
      "Queso philadelphia, mermelada, galleta oreo, y helado de vainilla.",
    precio: 50,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Dulce Atardecer",
    descripcion:
      "Queso philadelphia,mermelada de fresa, fresa, manzana, uva, durazno y plátano.",
    precio: 60,
    categoria: "waffles",
    disponibilidad: true,
  },
  {
    nombre: "Plátano",
    descripcion: "Queso philadelphia, nutella y plátano.",
    precio: 50,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Fresa",
    descripcion: "Queso philadelphia, nutella y fresa.",
    precio: 60,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Durazno",
    descripcion: "Queso philadelphia, nutella y durazno.",
    precio: 55,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Fresa y Plátano",
    descripcion: "Queso philadelphia, nutella, fresa y plátano.",
    precio: 65,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Fresa, Plátano y Helado",
    descripcion:
      "Queso philadelphia, nutella, plátano, fresa y helado de vainilla.",
    precio: 70,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Oreo y Helado",
    descripcion:
      "Queso philadelphia, mermelada, galleta oreo, y helado de vainilla.",
    precio: 65,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Oreo, Fresa y Helado",
    descripcion:
      "Queso philadelphia, nutella, galleta oreo, fresa y helado de vainilla.",
    precio: 70,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Oreo, Plátano y Helado",
    descripcion:
      "Queso philadelphia, nutella, galleta oreo, platano y helado de vainilla.",
    precio: 68,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
  {
    nombre: "Dulce Atardecer",
    descripcion:
      "Queso philadelphia,mermelada de fresa, fresa, manzana, uva, durazno y plátano.",
    precio: 72,
    categoria: "crepas-dulces",
    disponibilidad: true,
  },
];

function quitarCaracteresEspeciales(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

const productosConImagen = productos.map((producto) => {
  const nombreFormateado = quitarCaracteresEspeciales(producto.nombre);
  return {
    ...producto,
    imagen: `${nombreFormateado}.avif`,
  };
});

productosConImagen.forEach((producto) => {
  axios
    .post("http://localhost:4000/dulce/agregarProducto", producto)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  setTimeout(() => {}, 2000);
});
