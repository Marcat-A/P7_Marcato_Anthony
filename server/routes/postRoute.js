import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimeLinePosts,
  likePost,
  updatePost,
} from "../controllers/postController";
const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeLine", getTimeLinePosts);

export default router;
