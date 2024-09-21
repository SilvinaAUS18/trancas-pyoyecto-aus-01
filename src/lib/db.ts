
import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1/trancas-aus-2024-01";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB.trancas-aus-2024-01");
  } catch (error) {
    console.log(error);
  }
};
