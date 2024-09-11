import User from "../../models/userModel.js";
import { generateToken } from "../../utils/tokens.js";

const registerUser = async (req, res) => {
  const { name, email, password, profilePic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error(" Please enter all the feilds");
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
      res
        .status(201)
        .json({
          _id: user._id,
          name: user.name,
          email: user.email,
          pic: user.profilePic,
          token: token,
        });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export default registerUser;
