//import logo from "../assets/logo/logo.svg";
//import logo1 from "../assets/logo/fulllogo.jpg"
//import logo2 from "../assets/logo/haflogo.jpg"
import amna from "../assets/images2/amna.jpg"
// import logoMobile from "../assets/logo/logo-mobile.svg";
import { CiSearch } from "react-icons/ci";
import { FaLess, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
//import Login from "../Pages/Login";
//import { IoMoon } from "react-icons/io5";
//import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Store/DarkMoodSlice";
import { BsFillMoonFill } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";
import { useNavigate } from "react-router";


const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode.darkMode);
//let darkMood = false ;
 // const [darkMood, setDarkMode] = useState(false);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";

   // console.log("uper wala dark mode ", darkMode);
    const handleSearch = (e)=>{
      e.preventDefault()
const Searchterm = e?.target?.children[0]?.value;
console.log("value", Searchterm);


      navigate(`Search?query=${ Searchterm}`)
    }

  return (
    <div className=
    {`${darkMode ? "bg-slate-800" : ""}
    h-28 relative w-[1200px] right-4 flex mb-10 transition-colors duration-100 justify-between mobiles:justify-between mobiles:gap- mobiles:ml-4 items-center`} >
      <Link to={"/"}>
      <h2 className="font-bold text-4xl text-[#db4444]">M Usman K </h2>
      </Link>
      {/* <img src={logo1} alt="" className="w-32 bg-slate-900 h-16  xl:flex 2xl:flex lg:flex mobiles:hidden mobilem:hidden mobilel:hidden   "  />
      <img src={logo2} alt="" className="w-16 h-12  xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobiles:block mobilem:flex mobilel:flex "/> */}

      <form onSubmit={handleSearch} className="w-72 px-2 h-10 rounded center flex ">
        <input
          type="search"
          className="outline-none w-full  text-sm bg-transparent  mobiles:ml-4  "
          placeholder="What are you looking for?"

        />
        <button>
        <CiSearch className={`text-3xl mobiles:hidden mobilem:hidden mobilel:hidden laptop:flex laptopl:flex tablet:flex ${darkMode ? "text-white" : ""}`} />

        </button>
      </form>

      <ul className={`hidden md:flex gap-3  ${darkMode ? "text-white" : ""}`}>
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
     <button
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
          className= {`${darkMode ? "text-white" : ""}`}
        >
        
          {darkMode ? <AiOutlineSun /> : <BsFillMoonFill />}
        </button>
  
        <div className="bg-primary rounded-full relative right-5 flex justify-center items-center overflow-hidden mobiles:ml-6 h-8 w-8 center text-base text-white">
      
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
