import Chat from "../../models/chatModel.js";
import User from "../../models/userModel.js";

const fetchChats = async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
            path:"latestMessage.sender",
            select: "name pic email"
        })
        res.status(200).send(result)
      });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

export default fetchChats;
