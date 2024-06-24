import { User } from "../data/mongodb.js";
import { v4 as uuidv4 } from "uuid"; // unique id creator

const changeKeyController = async (req, res) => {
  const { userKey } = req.params;
  console.log(userKey);
  if (!userKey) {
    return res.status(400).json({ message: "User Key is required." });
  }

  try {
    const user = await User.findOne({ userKey });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newKey = uuidv4(); // creating a new userKey
    user.userKey = newKey;
    await user.save();

    // Fetch the updated user with the new key
    const updatedUser = await User.findOne({ userKey: newKey });

    res.json({ message: "UserKey Successfully Changed!", data: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default changeKeyController;
