import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PulsePost",
  description: "It is a Blog app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem="false"
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
    </AuthProvider>
  );
}
