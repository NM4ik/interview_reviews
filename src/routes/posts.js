import express from "express";
// import { post } from "request";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const neededPost = await Post.findById(req.params.id);
    res.json(neededPost);
  } catch (e) {
    res.json({ message: e });
  }
});

/// this method delete all posts - why?
router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ id: req.params.id });
    res.json(removedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

export default router;
