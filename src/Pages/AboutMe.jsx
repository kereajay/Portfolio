import React, { useState } from "react";
import ajay from "../assets/Images/ajay.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../Data/Data";
import { Link } from "react-router-dom";
import { SiVercel } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import Projectcard from "./Projectcard";
import Resumelatest from "../assets/Ajay.pdf";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaPhoneAlt, FaArrowCircleDown } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import Javalogo from "../assets/Images/Java-Logo.png";
import Htmllogo from "../assets/Images/html.png";
import Csslogo from "../assets/Images/css.png";
import Jslogo from "../assets/Images/java-script.png";
import Reactlogo from "../assets/Images/react.png";
import Expresslogo from "../assets/Images/express-js.png";
import Gitlogo from "../assets/Images/git.png";
import Nodejslogo from "../assets/Images/Nodejs.png";
import MongoDBlogo from "../assets/Images/Mongodb.webp";
import Redislogo from "../assets/Images/redis.webp"
import Dockerlogo from "../assets/Images/docker.png"

function AboutMe() {
  const [copy, setCopy] = useState(false);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const handlephonecopy = () => {
    navigator.clipboard.writeText("6362877827");
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  const handlecopymail = () => {
    navigator.clipboard.writeText("kereajay578@gmail.com");
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  const handleResume = () => window.open(Resumelatest);

  return (
    <div className="bg-black dark:bg-white  text-white">

      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-10 px-8 py-24 items-center">
        
        {/* Profile */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
          className="flex flex-col items-center"
        >
          <img
            src={ajay}
            alt="Ajay"
            className="w-60 h-60 rounded-full shadow-xl border-4 border-gray-700"
          />

          {copy && <p className="text-indigo-400 mt-3">Copied!</p>}

          <div className="flex gap-6 mt-6 text-2xl text-gray-300">
            <FaPhoneAlt onClick={handlephonecopy} className="cursor-pointer hover:text-indigo-400 transition" />
            <IoMdMail onClick={handlecopymail} className="cursor-pointer hover:text-indigo-400 transition" />
            <Link to="https://www.instagram.com/6247.ajay">
              <GrInstagram className="hover:text-indigo-400 transition" />
            </Link>
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin className="hover:text-indigo-400 transition" />
            </Link>
            <Link to="https://github.com/kereajay">
              <FaSquareGithub className="hover:text-indigo-400 transition" />
            </Link>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
          className="flex flex-col gap-6"
        >
          <h5 className="text-sm uppercase tracking-widest text-gray-400">
            Full Stack Developer
          </h5>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <h4 className="text-2xl font-medium">Hello, it's Me</h4>
            <h1 className="text-4xl font-bold">Ajay Kere</h1>
          </div>

          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-500 leading-relaxed">
            Full-Stack Developer with 1.5 years of experience building scalable web applications using React.js, Node.js, and MongoDB. 
            Specialized in developing high-performance user interfaces, designing RESTful APIs, and optimizing applications using Redux Toolkit and Redis.
            Experienced in building cross-platform Android applications using React Native (Expo).
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Docker","Java","MySQL","ReactNative"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-800 rounded-full border border-gray-700 hover:bg-indigo-500 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          <button
            onClick={handleResume}
            className="flex items-center gap-2 text-lg font-medium bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition w-fit"
          >
            Download Resume <FaArrowCircleDown />
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-[80%] h-[1px] bg-gray-700 mx-auto"></div>

      {/* SKILLS */}
      <section className="py-16">
        <h1 className="text-3xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
          Technical Skills
        </h1>

        <div className="w-[100%] m-auto ">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={1000}
            transitionDuration={1000}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {[ 
              { img: Htmllogo, name: "HTML" },
              { img: Csslogo, name: "CSS" },
              { img: Jslogo, name: "JavaScript" },
              { img: Reactlogo, name: "React.js" },
              { img: Gitlogo, name: "Git/GitHub" },
              { img: Javalogo, name: "Java" },
              { img: Nodejslogo, name: "Node.js" },
              { img: MongoDBlogo, name: "MongoDB" },
              { img: Expresslogo, name: "Express.js" },
              { img: Redislogo, name: "Redis" },
              { img: Dockerlogo, name: "Docker" }
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center bg-slate-800  p-4 mr-2 rounded-full hover:scale-105 transition">
                <img src={skill.img} alt={skill.name} className="w-28 h-28 object-contain mb-2" />
                <p className="text-lg font-semibold text-gray-300">{skill.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16">
        <h1 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
          Projects
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-8">
          {data.map((item, index) => (
            <Projectcard
              key={index}
              imgurl={item.url}
              title={item.Title}
              gitrepo={item.gitrepo}
              hlink={item.link}
              description={item.description}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default AboutMe;