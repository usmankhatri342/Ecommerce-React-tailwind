import logo from "../assets/logo/logo.svg";
import logo1 from "../assets/logo/fulllogo.jpg"
import logo2 from "../assets/logo/haflogo.jpg"
import amna from "../assets/images2/amna.jpg"
// import logoMobile from "../assets/logo/logo-mobile.svg";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";
  return (
    <div className="h-28 relative flex  justify-between mobiles:justify-between mobiles:gap- mobiles:ml-4 items-center">
      <img src={logo1} alt="" className="w-32 h-16  xl:flex 2xl:flex lg:flex mobiles:hidden mobilem:hidden mobilel:hidden laptop:ml-14  "  />
      <img src={logo2} alt="" className="w-16 h-12  xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobiles:block mobilem:flex mobilel:flex "/>

      <div className="w-60 px-2 h-6 rounded center flex ">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent mobiles:w-28 mobiles:ml-4  "
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl mobiles:hidden mobilem:hidden mobilel:hidden laptop:flex laptopl:flex tablet:flex" />
      </div>

      <ul className="hidden md:flex gap-3 ">
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn ? (
          <li className={navLinkStyle}>
            <Link to="/login">Login</Link>
          </li>
        ) : null}
          {/* {!isLoggedIn ? (
            
        <li className={navLinkStyle}>
          <Link to= "/" onClick={Login}></Link>
       </li>
          ) : null} */}
      </ul>

      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl flex mr-4 bg-white text-black"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li className={navLinkStyle}>
              <Link to="/login">Login</Link>
            </li>
          ) : null}
        </ul>
      )}

      <div className="icons center text-2xl flex gap-3">
        {isLoggedIn ? (
          <>
<FaRegHeart className="mobiles:hidden mobilem:hidden mobilel:hidden "/>
<MdOutlineShoppingCart className="mobiles:hidden mobilem:hidden mobilel:hidden "/>
<div className='bdr flex justify-center items-center text-white text-xs relative right-7 mobiles:hidden mobilem:hidden mobilel:hidden bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    


          </>
        ) : null}

        <div className="bg-primary rounded-full relative right-5  overflow-hidden mobiles:ml-6 h-8 w-8 center text-base text-white">
          {isLoggedIn ? (
            
            <img
              src={amna}
              alt=""
              className=""
            />
          ) : (
            <FaRegUser />
          )}
        </div>
      </div>
    </div>
  );
}













// import { CiSearch } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import amna from "../assets/images2/Amna.jpg"
// import { IoMenu } from "react-icons/io5";
// import { IoCloseCircleOutline } from "react-icons/io5";


// import logo from "../assets/logo/logo.svg"



// import { FaRegUser } from "react-icons/fa";
// import { Link } from "react-router-dom";



// const links = [
//   { title: "home", link: "/" },
//   { title: "about", link: "/about" },
//   { title: "contact", link: "/contact" },
// ];


// export default function Header() {
//   const isLoggedIn = true;

//   const navLinkStyle =
//   "capitalize hover:underline cursor-pointer hover:text-primary";
//   return (
//     <>
    
//      <nav className='center   justify-between   p-12  flex'>
//         {/* Logo */}
//         <div className='ml-10 mb-'> <img className=''src={logo} alt="Logo" /></div>

//         {/* Search bar */}
                
//                    <div className='flex mb-5'> <input  className=''type="text" placeholder="What are looking for" name='' id='searchinp' />
//                         <CiSearch className="text-2xl  cursor-pointer font-semibold " />
//                 </div>
                        
              
//                 <ul className="hidden md:flex gap-3">
//         {links.map((item, i) => (
//           <li className={navLinkStyle} key={i}>
//             <Link to={item.link}>{item.title}</Link>
//           </li>
//         ))}
//         {!isLoggedIn ? (
//           <li className={navLinkStyle}>
//             <Link to="/login">Login</Link>
//           </li>
//         ) : null}
//       </ul>

//        <button
//         onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//         className="md:hidden order-1 text-4xl"
//       >
//         {isHamburgerOpen ? <IoCloseCircleOutline /> :
// <IoMenu />}
//       </button>

//       {isHamburgerOpen && (
//         <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
//           {links.map((item, i) => (
//             <li className={navLinkStyle} key={i}>
//               <Link to={item.link}>{item.title}</Link>
//             </li>
//           ))}

//           {!isLoggedIn ? (
//             <li className={navLinkStyle}>
//               <Link to="/login">Login</Link>
//             </li>
//           ) : null}
//         </ul>
//       )} 

//       <div className="icons center text-2xl mr-12 flex gap-3">
//         {isLoggedIn ? (
//           <>
//             <FaRegHeart />

//             <MdOutlineShoppingCart />

//           </>
//         ) : null}

//         <div className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
//           {isLoggedIn ? (
//             <img src={amna} alt="" />
//           ) : (
//             <FaRegUser />
//           )}
          
//         </div>
//         <div className='bdr flex justify-center items-center text-white text-xs relative right-20 bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    

//       </div>
//       </nav>
//     </>
//   );
// }          


// {/* Menu */}
//                 {/* <div className='flex gap-12 text-center font-semibold'>
//                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Home</p>
//                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Contact</p>
//                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>About</p>
//                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Login</p>
//                 </div> */}
//                 {/* Icone */}
//                 {/* <div className='flex gap-4 '>
//                 <FaRegHeart  className='text-black w-6 h-6'/>
//                 <MdOutlineShoppingCart className='w-6 h-6' />
//                 <div className='bdr cursor-pointer rounded-full w-8 h-8 bg-[#db4444] flex justify-center items-center '>
//                 <FaRegUser className='text-white'/>
               
//                 </div>
//                 <div className='bdr flex justify-center items-center text-white text-xs relative right-20 bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    
               

//                 </div>
               
            
        
//      </nav>
    
//     <div className='border-[.5px] relative bottom-8'></div>
//     </>
//   )
// } */}
