import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const baseGrey = "bg-gray-200";
  const hoverBlue = "hover:bg-blue-600";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-[#1F2937]">
          3D Marketplace
        </Link>

        <div className="flex items-center space-x-4">
          <nav className="flex space-x-2">
            {isHome && (
              <>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`${baseGrey} px-4 py-2 rounded transition ${hoverBlue} text-gray-800`}
                >
                  About
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("models")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`${baseGrey} px-4 py-2 rounded transition ${hoverBlue} text-gray-800`}
                >
                  3D Models
                </button>
              </>
            )}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${baseGrey} px-4 py-2 rounded transition ${hoverBlue} text-gray-800`}
            >
              Contact
            </button>
          </nav>

          <button
            className={`${baseGrey} p-2 rounded-full transition ${hoverBlue}`}
          >
            <User className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
}
