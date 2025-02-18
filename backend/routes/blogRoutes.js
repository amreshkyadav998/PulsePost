import express from "express";
import Blog from "../models/Blog.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

const router = express.Router();

// Allowed file formats
const allowedFormats = ["png", "jpeg", "jpg", "svg", "webp", "avif", "gif"];

// Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const fileFormat = file.mimetype.split("/")[1]; // Extract format from MIME type

    // Ensure the file format is valid
    if (!allowedFormats.includes(fileFormat)) {
      throw new Error(
        "Invalid file format. Allowed formats are png, jpeg, jpg, svg, webp, avif, gif."
      );
    }

    return {
      folder: "PulsePostUpload", // Set the folder in Cloudinary
      format: fileFormat, // Dynamically set the format based on the file type
      public_id: Date.now() + "-" + file.originalname.replace(/\s+/g, "_"),
    };
  },
});

// Multer Middleware to handle file upload
const upload = multer({ storage });

// Create Blog with Image Upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, slug, author, content } = req.body;

    // Ensure required fields are present
    if (!title || !description || !slug || !author || !content) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Get Cloudinary URL from the uploaded file (if available)
    const imageUrl = req.file?.path || "";

    const newBlog = new Blog({
      title,
      description,
      slug, // Make sure slug is included here
      author,
      image: imageUrl,
      content,
      date: new Date().toISOString(),
    });

    // Save the blog to the database
    await newBlog.save();
    res.status(201).json({ success: true, blog: newBlog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs from the database
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE a blog post by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    await Blog.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await Blog.findOne({ slug }); // Assuming you're using MongoDB
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
