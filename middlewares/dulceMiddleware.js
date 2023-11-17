import jwt from "jsonwebtoken";
import { Admin } from "../models/dulceModel.js";

const dulceAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select(
        "-password -createdAt -updatedAt -__v"
      );

      return next();
    } catch (error) {
      console.log(error);
      return res
        .status(403)
        .json({ replyCode: 403, replyText: "Token No Existe" });
    }
  }

  return res.status(403).json({ replyText: "Unathorized" });
};

export default dulceAuth;
