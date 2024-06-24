import { User } from "../data/mongodb.js"; // users from the db
import bcrypt from "bcryptjs"; // hashing
import { setUser } from "../auth/jwt.js"; // create token function


const loginController = async (req, res) => {
  console.log("loginController!");
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User is unauthorize!" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid username or password." });

    const currentUser = await User.findOne({ email }).select("-password -_id");

    const token = setUser(user._id);
    return res
      .status(200)
      .cookie("jwt", token, { sameSite: "None", secure: true }) // jwt is the cookie name and token is the value
      .json({ msg: "User Loged in Successfuly!", data: currentUser });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({ message: error.message });
  }
};

export default loginController;
