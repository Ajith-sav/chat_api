import Chat from "../../models/chatModel.js";

const removeFromGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  const remove = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!remove) {
    return res.status(404).json({ message: "Chat Not Found" });
  } else {
    return res.status(200).json(remove);
  }
};

export default removeFromGroup
