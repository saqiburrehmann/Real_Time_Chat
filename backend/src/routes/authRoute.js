import express from "express";
import { login, logout, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup); //signup route
router.post("/login", login); //login route
router.post("/logout", logout); //logout route

export default router;