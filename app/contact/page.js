"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We have received your message.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-gray-900 text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="w-full max-w-4xl bg-gray-800 p-8 sm:p-10 md:p-12 lg:p-16 rounded-2xl shadow-xl">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 sm:text-4xl">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">
          Have any questions or want to work together? Drop a message!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm sm:text-base">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm sm:text-base">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300 shadow-md"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5 mt-6">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl sm:text-3xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition text-2xl sm:text-3xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl sm:text-3xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl sm:text-3xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition text-2xl sm:text-3xl">
            <FaGithub />
          </a>
        </div>

        {/* Address & Contact Info */}
        <div className="text-center text-gray-400 mt-6 text-sm sm:text-base">
          <p>📍 123 Street, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@yourdomain.com</p>
        </div>
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const BlogUploadForm = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "your_upload_preset");

//     const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     return data.secure_url;
//   };

//   const onSubmit = async (formData) => {
//     setLoading(true);
//     let imageUrl = "";

//     if (image) {
//       imageUrl = await uploadImage(image);
//     }

//     const blogData = {
//       title: formData.title,
//       content: formData.content,
//       image: imageUrl,
//     };

//     const res = await fetch("/api/blogs", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(blogData),
//     });

//     if (res.ok) {
//       alert("Blog uploaded successfully!");
//       reset();
//       setImage(null);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Upload Your Blog</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <input type="text" {...register("title", { required: true })} placeholder="Title" className="w-full p-2 border rounded" />
//         <textarea {...register("content", { required: true })} placeholder="Blog Content" className="w-full p-2 border rounded h-40"></textarea>
//         <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full" />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
//           {loading ? "Uploading..." : "Submit Blog"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogUploadForm;

