import React from "react";
import { GrInstagram } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css"

function Footer() {
  return (
    <div className="bg-black text-slate-500 dark:bg-white transition-colors duration-500 dark:text-bl dark:text-black shadow-[inset_-12px_-8px_40px_rgba(8,_112,_184,_0.7)] px-4 py-6 dark:shadow-[inset_-12px_-8px_40px_rgba(8,_112,_184,_0.7)]  text-center">


      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 5 }}
        transition={{ type: "spring", stiffness: 15 }}
      >
        <h1 className="text-4xl font-semibold mb-6 bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block">
          Let's Connect
        </h1>
        <div className="mt-5 text-3xl flex justify-center gap-8">
          <div className="p-4 rounded-full transition-all transform  hover:scale-110 hover:shadow-xl hover:bg-[#e1306c] hover:text-white insta">
            <Link to="https://www.instagram.com/6247.ajay?igsh=ZWtrbW9uZDJnNjU1&utm_source=qr">
              <GrInstagram />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-[#000000] hover:text-white insta">
            <Link to="https://vercel.com/ajays-projects-3da46128">
              <SiVercel />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-[#0077b5] hover:text-white insta">
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin />
            </Link>
          </div>
          <div className="p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-xl hover:bg-[#171515] hover:text-white insta">
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
