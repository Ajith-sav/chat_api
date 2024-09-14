import { Router } from "express";
import product from "../middleware/authMiddleware.js";
import accessChat from "../controllers/chat/accessChat.js";
import fetchChats from "../controllers/chat/fetchChats.js";
import createGroupChat from "../controllers/groupChat/createGroupChat.js";
import renameGroup from "../controllers/groupChat/renameGroup.js";
import addToGroup from "../controllers/groupChat/addToGroup.js";
import removeFromGroup from "../controllers/groupChat/removeFromGroup.js";

const router = Router();

router.post("/", product, accessChat);
router.get("/", product, fetchChats);
router.post("/group", product, createGroupChat);
router.put("/rename", product, renameGroup);
router.put("/groupadd", product, addToGroup);
router.put("/groupremove", product, removeFromGroup);

export default router;
