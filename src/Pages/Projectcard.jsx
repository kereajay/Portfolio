import React, { useRef } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import './Projectcard.css'

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

function Projectcard({ imgurl, title, gitrepo, hlink }) {
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
       

            className="relative lg:h-[450px] md:h-[600px] sm:h-[330px] w-full rounded-xl "
        >

            <div className="shadow-[inset_-12px_-8px_40px_rgba(8,_112,_184,_0.7)] px-4 py-6 dark:shadow-[inset_-12px_-8px_40px_rgba(8,_112,_184,_0.7)]  absolute inset-4 grid place-content-center rounded-xl" style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
            }} >



                <div>
                    <Link to={hlink}>
                        <img src={imgurl} alt="" />
                    </Link>
                </div>
                <br />
                <div className="">
                    <h1 className="text-2xl font-semibold px-2">{title}</h1>
                    <br />
                    <Link to={gitrepo}>
                     
                        <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold ">
                            <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                            <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                            <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                            <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                            <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                            <button className="z-10 text-xl flex gap-1 font-semibold  items-center m-auto   py-2 rounded-2xl " id="gitbutton">
                            GitRepo
                            <FaSquareGithub />
                        </button>
                        </button>



                    </Link>
                </div>
            </div>

        </motion.div>
    );
}
export default Projectcard;
