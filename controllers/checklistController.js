import Checklist from "../models/checklistModel.js";

const get = async (req, res) => {
  try {
    const encontrar = await Checklist.find({});
    return res.status(200).json(encontrar);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { get };
