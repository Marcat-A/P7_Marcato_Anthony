import express from "express";
import {
  commentPost,
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../controllers/postController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.put("/:id/comment", commentPost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
