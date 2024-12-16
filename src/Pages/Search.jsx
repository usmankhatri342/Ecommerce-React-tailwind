


//import {useState } from "react";
import Card from "../components/AddToCard";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
//import axios from "axios";


export default function Search() {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  const { products, isLoading, error } = useProducts(
    `/search?q=${searchTerm}&limit=5`,
  );
  const darkMode = useSelector((state) => state.darkMode.darkMode);
 
  
//


 

  

 // const [searchTerm,setSearchTerm ]= useState(" ")
  
  //console.log(searchTerm);

//   const searchProducts = ()=> {
//     const result = products?.filter ((item) => {
//       return  item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase ());


      
//       // item.rating >= 2 || item.price > 20;
//       //return item.rating >= 4;
//          // const result = products?.filter((item) => {
//     //   return item.rating >= 4 && item.price > 50;
//     // });
//     });
// //console.log("result" , result);
// return result || [];
//   };
 // console.log(searchTerm);
  
 //const searchKaResult =  searchProducts ()
 //const [darkMood, setDarkMode] = useState(true);
 
  return (

    
    <div className={`
      container-one mobiles:relative  pt-20 bottom-10 mobiles:hidden laptop:block laptopl:block tablet:block 
    ${darkMode ? "bg-slate-800" : " "}`}>
    <div className="relative right-[100px]">
{/* <form className="">
{/* <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          // console.log("value",event.target.value);

          setSearchTerm( event.target.value?.toLocaleLowerCase())
           
        }}
        className="block  outline-none rounded-md border-0 py-1.5 pl-7 w-96 ml-28 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 my-8 sm:text-sm/6"
        placeholder="Search your product"
      /> */}
    {/* </form> */} 

      {products === null ? "Loading ho raha hai w8 ...." : null}

      <div className="flex flex-wrap gap-1 mt-28 justify-between relative  ">
        {products?.map((item) => (
          <Card 
          // darkMood={darkMood}
          id={item.id}
          key={item.id}
          game={item.thumbnail}
          name={item.title}
          price={item.price}
          discountPercentage={item.discountPercentage}
          rating={item.rating}
           />
           
        ))} 
      </div>
     </div>
    </div>
  );
}