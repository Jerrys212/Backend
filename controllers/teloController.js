import fs from "fs";

const obtenerInformacion = async (req, res) => {
    try {
        // Leer los datos anteriores (si existen)
        let datosAnteriores = [];
        try {
            const datosAnterioresString = fs.readFileSync("datos_recibidos.json", "utf8");
            datosAnteriores = JSON.parse(datosAnterioresString);
        } catch (error) {
            // No hacer nada si no hay datos anteriores o si ocurre un error al leer el archivo
        }

        // Guardar los nuevos datos junto con los anteriores
        const datosRecibidos = req.body; // Supongamos que los datos se reciben en el cuerpo de la solicitud
        const fechaActual = new Date();
        const datosConFecha = { ...datosRecibidos, fecha: fechaActual };
        const datosActualizados = [...datosAnteriores, datosConFecha];
        fs.writeFileSync("datos_recibidos.json", JSON.stringify(datosActualizados, null, 2));

        // Devolver los datos actualizados como respuesta
        return res.status(200).json({ message: "Datos guardados exitosamente", datos: datosActualizados });
    } catch (error) {
        return res.status(400).json({ message: "Error al guardar los datos", error: error.message });
    }
};

export { obtenerInformacion };
