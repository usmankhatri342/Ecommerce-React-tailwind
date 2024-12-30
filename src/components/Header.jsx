import amna from "../assets/images2/amna.jpg"
import { CiSearch } from "react-icons/ci";
import { FaLess, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    h-28 relative w-[1200px] right-4 flex mb-10 transition-colors duration-100 justify-between mobiles:justify-between mobiles:ml-4 items-center`} >
      <Link to={"/"}>
      <h2 className="font-bold text-4xl text-[#db4444] laptop:block laptopl:block tablet:block mobiles:hidden mobilem:hidden mobilel:hidden">M Usman K </h2>
      <h2 className=" font-bold text-2xl text-[#db4444] mobiles:ml-6 laptop:hidden laptopl:hidden tablet:hidden  mobiles:block mobilem:block mobilel:block">M.U</h2>
      </Link>
      {/* <img src={logo1} alt="" className="w-32 bg-slate-900 h-16  xl:flex 2xl:flex lg:flex mobiles:hidden mobilem:hidden mobilel:hidden   "  />
      <img src={logo2} alt="" className="w-16 h-12  xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobiles:block mobilem:flex mobilel:flex "/> */}

      <form onSubmit={handleSearch} className="w-96 px-2  h-10 rounded center flex  ">
        <input
          type="search"
          className="outline-none w-full  text-sm bg-transparent  mobiles:ml-4  "
          placeholder="What are you looking for?"

        />
        <button>
        <CiSearch className={`text-3xl mobiles:hidden mobilem:hidden mobilel:hidden laptop:flex laptopl:flex tablet:flex ${darkMode ? "text-white" : ""}`} />

        </button>
      </form>

      <ul className={`mobiles:hidden md:flex gap-3  ${darkMode ? "text-white" : ""}`}>
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

      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl relative right-[110px] text-black"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        // mobile navbar
        <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link onClick={() => setIsHamburgerOpen(false)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li className={navLinkStyle}>
              <Link onClick={() => setIsHamburgerOpen(true)} to="/login">
                Login
              </Link>
            </li>
          ) : null}
        </ul>
      )}

      <div className="  text-2xl flex gap-3">
       
          <>
<FaRegHeart className="hover:cursor-pointer w-12 h-10 relative left-28 mobiles:hidden laptopl:block laptop:block hover:text-primary"/>
<MdOutlineShoppingCart className="hover:cursor-pointer w-12 h-10 relative left-28 mobiles:hidden laptopl:block laptop:block hover:text-primary "/>
<div className='bdr flex justify-center items-center b text-white  mobiles:hidden text-xs laptopl:block laptop:block relative left-24  bg-[#db4444] w-3 h-4 rounded-full'>9</div>                    


          </>
          
       
     <button
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
          className= {`mobiles:relative right-[95px] ${darkMode ? "text-white" : " text-slate-800"}`}
        >
        
          {darkMode ? <AiOutlineSun /> : <BsFillMoonFill />}
        </button>
  
        <div className="bg-primary rounded-full mobiles:hidden laptop:block relative right-5 flex justify-center items-center overflow-hidden  h-8 w-16 center text-base text-white">
      
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













// // import { CiSearch } from "react-icons/ci";
// // import { FaRegHeart } from "react-icons/fa";
// // import { MdOutlineShoppingCart } from "react-icons/md";
// // import amna from "../assets/images2/Amna.jpg"
// // import { IoMenu } from "react-icons/io5";
// // import { IoCloseCircleOutline } from "react-icons/io5";


// // import logo from "../assets/logo/logo.svg"



// // import { FaRegUser } from "react-icons/fa";
// // import { Link } from "react-router-dom";



// // const links = [
// //   { title: "home", link: "/" },
// //   { title: "about", link: "/about" },
// //   { title: "contact", link: "/contact" },
// // ];


// // export default function Header() {
// //   const isLoggedIn = true;

// //   const navLinkStyle =
// //   "capitalize hover:underline cursor-pointer hover:text-primary";
// //   return (
// //     <>
    
// //      <nav className='center   justify-between   p-12  flex'>
// //         {/* Logo */}
// //         <div className='ml-10 mb-'> <img className=''src={logo} alt="Logo" /></div>

// //         {/* Search bar */}
                
// //                    <div className='flex mb-5'> <input  className=''type="text" placeholder="What are looking for" name='' id='searchinp' />
// //                         <CiSearch className="text-2xl  cursor-pointer font-semibold " />
// //                 </div>
                        
              
// //                 <ul className="hidden md:flex gap-3">
// //         {links.map((item, i) => (
// //           <li className={navLinkStyle} key={i}>
// //             <Link to={item.link}>{item.title}</Link>
// //           </li>
// //         ))}
// //         {!isLoggedIn ? (
// //           <li className={navLinkStyle}>
// //             <Link to="/login">Login</Link>
// //           </li>
// //         ) : null}
// //       </ul>

// //        <button
// //         onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
// //         className="md:hidden order-1 text-4xl"
// //       >
// //         {isHamburgerOpen ? <IoCloseCircleOutline /> :
// // <IoMenu />}
// //       </button>

// //       {isHamburgerOpen && (
// //         <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
// //           {links.map((item, i) => (
// //             <li className={navLinkStyle} key={i}>
// //               <Link to={item.link}>{item.title}</Link>
// //             </li>
// //           ))}

// //           {!isLoggedIn ? (
// //             <li className={navLinkStyle}>
// //               <Link to="/login">Login</Link>
// //             </li>
// //           ) : null}
// //         </ul>
// //       )} 

// //       <div className="icons center text-2xl mr-12 flex gap-3">
// //         {isLoggedIn ? (
// //           <>
// //             <FaRegHeart />

// //             <MdOutlineShoppingCart />

// //           </>
// //         ) : null}

// //         <div className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
// //           {isLoggedIn ? (
// //             <img src={amna} alt="" />
// //           ) : (
// //             <FaRegUser />
// //           )}
          
// //         </div>
// //         <div className='bdr flex justify-center items-center text-white text-xs relative right-20 bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    

// //       </div>
// //       </nav>
// //     </>
// //   );
// // }          


// // {/* Menu */}
// //                 {/* <div className='flex gap-12 text-center font-semibold'>
// //                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Home</p>
// //                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Contact</p>
// //                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>About</p>
// //                     <p className='capitalize hover:underline cursor-pointer hover:text-[#db4444]'>Login</p>
// //                 </div> */}
// //                 {/* Icone */}
// //                 {/* <div className='flex gap-4 '>
// //                 <FaRegHeart  className='text-black w-6 h-6'/>
// //                 <MdOutlineShoppingCart className='w-6 h-6' />
// //                 <div className='bdr cursor-pointer rounded-full w-8 h-8 bg-[#db4444] flex justify-center items-center '>
// //                 <FaRegUser className='text-white'/>
               
// //                 </div>
// //                 <div className='bdr flex justify-center items-center text-white text-xs relative right-20 bottom-2 bg-[#db4444] w-4 h-4 rounded-full'>9</div>                    
               

// //                 </div>
               
            
        
// //      </nav>
    
// //     <div className='border-[.5px] relative bottom-8'></div>
// //     </>
// //   )
// // } */}

// import { CiSearch } from "react-icons/ci";
// import { IoHeartOutline } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { HiMiniUserCircle } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// // theme icon
// import { IoMdSunny } from "react-icons/io";
// import { IoMoon } from "react-icons/io5";

// import desktopLogo from "../assets/logo/logolap.png";
// import mobileLogo from "../assets/logo/logomob.png";
// import profileImg from "../assets/profilepic/myphoto.jpeg";
// import { useState } from "react";

// //import { toggleDarkMode } from "../redux/darkModeSlice";
// import { useDispatch, useSelector } from "react-redux";

// const links = [
//   { title: "Home", link: "/" },
//   { title: "About", link: "/about" },
//   { title: "Contact Us", link: "/contact" },
// ];
// export default function Header() {
//   // {for redux}
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const isLoggedIn = false;
//   return (
//     <div
//       className={` shadow-md border-b-gray-300  sticky z-10 top-10 sm:top-12 ${
//         darkMode ? "bg-slate-900" : "bg-white"
//       }  `}
//     >
//       <div className="h-[65px] sm:h-[85px] flex justify-between items-center text-center mx-4 sm:mx-4 md:mx-16 xl:mx-[92px] pt-2 sm:pt-5  ">
//         <Link to={"/"}><img src={desktopLogo} alt="" className="hidden sm:flex" /></Link> 
//         <Link to={"/"}><img src={mobileLogo} alt="" className="w-10 sm:w-12 flex sm:hidden " /></Link>

//         {/* for desktop */}
//         <ul className=" hidden lg:flex gap-10 font-normal ">
//           {links.map((item, i) => {
//             return (
//               <li className={`link_hover `} key={i}>
//                 <Link
//                   to={item.link}
//                   className={`${
//                     darkMode ? "text-white hover:text-primary" : ""
//                   }`}
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//           {!isLoggedIn ? (
//             <li className="link_hover">
//               <Link
//                 to="/signup"
//                 className={`${
//                   darkMode ? "text-white hover:text-primary" : ""
//                 } `}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           ) : null}
//         </ul>

//         <div className="flex items-center gap-6 text-center">
//           <div className="flex bg-secondary color-black w-40 ml-3 sm:ml-8 lg:ml-0 sm:w-56 md:w-60 h-[30px] sm:h-9  justify-around items-center  text-sm rounded px-4">
//             <input
//               type="search"
//               className="nav_input bg-transparent outline-none w-full"
//               placeholder="What are you looking for?"
//             />
//             <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" />
//           </div>
//           {/* for theme */}
//           <button
//             className={`text-xl ${darkMode ? "text-white " : ""}`}
//             onClick={() => dispatch(toggleDarkMode())}
//           >
//             {darkMode ? <IoMdSunny /> : <IoMoon />}
//           </button>
//           <div className="flex items-center gap-2 md:gap-4">
//             {isLoggedIn ? (
//               <div className={`hidden  sm:flex gap-2 md:gap-4 items-center text-center `}>
//                 <a
//                   href=""
//                   className={`w-9 h-9 text-2xl icons flex items-center justify-center ${darkMode ? "text-white hover:text-black":""}`}
//                 >
//                   <IoHeartOutline className=" text-2xl " />
//                 </a>
//                 <a
//                   href=""
//                   className={`w-9 h-9 text-2xl icons flex items-center justify-center ${darkMode ? "text-white hover:text-black":""}`}
//                 >
//                   <IoCartOutline className="text-2xl" />
//                 </a>
//               </div>
//             ) : null}
//             <div className={`-ml-3 sm:-ml-0  h-8 w-8 text-4xl ${darkMode ? "bg-slate-900": "bg-white"} rounded-full  overflow-hidden text-primary flex`}>
//               {isLoggedIn ? (
//                 <img src={profileImg} alt="" />
//               ) : (
//                 <HiMiniUserCircle className="w-full h-full "/>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* for mobile */}
//         {!isHamburgerOpen && (
//           <button
//             onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//             className={`text-3xl lg:hidden order-3 w-9 h-9  icons flex items-center justify-center ${darkMode ? 'text-white hover:text-black':''}`}
//           >
//             <IoMenu className="" />
//           </button>
//         )}
//         {isHamburgerOpen && (
//           <div className="bg-white fixed h-[100%] w-96 sm:w-[350px] z-10 top-0 right-0 pt-[95px]  border-l border-l-gray-100 shadow-xl	">
//             <button
//               onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
//               className=" w-9 h-9 icons flex justify-center items-center ml-72 sm:ml-[270px] relative bottom-10 sm:8"
//             >
//               <IoClose className="text-3xl  absolute" />
//             </button>

//             <ul className=" flex flex-col gap-4 text-start ">
//               {links.map((item, i) => {
//                 return (
//                   <li className="border-b border-b-gray-300 pb-3 " key={i}>
//                     <Link className="pl-6 hover:text-primary" to={item.link}>
//                       {item.title}
//                     </Link>
//                   </li>
//                 );
//               })}
//               {!isLoggedIn ? (
//                 <li className="border-b border-b-gray-300 pb-3">
//                   <Link className="pl-6 hover:text-primary" to="/signup">
//                     Sign Up
//                   </Link>
//                 </li>
//               ) : null}
//               {isLoggedIn ? (
//                 <div className="flex sm:hidden justify-center gap-6 mt-2">
//                   <a
//                     href=""
//                     className="w-9 h-9 text-2xl icons flex items-center justify-center"
//                   >
//                     <IoHeartOutline className=" text-2xl " />
//                   </a>
//                   <a
//                     href=""
//                     className="w-9 h-9 text-2xl icons flex items-center justify-center"
//                   >
//                     <IoCartOutline className="text-2xl" />
//                   </a>
//                 </div>
//               ) : null}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }