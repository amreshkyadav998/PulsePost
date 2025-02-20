"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";
import ThreeBackground from "../../components/ThreeBackground"; 

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!", { duration: 2000 });

      // Redirect after 2 seconds
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Three.js Background */}
      <ThreeBackground />

      <form onSubmit={handleSubmit} className="relative z-10 p-8 bg-white dark:bg-gray-800 shadow-xl rounded-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded mb-4"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">Login</button>
      </form>
    </div>
  );
}
