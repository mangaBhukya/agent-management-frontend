"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Create Agent", path: "/createAgent" },
  { name: "View Agents", path: "/agents" },
  { name: "View Tasks", path: "/tasks" },
  { name: "Upload CSV", path: "/upload" },
];

const HomePage: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center">
      
      <nav className="bg-gray-900 text-white w-full py-4 mb-8">
        <div className="container mx-auto flex justify-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span
                className={`cursor-pointer px-4 py-2 rounded-lg ${
                  pathname === link.path ? "bg-gray-700" : "hover:bg-gray-600"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <h1 className="text-4xl font-bold text-center">Welcome to Agent Management</h1>
      <p className="text-center mt-4">Select an option from the navigation bar to get started.</p>
    </div>
  );
};

export default HomePage;