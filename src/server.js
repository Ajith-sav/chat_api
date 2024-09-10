import express from "express";
import { config } from "dotenv";
import chats from "./data/data.js";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js"   
import color from 'colors'

connectDB();
config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello world.");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`.blue.bold);
});
