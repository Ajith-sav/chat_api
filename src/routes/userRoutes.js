import { Router } from "express";
import registerUser from "../controllers/user/userRegister.js";
import authUser from "../controllers/user/userLogin.js";
import allUsers from "../controllers/user/allUsers.js";
import product from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").post(registerUser).get(product, allUsers)
router.post("/login", authUser);

export default router;
