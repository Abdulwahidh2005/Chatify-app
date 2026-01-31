import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env first

export const connectDB = async () => {
  try {
    const  { MONGO_URL } = process.env;
    if(!MONGO_URL)  throw new Error("MONGO_URL IS NOT SET")

    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // stop app if DB fails
  }
};
