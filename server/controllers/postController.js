import PostModel from "../models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
import fs from "fs-extra";
import dotenv from "dotenv";

dotenv.config();

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    if (post.image) {
      fs.unlink("public/images/" + post.image);
    }
    await post.updateOne({ $set: req.body });
    res.status(200).json("Post Updated");
  } catch {
    res.status(500).json(req.body);
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    if (post.info) {
      if (post.image) {
        await post.deleteOne();
        fs.unlink("public/images/" + post.image);
        res.status(200).json("Post deleted.");
      } else {
        await post.deleteOne();
        res.status(200).json("Post deleted.");
      }
    } else {
      res.status(403).json({ message: user });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const commentPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    await post.updateOne({ $push: { comments: req.data } });
    res.status(200).json("Comment Added");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });

    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
