import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET;
export function setUser(user) {
  return jwt.sign({ _id: user._id }, secret, { expiresIn: "1h" });
}

export function getUser(token) {
  return jwt.verify(token, secret);
}
