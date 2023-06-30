import mongoose from "../routes/checklist/checklistMongoose.js";

const checlistSchema = {
  checklist: new mongoose.Schema({
    folio: {
      type: String,
    },

    supervisor: {
      type: String,
      trim: true,
    },

    entrada: [Object],
    calificacion: {
      type: Number,
    },
  }),
};

export default checlistSchema;
