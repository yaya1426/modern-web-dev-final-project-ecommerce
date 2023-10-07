import jwt from "jsonwebtoken";
import User from "../types/user";

const generateJwt = (payload: Partial<User>) => {
  return jwt.sign(payload, process.env.SECRET_KEY || "123", {
    expiresIn: "24h",
  });
};

export default generateJwt;
