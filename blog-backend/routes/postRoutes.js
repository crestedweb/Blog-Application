import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// CREATE POST
router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// GET SINGLE POST
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

export default router;
