import User from "../../models/userModel.js";
import { generateToken } from "../../utils/tokens.js";

const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email:email });
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    } 
    const isMatched = await user.matchPassword(password)
    if(!isMatched) {
      return res.status(404).json({ message: "Invalid credentials." });
    }
    const token = generateToken(user._id);
    return res.status(200).json({ token: `${token}` });
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export default authUser