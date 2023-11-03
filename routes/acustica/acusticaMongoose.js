import mongoose from "mongoose";

try {
  mongoose.connect(
    "mongodb+srv://jerry:root@cluster0.pqjfph1.mongodb.net/acustica?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Mongo conectado en Acustica");
} catch (error) {
  console.log(error.message);
  process.exit(1);
}

export default mongoose;
