import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessagesById, sendMessage,getChatPartners } from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);
router.get("/contacts", protectRoute, getUsersForSidebar);
router.get("/chats",protectRoute,getChatPartners);
router.get("/:id", protectRoute, getMessagesById);
router.post("/send/:id", protectRoute, sendMessage);

export default router;