import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoute from "./routes/authRoute.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
