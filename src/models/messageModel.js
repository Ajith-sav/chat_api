import { Schema, model } from "mongoose";

const messageModel = Schema(
  {
    sneder: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);

const Message = model("Message", messageModel)

export default Message;