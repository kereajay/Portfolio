import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Footer.css'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

function Footer() {
  return (
    <div className='dark:bg-blue-300  m-auto text-center py-10 bg-slate-950 text-white'>


      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 5 }}
        transition={{ type: 'spring', stiffness: 15 }}
       
      >
       
    
      <h1 className='text-3xl font-semibold'>Let's Connect</h1>
      <div className='mt-5 text-2xl flex gap-6 justify-center '>
        <div className='p-2 rounded-full insta text-3xl'>

          <Link to="https://www.instagram.com/6247.ajay?igsh=ZWtrbW9uZDJnNjU1&utm_source=qr"> <GrInstagram className='Insta' /></Link>
        </div>
        <div className='px-2 rounded-full insta text-3xl'>

          <Link to="https://vercel.com/ajays-projects-3da46128"> <SiVercel className='' /></Link>
        </div>
        <div className='p-2 rounded-full insta text-3xl'>

          <Link to="https://www.linkedin.com/in/ajay-kere-443119220/"><FaLinkedin className='' /></Link>
        </div>
        <div className='p-2 rounded-full insta text-3xl'>

          <Link to="https://github.com/kereajay"> <FaSquareGithub /></Link>
        </div>
      </div>
      </motion.div>



    </div>


  )
}

export default Footer
