import jwt from "jsonwebtoken";
import { Miembros } from "../models/capicModel.js ";
const capicAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.miembro = await Miembros.findById(decoded.id).select(
        "-password -createdAt -updatedAt"
      );
      return next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ replyText: "Token No Existe" });
    }
  }
};

export default capicAuth;
