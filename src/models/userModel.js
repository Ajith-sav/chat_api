import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
