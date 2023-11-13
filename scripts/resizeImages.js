import sharp from "sharp";
import { promises as fsPromises } from "fs";
const { readdir, readFile } = fsPromises;
import path from "path";

const redimensionarYConvertirAWebp = async (entrada, salida) => {
  try {
    // Leer la imagen de la ruta de entrada
    const buffer = await readFile(entrada);

    // Redimensionar y convertir a formato webp
    await sharp(buffer)
      .resize({
        width: 400,
        height: 400,
        fit: sharp.fit.fill, // Opciones: cover, contain, fill, inside, outside
        withoutEnlargement: false, // Permite agrandar la imagen si es necesario
      })
      .toFormat("webp")
      .toFile(salida);

    console.log("Imagen redimensionada y convertida exitosamente.");
  } catch (error) {
    console.error("Error al redimensionar y convertir la imagen:", error);
  }
};

const carpetaEntrada = "../uploads";
const carpetaSalida = "../uploads";

async function procesarImagenesEnCarpeta(entrada, salida) {
  try {
    // Leer el contenido de la carpeta
    const archivos = await readdir(entrada);

    // Filtrar solo los archivos con extensiones de imagen (puedes ajustar según tus necesidades)
    const imagenes = archivos.filter((archivo) =>
      /\.(jpg|jpeg|png)$/i.test(path.extname(archivo))
    );

    // Procesar cada imagen
    await Promise.all(
      imagenes.map(async (imagen) => {
        const rutaImagenEntrada = path.join(entrada, imagen);
        const nombreSalida =
          path.basename(imagen, path.extname(imagen)) + ".webp";
        const rutaImagenSalida = path.join(salida, nombreSalida);

        await redimensionarYConvertirAWebp(rutaImagenEntrada, rutaImagenSalida);
      })
    );

    console.log("Procesamiento de imágenes completado.");
  } catch (error) {
    console.error("Error al procesar imágenes:", error);
  }
}

procesarImagenesEnCarpeta(carpetaEntrada, carpetaSalida);
