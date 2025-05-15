import React, { useState } from "react";
import ajay from "../assets/Images/ajay.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../Data/Data";
import { Link } from "react-router-dom";
// import { GrInstagram } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import Projectcard from "./Projectcard";
import Resumelatest from "../assets/Ajay.pdf";
import { GrInstagram } from "react-icons/gr";
// import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

function AboutMe() {
  const [copy, setCopy] = useState(false);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handlephonecopy = () => {
    navigator.clipboard.writeText("6362877827");
    setCopy(true);
    setTimeout(() => setCopy(false), 500);
  };

  const handlecopymail = () => {
    navigator.clipboard.writeText("kereajay578@gmail.com");
    setCopy(true);
    setTimeout(() => setCopy(false), 500);
  };

  const handleResume = () => window.open(Resumelatest);

  return (
    <div className="dark:bg-white bg-black text-white dark:text-black">
      <div className="grid lg:grid-cols-2 gap-10 px-8 py-24">
        {/* Profile & Social */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 15 }}
          className="flex flex-col items-center"
        >
          <img
            src={ajay}
            alt="Ajay"
            className="w-60 h-60 rounded-full shadow-lg"
          />
          {copy && <h1 className="text-blue-600 mt-3">Copied</h1>}
          <div className="flex gap-6 mt-4 text-2xl text-blue-600">
            <FaPhoneAlt onClick={handlephonecopy} className="cursor-pointer" />
            <IoMdMail onClick={handlecopymail} className="cursor-pointer" />
            <Link to="https://www.instagram.com/6247.ajay">
              <GrInstagram />
            </Link>
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/kereajay">
              <FaSquareGithub />
            </Link>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 15 }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <h4 className="text-2xl font-medium">Hello, it's Me</h4>
            <h1 className="text-4xl font-bold">Ajay Kere</h1>
            <p className="text-xl">
              A passionate front-end developer who thrives in environments that
              foster continuous learning and professional growth.
            </p>
          </div>
          <button
            onClick={handleResume}
            className="flex items-center gap-2 text-lg font-medium bg-blue-400 text-white px-4 py-2 rounded-lg w-fit shadow-md"
          >
            Resume <FaArrowCircleDown />
          </button>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section className=" py-16">
        <h1 className="text-3xl font-semibold mb-8 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block ml-10">
          | Technical Skills
        </h1>
        <div className="w-[90%] m-auto">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={1500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="https://oktayshakirov.com/assets/images/html.png"
                alt="HTML Logo"
                width={130}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-gray-700">HTML</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://oktayshakirov.com/assets/images/css.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">CSS</p>

              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://oktayshakirov.com/assets/images/java-script.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">JavaScript</p>

              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://oktayshakirov.com/assets/images/react.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">Reactjs</p>
              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://oktayshakirov.com/assets/images/git.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">Git/GitHub</p>
              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
                alt=""
                width={230}
               
              />
              <p className="text-lg font-semibold text-gray-700">Java</p>
              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://miro.medium.com/v2/resize:fit:1000/1*TGwJKcxY8kGEenRLLedeLw.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">NodeJs</p>
              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://resources.ripplematch.com/hubfs/MongoDB-1.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">MongoDB</p>
              
            </div>
            <div className="flex flex-col items-center justify-center text-center" >
              <img
                src="https://img.icons8.com/nolan/512/express-js.png"
                alt=""
                width={130}
              />
              <p className="text-lg font-semibold text-gray-700">Express.js</p>
              
            </div>
          </Carousel>
        </div>
      </section>

      {/* Projects Section */}

      <section className="py-16">
        <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block ml-10">
          | Projects
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 px-8">
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
