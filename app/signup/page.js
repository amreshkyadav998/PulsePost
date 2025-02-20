"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";
import ThreeBackground from "../../components/ThreeBackground";

export default function SignupPage() {
  const { register } = useContext(AuthContext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      toast.success("Signup successful!", { duration: 2000 });

      // Redirect after 2 seconds
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors px-4">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Three.js Background */}
      <ThreeBackground />

      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full"
      >
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Sign Up
        </h2>
        
        {/* Input Fields */}
        <div className="space-y-4">
          <input 
            type="text" placeholder="Username"
            className="w-full p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={username} onChange={(e) => setUsername(e.target.value)} required 
          />
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

        {/* Signup Button */}
        <button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg mt-5 transition-all"
        >
          Sign Up
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
