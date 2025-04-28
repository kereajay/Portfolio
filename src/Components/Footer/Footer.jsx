import React from "react";
import { GrInstagram } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 dark:bg-gradient-to-r dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 text-white text-center py-12">
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 5 }}
        transition={{ type: "spring", stiffness: 15 }}
      >
        <h1 className="text-4xl font-semibold mb-6 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
          Let's Connect
        </h1>
        <div className="mt-5 text-3xl flex justify-center gap-8">
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-indigo-500 hover:text-white">
            <Link to="https://www.instagram.com/6247.ajay?igsh=ZWtrbW9uZDJnNjU1&utm_source=qr">
              <GrInstagram />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-green-500 hover:text-white">
            <Link to="https://vercel.com/ajays-projects-3da46128">
              <SiVercel />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-blue-700 hover:text-white">
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <Link to="https://github.com/kereajay">
              <FaSquareGithub />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
