"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UploadBlogPage() {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to upload image to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "PulsePostUpload"); // Replace with your Cloudinary upload preset

    const res = await fetch("https://api.cloudinary.com/v1_1/dqmq5wosl/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  // Form submission function
  const onSubmit = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    setLoading(true);

    // Upload image to Cloudinary
    const uploadedImageUrl = await uploadImage(image);
    setImageUrl(uploadedImageUrl);

    alert("Image uploaded successfully!");
    reset();
    setImage(null);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-9 p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Image</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded cursor-pointer"
          />
          {image && (
            <p className="text-sm text-gray-600 mt-1">
              Selected: {image.name}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      {imageUrl && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="mt-2 max-w-full h-auto rounded-lg shadow-md" />
          <p className="text-sm text-gray-600 break-all mt-2">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
