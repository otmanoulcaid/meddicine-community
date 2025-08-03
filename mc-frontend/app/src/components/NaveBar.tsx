import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { createIcons } from "lucide";
import { Edit, MessageCircle, Bell, Search } from "lucide-react";

export default function NaveBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between h-16">
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="flex items-center text-lg font-bold text-blue-600 rounded-md p-2 hover:bg-gray-100"
        >
          <img
            src="https://placehold.co/32x32/1e3a8a/ffffff?text=MC"
            alt="Logo"
            className="mr-2 rounded-full"
          />
          <span className="hidden sm:block">medicineCommunity </span>
        </a>

        <div className="relative w-48 sm:w-64 md:w-80">
          <input
            type="text"
            placeholder="Search Medicine Community"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400 ml-2" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MessageCircle className="w-5 h-5 text-gray-600" />
        </button>
        <Link to={"/createPost"} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700">
          <Edit className="w-5 h-5" />
          <span className="hidden sm:block">Create</span>
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <img
            src="https://placehold.co/32x32/d1d5db/000000?text=U"
            alt="User Avatar"
            className="rounded-full"
          />
        </button>
      </div>
    </nav>
  );
}
