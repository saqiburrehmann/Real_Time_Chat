import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import authRoute from "./routes/authRoute.js";
import { connectDB } from "./lib/db.js";

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
