import Card from '../components/AddToCard'
import img1 from '../assets/Images/gameimg.png'
import img2 from '../assets/images/keyboardimg.png'
import img3 from '../assets/images/tvimg.png'
import img4 from '../assets/images/chairimg.png'
import Hero from "../components/Hero"
import OfferTimer from "../components/OfferTimer"
import Timer from "../components/Timer"
import Button from "../components/Button"
import CategoryList from "../components/CategoryList"
import { useSelector } from "react-redux";
import MusicExpo from "../components/MusicExpo"
import Newarrvil from "../components/Newarrvil"
import { Link } from 'react-router-dom'
import Silder from '../components/Silder'
import Products from './Products'
import OndLast from '../components/ondLast'
import useProducts from '../hooks/useProducts'
export default function Home() {
 const darkMode = useSelector((state) => state.darkMode.darkMode);
 // const [darkMood, setDarkMode] = useState(true);

  const { products, isLoading, error } = useProducts("??limit=10&skip=30");
 // const isLoggedIn = true;
  return (
    
     <>
  {/* <div className={`${darkMode ? "bg-slate-800" : " "} w-full`}> */}
    
    <div className= {`relative pt-10 bottom-10  ${darkMode ? "bg-slate-800" : ""}`} >
      
      {/* <Banner />
      <Header /> */}
      <div className='container-one'>
       <Hero />
       </div>
   
    <div className= {`${darkMode ? "text-white" : ""} container-one max-sm:ml-5`}>
 <OfferTimer OfferDay = "Today’s" OfferName ="Flash Sales" />
</div>
 <div className={`${darkMode ? "text-white" : " "} container-one  max-sm:pt-20 `}>
 <Timer />
 </div>
  <div className='relative bottom-20 max-sm:hidden '>
   <Silder/>   

  </div>
       <div className="mt-20 container-one max-sm:block laptopl:hidden">
    <div className='mobiles:hidden laptop:block tablet:block laptopl:block '> <Silder   />  </div>
             <div className='flex justify-between relative right-24 mobiles:flex-col mobiles:justify-center tre tablet:hidden laptop:hidden mobiles:ml-6 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountPrice={"$120"} price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountPrice={"$960"} price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} discountprice={"370"} price={"400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}discountprice={"375"} price={"400"} discount={"-25%"}/><br />  

  </div>  
    </div>  
 
 


<div>
    {/* <div className='flex cantainer-one gap-3'>
  {products?.slice(4, 52)?.map((item) => (
          
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
  </div>     */}

<Link to={"/products"} className="h-14 w-56 mx-auto  justify-center text-center flex font-medium rounded bg-primary center text-white"><p className='items-center  flex justify-center'> View All Products </p> </Link>
<div className= {`container-one mobiles:hidden laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
<OfferTimer OfferDay = "Categories" OfferName ="Best Selling Products"/>
</div>
<div className='relative bottom-20 max-sm:hidden '>
   <Silder/>   

  </div>
       <div className="mt-20 container-one max-sm:block laptopl:hidden">
    <div className='mobiles:hidden laptop:block tablet:block laptopl:block '> <Silder   />  </div>
             <div className='flex justify-between relative right-24 mobiles:flex-col mobiles:justify-center tre tablet:hidden laptop:hidden mobiles:ml-6 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountPrice={"$120"} price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountPrice={"$960"} price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} discountprice={"370"} price={"400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}discountprice={"375"} price={"400"} discount={"-25%"}/><br />  

  </div>  
    </div>  
<div className="container-one mobiles:flex-col overflow-hidden max-sm:">
<CategoryList />
</div>
<div className={`container-one max-sm:ml-5 laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
<OfferTimer OfferDay = "Our Products" OfferName ="Explore Our Products"/>
</div>
<div className='relative top-16 '>
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
<div className='relative bottom-20 max-sm:hidden '>
   <Silder/>   

  </div>
       <div className="mt-20 container-one max-sm:block laptopl:hidden">
    <div className='mobiles:hidden laptop:block tablet:block laptopl:block '> <Silder   />  </div>
             <div className='flex justify-between relative right-24 mobiles:flex-col mobiles:justify-center tre tablet:hidden laptop:hidden mobiles:ml-6 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} discountPrice={"$120"} price={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} discountPrice={"$960"} price={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} discountprice={"370"} price={"400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}discountprice={"375"} price={"400"} discount={"-25%"}/><br />  

  </div>  
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
  <div className='container-one mobiles:hidden laptop:block laptopl:block tablet:block'>
<MusicExpo />
</div>
<div className={`container-one max-sm:ml-5 laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
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

<div className='container-one relative top-16  laptop:block laptopl:block tablet:block max-sm:hidden'>
<Silder /> 
</div>
  <Button className="container-one h-14 w-56 mx-auto my-16 justify-center  flex"> View All Products </Button>

<div className={`container-one max-sm:ml-5 laptop:block laptopl:block tablet:block ${darkMode ? "text-white" : ""}`}>
  <OfferTimer OfferDay = "Featured" OfferName ="New Arrival"/>

  </div>
  <div className='max-sm:hidden'>
  <Newarrvil /> 
 </div>
  <div className='container-one '> 
    <OndLast />
  </div>
 

  </div> 
    </div>
    {/* </div> */}
    </>
  )
}
