import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ajith:Ajith-001@cluster0.lb2qnzl.mongodb.net/Chat-App");
    console.log("Connection success...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);    
  }
};

export default connectDB;
