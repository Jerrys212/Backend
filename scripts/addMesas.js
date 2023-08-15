const mesas = [
  { mesa: "1", cantidadPersonas: "2", disponible: true },
  { mesa: "2", cantidadPersonas: "4", disponible: true },
  { mesa: "3", cantidadPersonas: "6", disponible: true },
  { mesa: "4", cantidadPersonas: "2", disponible: true },
  { mesa: "5", cantidadPersonas: "4", disponible: true },
  { mesa: "6", cantidadPersonas: "6", disponible: true },
  { mesa: "7", cantidadPersonas: "2", disponible: true },
  { mesa: "8", cantidadPersonas: "4", disponible: true },
];

const url = "http://localhost:4500/pos/nuevaMesa";

mesas.forEach((mesa) => {
  axios
    .post(url, mesa)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
});
