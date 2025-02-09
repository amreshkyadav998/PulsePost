import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  slug: String,
  date: String,
  author: String,
  image: String,
  content: String, // Store entire blog content
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
