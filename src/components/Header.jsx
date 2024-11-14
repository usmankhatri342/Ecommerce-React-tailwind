import React from 'react'
import logo from "../assets/logo/logo.svg"
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";




export default function Header() {
  return (
    
     <nav className='center   justify-evenly p-12  flex'>
        {/* Logo */}
        <div>
            <img 
            className=''
            src={logo} 
            alt="" />
        </div>

        {/* Search bar */}
                <div className='search gap-8 '>
                   <div> <input 
                    className=''
                    type="text"
                    placeholder="What are looking for"
                   
                    name=''
                    id='searchinp'
                     />
                       <button
                  onClick={(event) => {
                    console.log(document.getElementsByClassName("search"));
                  }}
                >
                  <CiSearch className="text-2xl mb-0 cursor-pointer font-semibold relative top-2" />
                </button>
                </div>
                        
              </div>
                {/* Menu */}
                <div className='flex gap-12 text-center font-semibold'>
                    <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Home</p>
                    <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Contact</p>
                    <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>About</p>
                    <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Login</p>
                </div>
                {/* Icone */}
                <div className='flex gap-4'>
                <FaRegHeart  className='text-black w-6 h-6'/>
                <MdOutlineShoppingCart className='w-6 h-6' />
                <div className='bdr cursor-pointer rounded-full w-8 h-8 bg-[#db4444] flex justify-center items-center '>
                <FaRegUser className='text-white'/>
               
                </div>
                <div className='bdr flex justify-center items-center text-white text-xs relative right-20 bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    


                </div>
            
            
        
     </nav>
    
    
  )
}
