import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-cyan-100 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-t-3xl shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center space-y-8">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
            L
          </div>
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 tracking-wider">
            Library System
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            All Books
          </Link>
          <Link
            to="/create-book"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            Borrow Summary
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/anondo554.0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow hover:scale-110 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-500"
          >
            <CgFacebook size={20} />
          </a>
          <a
            href="https://github.com/Anondoraydev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow hover:scale-110 hover:bg-gray-800 hover:text-white transition-all duration-500"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anondo554"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-400 shadow hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            <BsLinkedin size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-slate-600"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          © 2025{" "}
          <span className="font-semibold text-cyan-700 dark:text-cyan-400">
            Library System
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
