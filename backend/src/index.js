import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
