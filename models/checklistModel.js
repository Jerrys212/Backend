import mongoose from "../routes/checklist/checklistMongoose.js";
import checlistSchema from "../schemas/checklsitSchema.js";

const Checklist = mongoose.model(
  "Checklist",
  checlistSchema.checklist,
  "checklists"
);

export default Checklist;
