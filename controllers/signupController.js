import { User } from "../data/mongodb.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "../functions/cloudinary.js";

const signupController = async (req, res) => {
  console.log("signupController!");
  try {
    const { fName, lName, email, password } = req.body;
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userKey = uuidv4();

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "avatars" },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Error uploading file" });
        }

        const newUser = new User({
          email,
          password: hashedPassword,
          fName,
          lName,
          userKey,
          avtar: result.secure_url,
        });

        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
      }
    );

    // End the upload stream
    uploadStream.end(file.buffer);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

export default signupController;
