import User from "../../models/userModel.js";
import { generateToken } from "../../utils/tokens.js";

const registerUser = async (req, res) => {
  const { name, email, password, profilePic } = req.body;
  // console.log(name, email, password, "----");
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please enter all the feilds" });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists." });
    }
    const user = new User({
      name: name,
      email: email,
      password: password,
      profilePic: profilePic,
    });
    await user.save();

    if (user) {
      const token = generateToken(user._id);
      res.status(201).json({
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export default registerUser;
