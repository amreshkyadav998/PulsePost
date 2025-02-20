"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

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
    <div className="min-h-screen flex items-center justify-center">
      {/* Toast Container for this page only */}
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <input type="text" placeholder="Username" className="w-full p-2 border mb-2"
          value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-2 border mb-2"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 border mb-2"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
