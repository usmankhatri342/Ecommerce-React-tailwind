import Card from '../components/AddToCard'
import img1 from '../assets/Images/gameimg.png'
import img2 from '../assets/images/keyboardimg.png'
import img3 from '../assets/images/tvimg.png'
import img4 from '../assets/images/chairimg.png'
import Hero from "../components/Hero"

//import img10 from "../assets/Images/Card2shart.png"
//import img11 from "../assets/Images/Card2bag.png"
//import img12 from "../assets/Images/Card2spekar.png"
//import img13 from "../assets/Images/Card2maze.png"
import OfferTimer from "../components/OfferTimer"
import Timer from "../components/Timer"
import Button from "../components/Button"

import CategoryList from "../components/CategoryList"
import { useSelector } from "react-redux";

import MusicExpo from "../components/MusicExpo"

//import img110 from "../assets/images2/Card3camra.png"
//import img111 from "../assets/images2/Card3choko.png"
//import img112 from "../assets/images2/Card3laptop.png"
//import img113 from "../assets/images2/Card3shos.png"

import Newarrvil from "../components/Newarrvil"
import { Link } from 'react-router-dom'

//import Slider from '../components/Silder'
import Silder from '../components/Silder'
import Products from './Products'
//import { useState} from 'react'
//import Products from './Products'
//import useProducts from '../Hooks/useProduct'


// import Banner from '../components/Banner'
// import Header from '../components/Header'
// game , text, width, height,price,oldprice,discount}
export default function Home() {
 const darkMode = useSelector((state) => state.darkMode.darkMode);
 // const [darkMood, setDarkMode] = useState(true);
 
  // const { products, isLoading, error } = useProducts("limit=15&skip=35");
 // const isLoggedIn = true;
  return (
    
     <>
  {/* <div className={`${darkMode ? "bg-slate-800" : " "} w-full`}> */}
    
    <div className= {`relative pt-10 bottom-10  ${darkMode ? "bg-slate-800" : ""}`} >
      
      {/* <Banner />
      <Header /> */}
       <Hero />
       <div className="mt-20">
    <div className='mobiles:hidden laptop:block tablet:block laptopl:block '> <Silder   />  </div>
             <div className='flex justify-between relative right-24 mobiles:flex-col mobiles:justify-center tre tablet:hidden laptop:hidden mobiles:ml-6 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountPrice={"$120"} price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountPrice={"$960"} price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} discountprice={"370"} price={"400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}discountprice={"375"} price={"400"} discount={"-25%"}/><br />  

  </div>  
    </div>
    <div className= {`${darkMode ? "text-white" : ""}`}>
 <OfferTimer OfferDay = "Today’s" OfferName ="Flash Sales" />
</div>
 <div className={`${darkMode ? "text-white" : " "}`}>
 <Timer />
 </div>
  <div className='relative bottom-20 '>
   {/* <Silder/>    */}
  </div> 
 
  


<div>
   {/* <div>
  {products?.slice(0, 25)?.map((item) => (
          
            <Card
            key={item.id}
              id={item.id}
              game={item.thumbnail}
              text={item.title}
              price={item.price}
              discountPrice={item.discountPercentage}
              rating={item.rating}
              
            />
         
        ))}
  </div>   */}

<Link to={"/products"} className="h-14 w-56 mx-auto  justify-center text-center flex font-medium rounded bg-primary center text-white"><p className='items-center  flex justify-center'> View All Products </p> </Link>
<div className= {`mobiles:hidden laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
<OfferTimer OfferDay = "Categories" OfferName ="Best Selling Products"/>
</div>
<div className='relative top-16 mobiles:hidden laptop:block laptopl:block tablet:block'>
<Silder /> 
</div>
<div className="mobiles:flex-col overflow-hidden ">
<CategoryList />
</div>
<div className={`mobiles:hidden laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
<OfferTimer OfferDay = "Our Products" OfferName ="Explore Our Products"/>
</div>
<div className='relative top-16'>
   {/* <div className=" flex-wrap justify-between flex relative right-[120px] mt-72">
    <Card game={img111} height={"180"} width={"115"}text={"Breed Dry Dog Food"}  discountprice={"$260"} discount={"-25%"} /> 
  <Card game={img110} height={"163"} width={"146"} text={"CANON EOS DSLR Camera"} discountprice={"$960"} discount={"-20%"} />
   <Card game={img112} text={"ASUS FHD Gaming Laptop"} discountprice={"$160"} discount={"-35%"} />
  <Card game={img113}text={"Jr. Zoom Soccer Cleats"} discountprice={"$360"}  discount={"-30%"} /> 
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountprice={"$120"} Price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountprice={"$960"} Price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} price={"$370"} discountPrice={"$400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}price={"$375"} discountPrice={"$400"} discount={"-25%"}/>
  </div>  */}
  

</div>
<div className='mt-20 mobiles:hidden laptop:block laptopl:block tablet:block'>
<Silder /> 
</div>
{/* <AddToCard2 /> */}

{/* 
   <div className=" flex justify-between relative right-24 mt-32">


    {/* <Card  />
    <Card />
    <Card />
    <Card /> */}
    {/* <Card game={img10} height={"152"} width={"172"}text={"The north coat"} discountPrice={"$260"} price={"$360"} discount={"-40%"}/> 
  <Card game={img11} height={"101"} width={"191"} text={"Gucci duffle bag"} discountPrice={"$960"} price={"$1160"} className="special-card" discount={"-35%"} />
   <Card game={img12} text={"RGB liquid CPU Cooler"} discountPrice={"$160"} Price={"$170"} discount={"-10%"}/>
  <Card game={img13}text={"Small BookSelf"}discountPrice={"$360"}price={"$300"} discount={"-25%"}/>  */}
  {/* </div>  */}
  <div className=' mobiles:hidden laptop:block laptopl:block tablet:block'>
<MusicExpo />
</div>
<div className={`mobiles:hidden laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
<OfferTimer OfferDay = "Our Products" OfferName ="Explore Our Products" />
</div>
{/* <div className=" flex-wrap justify-between flex relative right-[120px] mt-72">
    <Card game={img111} height={"180"} width={"115"}text={"Breed Dry Dog Food"}  discountprice={"$260"} discount={"-25%"} /> 
  <Card game={img110} height={"163"} width={"146"} text={"CANON EOS DSLR Camera"} discountprice={"$960"} discount={"-20%"} />
   <Card game={img112} text={"ASUS FHD Gaming Laptop"} discountprice={"$160"} discount={"-35%"} />
  <Card game={img113}text={"Jr. Zoom Soccer Cleats"} discountprice={"$360"}  discount={"-30%"} /> 
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountprice={"$120"} Price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountprice={"$960"} Price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} price={"$370"} discountPrice={"$400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}price={"$375"} discountPrice={"$400"} discount={"-25%"}/>
  </div> */}

<div className='relative top-16 mobiles:hidden laptop:block laptopl:block tablet:block'>
<Silder /> 
</div>
  <Button className="h-14 w-56 mx-auto my-16 justify-center mobiles:hidden flex"> View All Products </Button>

<div className={` mobiles:hidden laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
  <OfferTimer OfferDay = "Featured" OfferName ="New Arrival"/>

  <Newarrvil /> 
 
  </div>
  
  
 

  </div> 
    </div>
    {/* </div> */}
    </>
  )
}
