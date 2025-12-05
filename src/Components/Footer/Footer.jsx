import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <section className="bg-background-light dark:bg-background-dark antialiased font-sans">
        <footer className="w-11/12 md:w-9/12 mx-auto py-12 text-center">
          <footer className="footer sm:footer-horizontal items-center p-4">
            <aside className="grid-flow-col items-center">
              <a href="#">
                <img src="/h-logo.png" alt="" className="h-11 w-11" />
              </a>
              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a
                className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                href="https://www.facebook.com/hamidur.800"
                target="_blank"
              >
                <FaFacebook className="text-blue-500 h-8 w-8" />
              </a>
              <a
                className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                href="https://github.com/hamidur800"
                target="_blank"
              >
                <FaGithub className="text-black h-8 w-8" />
              </a>
              <a
                className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                href="https://wa.me/8801650053800"
                target="_blank"
              >
                <IoLogoWhatsapp className="text-[#1daa61] h-8 w-8" />
              </a>
            </nav>
          </footer>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
