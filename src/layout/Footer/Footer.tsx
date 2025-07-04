import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-cyan-50 mt-6 dark:bg-slate-900 boxShadow rounded-xl w-full p-6 md:p-9">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
          <Link
            to={"/"}
            className="text-[0.9rem] dark:text-[#abc2d3] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to={"/books"}
            className="text-[0.9rem] dark:text-[#abc2d3] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200"
          >
            All Books
          </Link>
          <Link
            to={"/create-book"}
            className="text-[0.9rem] dark:text-[#abc2d3] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200"
          >
            Add Books
          </Link>
          <Link
            to={"/borrow-summary"}
            className="text-[0.9rem] dark:text-[#abc2d3] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200"
          >
            Borrow Summary
          </Link>
        </div>

        <div className="flex items-center flex-wrap gap-[10px] text-[#424242]">
          <a
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
            href="https://www.facebook.com/anondo554.0"
          >
            <CgFacebook />
          </a>
          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
            href="https://github.com/Anondoraydev"
          >
            <BsGithub />
          </a>
          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
            href="https://www.linkedin.com/in/anondo554"
          >
            <BsLinkedin />
          </a>
        </div>

        <div className="border-t dark:border-slate-700 border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] dark:text-slate-500 sm:text-[0.9rem] text-gray-600 text-center">
            © 2025 Library Management System. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
