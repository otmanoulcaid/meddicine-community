import { useState, useEffect } from "react";
import {
  Home,
  TrendingUp,
  MessageSquare,
  Compass,
  Grid,
  PlusCircle,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Import the Menu icon from lucide-react
export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <aside
        className={`
        bg-white shadow-md p-4 
        overflow-y-scroll pr-2
        
        ${
          isMobile
            ? `fixed top-16 bottom-0 w-64 z-50 transition-transform duration-300 ease-in-out
             ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`
            : "w-64 fixed top-16 bottom-0 hidden md:block"
        }
      `}
      >
        <nav className="space-y-4">
          <div>
            {[
              { name: "Home", icon: Home },
              { name: "Popular", icon: TrendingUp },
              { name: "Answers", icon: MessageSquare },
              { name: "Explore", icon: Compass },
              { name: "All", icon: Grid },
            ].map(({ name, icon: Icon }, key) => (
              <Link
                key={key}
                to={`/${name.toLowerCase()}`}
                className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon className="w-5 h-5 mr-3" />
                {name}
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Communities
            </h3>

            {[
              { name: "Create a community", icon: PlusCircle },
              { name: "Manage communities", icon: Settings },
            ].map(({ name, icon: Icon }, key) => (
              <Link
                key={key}
                to={`/${name.toLowerCase().replace(/ /g, "")}`}
                className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon className="w-5 h-5 mr-3" />
                {name}
              </Link>
            ))}

            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">
              Joined Communities
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                  M
                </span>
                r/medicine
                <span className="ml-auto text-gray-500 text-xs">
                  2.1M members
                </span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </li>
              <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <span className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                  N
                </span>
                r/ursing
                <span className="ml-auto text-gray-500 text-xs">
                  890K members
                </span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </li>
              <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                  P
                </span>
                r/pharmacy
                <span className="ml-auto text-gray-500 text-xs">
                  156K members
                </span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </li>
              <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                  M
                </span>
                r/mentalhealth
                <span className="ml-auto text-gray-500 text-xs">
                  1.2M members
                </span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </li>
              <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                  N
                </span>
                r/nutrition
                <span className="ml-auto text-gray-500 text-xs">
                  445K members
                </span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        className="fixed top-20 left-4 z-50 p-2 bg-white rounded-full shadow md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
    </>
  );
}
