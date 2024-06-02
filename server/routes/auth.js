import { Router } from "express";
import { registerLoginUser } from "../controllers/auth.js";

const router = Router();

router.post("/register-login", registerLoginUser);

export default router;
