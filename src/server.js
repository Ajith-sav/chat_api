import express from "express";
import { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import color from "colors";

connectDB();
config();
const options = {
  origin: "http://localhost:3000",
};
const app = express();
app.use(express.json());
app.use(cors(options));

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`.blue.bold);
});
