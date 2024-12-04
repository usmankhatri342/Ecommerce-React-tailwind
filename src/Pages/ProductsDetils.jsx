import axios from "axios";
import { useState } from "react";
import { ImGift } from "react-icons/im";
import { useParams } from "react-router-dom"
import useSWR from 'swr'
import ReactStars from 'react-stars'

export default function ProductsDetils() {

  const params = useParams();


  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
    const product = data?.data;


  console.log("product", params);

   const [selectedImage, setSelectedImage ] = useState(null);

  


  if (isLoading) return "loading...";
  
  return (
<>
 
    <main className="flex min-h-[600px] shadow-2xl ">
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
     
     </div>
     
    </main>
    {/* <div className="flex justify-center p-10">
    <Link 
    to={"/"}
     className="bdr bg-primary w-40 flex justify-center items-center" > Back To ...</Link>
    </div> */}
    </>
  )
}
{/* <img src={product.images[0]} alt="" /> */}