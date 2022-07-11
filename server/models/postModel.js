import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
    info: String,
    comments: [],
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
