import axios from "axios";
import { useState } from "react";
import { ImGift } from "react-icons/im";
import { useParams } from "react-router-dom"
import useSWR from 'swr'
import ReactStars from 'react-stars'
import { IoIosHeartEmpty } from "react-icons/io";
import { TbCarGarage } from "react-icons/tb";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";



export default function ProductsDetils() {

  const params = useParams();


  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
    const product = data?.data;


  console.log("product", params);

   const [selectedImage, setSelectedImage ] = useState(null);
   //const darkMode = useSelector((state) => state.darkMode.darkMode);
   //const [darkMood, setDarkMode] = useState(true);


  if (isLoading) return "loading...";
  
  return (
<>
 
    <main className="pt-10 relative bottom-10 flex min-h-[600px] shadow-2xl ">
     <div className="imges w-[60%] bg-slate-100 flex">
     <div className="h-full w-[150px] gap-5  ">
         {product?.images.map((image)=>(
          <img src={image} alt=""  className=" flex-col "
           onMouseOver={()=> setSelectedImage(image)
           }/>
        ))
        } 
 </div>

      <div><img src={selectedImage} alt="" className="mt-7"/> </div>
       </div>
    
    
    {/* Products Detles */}
    
     <div className="detales w-[40%] p-8 ">

     <h2>{product?.title}</h2>
     
     <ReactStars 
     className="justify-center flex "
     />
      <p className="flex justify-center text-xl">$  {product?.price}</p>
      <div className="bdr4 w-96 m-7"></div>
      <div className="size flex gap-4">
        <div className="pt-1">Size:</div>
        <div className="bdrSize flex justify-center items-center w-7 h-7 ">XS</div>
        <div className="bdrSize flex justify-center items-center  w-7 h-7">S</div>
        <div className="bdrSize flex justify-center items-center w-7 h-7 bg-primary text-white">M</div>
        <div className="bdrSize flex justify-center items-center w-7 h-7">L</div>
        <div className="bdrSize flex justify-center items-center w-7 h-7">XL</div>
        
      </div>
      <div className="flex pt-8 ">
        <div className="bdrSize  flex justify-center hover:cursor-pointer items-center text-3xl w-12 h-10">+</div>
        <div className="bdrSize flex justify-center items-center h-10 text-3xl w-24">2</div>
        <div className="bdrSize flex justify-center hover:cursor-pointer items-center h-10 text-3xl w-12">-</div>
        <button className="font-medium flex justify-center items-center ml-2 rounded h-10 w-28 bg-primary center text-white">Buy Now</button>
        <div className="bdrSize w-12 flex justify-center items-center text-2xl ml-2 h-10"><IoIosHeartEmpty /> </div>
      </div>
      <div className="bdrSize mt-5 h-28 flex">
        <div className=" text-7xl pt-5 ml-1"><TbCarGarage />
        </div>
        <div className=" pt-6 ml-4">
        <div className="text-2xl">Free Delivery</div>
        <div className="text-sm underline hover:cursor-pointer">Enter Your Postl Code for Delivery Availability</div>
        </div>
      </div>
      <div className="bdrSize mt-5 h-28 flex">
        <div className=" text-7xl pt-5 ml-1"><HiMiniArrowPathRoundedSquare />
        </div>
        <div className=" pt-6 ml-4">
        <div className="text-2xl">return Delivery</div>
        <div className="text-sm ">Free 30 Days Delivery Return.
           <span className="font-bold underline hover:cursor-pointer ml-1">Details</span></div>
        </div>
      </div>

      
     </div>
    
    </main>
    <div className="ml-96 font-bold w-96 flex justify-center items-center text-3xl  h-40">Products Detils</div>
    {/* <div className="flex justify-center p-10">
    <Link 
    to={"/"}
     className="bdr bg-primary w-40 flex justify-center items-center" > Back To ...</Link>
    </div> */}
    </>
  )
}
{/* <img src={product.images[0]} alt="" /> */}