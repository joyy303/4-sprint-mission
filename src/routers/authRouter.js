import express from "express";
import { signup, login, refreshToken } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/refreshToken", refreshToken);

export default router;