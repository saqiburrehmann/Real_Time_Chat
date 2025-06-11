import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connect to mongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDb connection Error`, error);
  }
};
