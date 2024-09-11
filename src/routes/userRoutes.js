import { Router } from "express";
import registerUser from "../controllers/user/userRegister.js";
import authUser from "../controllers/user/userLogin.js";

const router = Router()

 router.route('/').post(registerUser)
 router.post('/login', authUser)

export default router;