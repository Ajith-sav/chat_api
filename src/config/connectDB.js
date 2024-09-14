import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://Ajith:Ajith001@cluster0.dutuh.mongodb.net/Chat-App");
    console.log("Connection success...".blue.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);    
  }
};

export default connectDB;
