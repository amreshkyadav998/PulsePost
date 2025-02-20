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
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black transition-colors px-4">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Three.js Background */}
      <ThreeBackground />

      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full"
      >
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Login
        </h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <input 
            type="email" placeholder="Email"
            className="w-full p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={email} onChange={(e) => setEmail(e.target.value)} required 
          />
          <input 
            type="password" placeholder="Password"
            className="w-full p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={password} onChange={(e) => setPassword(e.target.value)} required 
          />
        </div>

        {/* Login Button */}
        <button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg mt-5 transition-all"
        >
          Login
        </button>

        {/* Alternative Login Methods */}
        <div className="text-center text-gray-600 dark:text-gray-400 my-4">or</div>

        <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg dark:border-gray-600 dark:text-white">
          <span>🔵</span> Continue with Facebook
        </button>

        <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-lg mt-2 dark:border-gray-600 dark:text-white">
          <span>🔴</span> Continue with Google
        </button>
      </form>
    </div>
  );
}
