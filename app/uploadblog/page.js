"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

export default function UploadBlogPage() {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form submission function
  const onSubmit = async (data) => {
    if (!image) {
      toast.error("Please select an image to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("slug", data.slug);
    formData.append("author", data.author);
    formData.append("content", data.content);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:4000/api/blogs", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Blog uploaded successfully!");
        reset();
        setImage(null);
      } else {
        toast.error("Failed to upload blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error uploading blog.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-9 p-6 shadow-md rounded-lg">
      <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Toaster only in this page */}
      
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" placeholder="Title" {...register("title", { required: true })} className="w-full p-2 border rounded" />
        <textarea placeholder="Short Description" {...register("description", { required: true })} className="w-full p-2 border rounded"></textarea>
        <input type="text" placeholder="Slug (e.g., my-first-blog)" {...register("slug", { required: true })} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Author Name" {...register("author", { required: true })} className="w-full p-2 border rounded" />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full p-2 border rounded cursor-pointer" />
        {image && <p className="text-sm text-gray-600 mt-1">Selected: {image.name}</p>}
        <textarea placeholder="Write your blog content here..." {...register("content", { required: true })} className="w-full p-2 border rounded h-40"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400" disabled={loading}>
          {loading ? "Uploading..." : "Upload Blog"}
        </button>
      </form>
    </div>
  );
}
