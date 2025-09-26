import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111827] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-[#F5F5F5]">
          Vitali Portfolio
        </Link>

        <nav className="hidden md:flex space-x-4">
          <button
            onClick={() => scrollToSection("welcome")}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Welcome
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Contact
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-100">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1F2937] px-6 py-4 space-y-2">
          <button
            onClick={() => scrollToSection("welcome")}
            className="block w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition text-gray-100"
          >
            Welcome
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition text-gray-100"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition text-gray-100"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
