import { getUser } from "../auth/jwt.js";
import { User } from "../data/mongodb.js";

const currentUserController = async (req, res) => {
  console.log("current user!");
  const token = req.body.jwt;
  if (token) {
    try {
      const user = getUser(token);
      const _id = user._id;
      const currentUser = await User.findOne({ _id }).select("-password -_id");
      if (currentUser) {
        return res
          .status(200)
          .json({ message: "User is here!", data: currentUser });
      }
      return res.status(401).json({ message: "User is a fake one!" });
    } catch (error) {
      return res.status(400).json("Invalid cookie");
    }
  } else {
    return res.status(400).json("No cookie found");
  }
};
export default currentUserController;
