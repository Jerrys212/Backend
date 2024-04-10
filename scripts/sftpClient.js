import { readFileSync } from "fs";
import { basename } from "path";
import SftpClient from "ssh2-sftp-client";
import dotenv from "dotenv";

dotenv.config();
export async function enviarImagenPorSftp(imagenPath, serverInfo) {
    const { host, port, username, password, remotePath } = serverInfo;
    const sftp = new SftpClient();

    try {
        // Conectar al servidor SFTP
        await sftp.connect({
            host,
            port,
            username,
            password,
        });

        // Leer el archivo de la imagen
        const imagenBuffer = readFileSync(imagenPath);

        // Obtener el nombre del archivo de la imagen
        const imagenFilename = basename(imagenPath);

        // Subir la imagen al servidor remoto
        await sftp.put(imagenBuffer, `${remotePath}/${imagenFilename}`);

        console.log(`La imagen '${imagenFilename}' se ha enviado correctamente a ${host} en ${remotePath}`);
    } catch (error) {
        console.error(`Error al enviar la imagen: ${error.message}`);
    } finally {
        // Cerrar la conexión SFTP
        await sftp.end();
    }
}

const serverInfo = {
    host: process.env.SFTPhost,
    port: process.env.SFTPport,
    username: process.env.SFTPusername,
    password: process.env.SFTPpassword,
    remotePath: process.env.SFTPremotePath,
};

console.log({ serverInfo });
enviarImagenPorSftp("../uploads/crepas-dulces.jpg", serverInfo);
