import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111827] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-[#F5F5F5]">
          Vitali Portfolio
        </Link>
        <nav className="space-x-4">
          <button
            onClick={() =>
              document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Welcome
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Projects
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 rounded bg-gray-700 hover:bg-blue-500 transition"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
