import React, { useState, useRef } from "react";
import ajay from "../assets/Images/ajay.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../Data/Data";
import { Link } from "react-router-dom";
// import { FaSquareGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import "./About.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Projectcard from "./Projectcard";
import Resumelatest from "../assets/Reaumelatest.pdf";

function AboutMe() {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const [copy, setCopy] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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

const handleResume=()=>{
  window.open(Resumelatest);
}

  

  return (
    <div className="bg-blue-200 dark:bg-slate-800">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 bg-blue-200 py-28 bounceInRight shadow-[inset_-12px_-8px_40px_#46464620]       m-auto dark:bg-slate-800 dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
        <div className=" rotatecss  rounded-full py-5 m-auto">
          {/* <br /> */}
          <img
            src={ajay}
            alt=""
            className=" rounded-full shadow-[0_50px_50px_rgba(8,_112,_184,_0.7)] m-auto"
            width={300}
          />
          <br />
          <br />
          {copy && (
            <h1 className="text-xl text-blue-600 m-auto text-center">Copied</h1>
          )}
          <div className="text-3xl flex gap-10  text-blue-600 m-auto text-center">
            <FaPhoneAlt onClick={handlephonecopy} />
            <IoMdMail onClick={handlecopymail} />
            <Link to="https://www.instagram.com/6247.ajay?igsh=ZWtrbW9uZDJnNjU1&utm_source=qr">
              {" "}
              <GrInstagram className="" />
            </Link>
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin className="" />
            </Link>
            <Link to="https://github.com/kereajay">
              {" "}
              <FaSquareGithub />
            </Link>
          </div>
        </div>
        <div className="px-5 mt-24">
          <h4 className=" text-2xl font-semibold">Hello it's Me</h4>
          <h1 className="text-4xl  font-semibold">Ajay kere,</h1>
          <h1 className="text-2xl  font-semibold" id="shimmerWave">
            {" "}
            A passionate front-end developer who thrives in environments that
            foster continuous learning and professional growth.
          </h1>
          <br />
          {/* <div className="text-3xl flex gap-10  text-blue-600">
            <Link to="https://www.instagram.com/6247.ajay?igsh=ZWtrbW9uZDJnNjU1&utm_source=qr">
              {" "}
              <GrInstagram className="" />
            </Link>
            <Link to="https://vercel.com/ajays-projects-3da46128">
              {" "}
              <SiVercel className="" />
            </Link>
            <Link to="https://www.linkedin.com/in/ajay-kere-443119220/">
              <FaLinkedin className="" />
            </Link>
            <Link to="https://github.com/kereajay">
              {" "}
              <FaSquareGithub />
            </Link>
          </div> */}
          <br />
          <div className="flex  items-center text-xl bg-blue-300 w-28 py-1 rounded-xl" onClick={handleResume}>
            <button className=" px-2 py-1 mt-1 font-semibold">Resume</button>
            <FaArrowCircleDown />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-3xl font-semibold m-auto text-center">
          Technical Skills
        </h1>
        <br />
        <br />

        <div className="w-full px-10">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 0.9s ease"
            transitionDuration={1500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <img
                src="https://oktayshakirov.com/assets/images/html.png"
                alt=""
                width={130}
              />
            </div>
            <div>
              <img
                src="https://oktayshakirov.com/assets/images/css.png"
                alt=""
                width={130}
              />
            </div>
            <div>
              <img
                src="https://oktayshakirov.com/assets/images/java-script.png"
                alt=""
                width={130}
              />
            </div>
            <div>
              <img
                src="https://oktayshakirov.com/assets/images/react.png"
                alt=""
                width={130}
              />
            </div>
            <div>
              <img
                src="https://oktayshakirov.com/assets/images/git.png"
                alt=""
                width={130}
              />
            </div>
            <div>
              <img
                src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
                alt=""
                width={200}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <br />
      <br />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold m-auto text-center">Projects</h1>
      </div>
      <br />
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 px-8 py-8">
        {data.map((item) => {
          return (
            <>
              {/* <div className='shadow-[inset_-12px_-8px_40px_#46464620] px-4 py-6 dark:shadow-[inset_-12px_-8px_40px_rgba(8,_112,_184,_0.7)] '>
                                    <div>
                                        <Link to={item.link}><img src={item.url} alt="" /></Link>

                                    </div>
                                    <br />
                                    <div className='text-center'>
                                        <h1 className='text-2xl font-semibold text-center'>{item.Title}</h1>
                                        <br />
                                        <Link to={item.gitrepo}>
                                            <button className='text-xl flex  items-center m-auto bg-indigo-100 px-4 py-2 rounded-2xl dark:bg-slate-600'>GitRepo<FaSquareGithub /></button>
                                        </Link>

                                    </div>
                                </div> */}
              <Projectcard
                imgurl={item.url}
                title={item.Title}
                gitrepo={item.gitrepo}
                hlink={item.link}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMe;
