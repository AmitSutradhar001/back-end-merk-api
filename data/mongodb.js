import mongoose from "mongoose";
import userSchema from "./user.schema.js";
import "dotenv/config";

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
try {
  mongoose
    .connect(
      `mongodb+srv://amitsutradhar5075:${MONGODB_PASSWORD}@cluster0.6monkfr.mongodb.net/jokeapi?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("DataBase Connected!"));
} catch (error) {
  console.log(error.massage);
}

export const User = mongoose.model("User", userSchema);
