import mongoose from "mongoose";

try {
  mongoose.connect(
    "mongodb+srv://jerry:root@cluster0.pqjfph1.mongodb.net/dulce?retryWrites=true&w=majority"
  );
  console.log("Mongo conectado en Contacto");
} catch (error) {
  console.log(error.message);
  process.exit(1);
}

export default mongoose;
