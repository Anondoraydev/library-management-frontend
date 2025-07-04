import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../../public/book logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            className="w-16 transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800 shadow-inner"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/create-book"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800 shadow-inner"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/borrow-summary"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800 shadow-inner"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            Borrow Summary
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-96 opacity-100 pt-3"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <NavLink
            to="/books"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/create-book"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/borrow-summary"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-100 text-cyan-800"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
              }`
            }
          >
            Borrow Summary
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
