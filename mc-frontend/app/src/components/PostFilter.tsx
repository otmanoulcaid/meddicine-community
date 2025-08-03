import React, { useState } from "react";
import { Star, Sparkle, BarChart2, ArrowUp } from "lucide-react";

export default function PostFilter() {
  const [activeFilter, setActiveFilter] = useState("Best");

  const filters = [
    { name: "Best", icon: Star },
    { name: "Hot", icon: Sparkle },
    { name: "New", icon: ArrowUp },
    { name: "Top", icon: BarChart2 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-3 mb-4 flex items-center space-x-2">
      {filters.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => setActiveFilter(name)}
          className={`flex items-center px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200
            ${
              activeFilter === name
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          <Icon className="w-5 h-5 mr-3" />
          {name}
        </button>
      ))}
    </div>
  );
}
