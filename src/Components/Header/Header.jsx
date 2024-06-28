import React,{useState,useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import ajay from '../../assets/Images/ajay.png'

function Header() {
    const [open, setOpen] = useState(false)

    const [theme, setTheme] = useState("light");
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
    const handletheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  return (
    <div>
    
        <div className='lg:flex md:hidden sm:hidden justify-between px-4 bg-blue-300 dark:bg-slate-600 items-center'>
          <div className='flex gap-4 items-center '>
            <img src={ajay} alt="" width={50}  className='rounded-full'/>
            <h1 className='text-3xl  px-4 py-1 '>AJAY</h1>
          </div>
            <ul type="none" className='flex flex-row gap-8 justify-end px-4 py-3 items-center text-lg font-semibold' >
            <li><Link to="/AboutMe">AboutMe</Link></li>
            <li><Link to="/Education">Education</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
           
            <li onClick={handletheme}><IoSunnySharp /></li>
            </ul>
        </div>
        <div className='text-3xl lg:hidden md:visible sm:visible bg-blue-400 dark:bg-slate-600'>
        <GiHamburgerMenu  onClick={() => setOpen(!open)}/>

        </div>
        {
            open &&
       
        <div>
        <ul type="none" className=' lg:hidden flex flex-col gap-8 bg-blue-400 py-4 text-lg font-semibold dark:bg-slate-600' >
          <li className='text-3xl font-semibold flex gap-4 items-center'> <img src={ajay} alt="" width={50} className='rounded-full' /> AJAY</li>
       
               <li><Link to="/AboutMe">AboutMe</Link></li>
            <li><Link to="/Education">Education</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li onClick={handletheme}><IoSunnySharp /></li>
            </ul>

        </div>
         }
      
    </div>
  )
}

export default Header
