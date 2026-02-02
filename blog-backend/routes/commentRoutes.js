import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// ADD COMMENT
router.post("/", async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

// GET COMMENTS FOR A POST
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 });
  res.json(comments);
});

// DELETE COMMENT
router.delete("/:id", async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: "Comment removed" });
});

export default router;
