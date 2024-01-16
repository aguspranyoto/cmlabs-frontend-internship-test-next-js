import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mealapp",
  description: "Cmlabs Frontend Internship Test With Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto px-6 sm:px-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
