import MobileImg from "../assets/Images/hero2.png"
import Apple from "../assets/Images/Apple.png"
import { FaArrowRight } from "react-icons/fa6";


export default function Hero() {
    return (
      <div className="flex justify-center justify-between gap-[61px] " >
       {/* <div className="">
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Woman's Fashion</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Man's Fashion</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Electronics</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Home & StyleLife</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Groceries & Pets</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Medicine</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Sports & Outdoor</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Baby's & Toys</p>
        <p className=" cursor-pointer hover:underline hover:text-[#db4444]">Health & Beauty</p>
       </div> */}
       <div className="relative bottom-4">
        <ul className="">
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Woman's Fashion</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Man's Fashion</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Electronics</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Home & StyleLife</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Groceries & Pets</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Medicine</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Sports & Outdoor</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Baby's & Toys</li>
          <li className=" cursor-pointer hover:underline hover:text-[#db4444] my-4">Health & Beauty</li>
        </ul>
       </div>
       <div className="border-r-2 relative bottom-8"></div>
       
        <div className="h-[344px] w-[892px] bg-black flex ">
        <div className="w-[] ">
        <img src={Apple} alt=""  className="text-white cursor-pointer flex relative top-14 left-16"/>
        <p className="text-white relative left-32 top-7 w-72 flex">iPhone 14 Series</p>
      
       <div className="cursor-pointer"> 
        <p className=" text-white ml-16 mt-44 text-base font-semibold  ">Shop Now</p>
       <FaArrowRight className="text-white ml-40 relative bottom-4 " />

       </div>

        </div>
        <div className="text-white text-5xl tracking-tight	 relative top-[127px] right-56 ">
          <p className="w-72">Up to 10% <br />off Voucher</p>
        </div>
        <img 
        src={MobileImg} 
        alt="MobileImg"  className="relative right-52 "/>
        
        </div>
       
       
      </div>
    )
  }


  






