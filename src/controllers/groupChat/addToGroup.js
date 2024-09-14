import Chat from "../../models/chatModel.js";

const addToGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  const added =await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!added) {
    return res.status(404).json({ message: "Chat Not Found" });
  } else {
    return res.status(200).json(added);
  }
};

export default addToGroup
