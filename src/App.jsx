import Banner from "./components/Banner"
import Header from "./components/Header"
import Hero from "./components/Hero"

import img10 from "./assets/Images/Card2shart.png"
import img11 from "./assets/Images/Card2bag.png"
import img12 from "./assets/Images/Card2spekar.png"
import img13 from "./assets/Images/Card2maze.png"
import OfferTimer from "./components/OfferTimer"
import Timer from "./components/Timer"
import Button from "./components/Button"
import OfferTimer2 from "./components/OfferTimer2"
import CategoryList from "./components/CategoryList"
import OfferTimer3 from "./components/OfferTimer3"
import Card2 from "./components/AddToCard2"
import MusicExpo from "./components/MusicExpo"
import Card3 from "./components/AddToCard3"
import img110 from "./assets/images2/Card3camra.png"
import img111 from "./assets/images2/Card3choko.png"
import img112 from "./assets/images2/Card3laptop.png"
import img113 from "./assets/images2/Card3shos.png"
import OfferTimer4 from "./components/OfferTimer4"
import Button2 from "./components/Button2"
import OfferTimer5 from "./components/OfferTimer5"
import Newarrvil from "./components/Newarrvil"
import Fottar from "./components/Fottar"
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
 

  return (
    <>
    
 <Banner />
 <Header />
 <Hero />
 <OfferTimer />
 <Timer/>

<Button />
<OfferTimer2 />
<CategoryList />
<OfferTimer3 />
{/* <AddToCard2 /> */}


   <div className=" flex relative top-28 gap-2">
    <Card2 game={img10} height={"152"} width={"172"}text={"The north coat"} price={"$260"} oldprice={"$360"} discount={"-40%"}/> 
  <Card2 game={img11} height={"101"} width={"191"} text={"Gucci duffle bag"} price={"$960"} oldprice={"$1160"} className="special-card" discount={"-35%"} />
   <Card2 game={img12} text={"RGB liquid CPU Cooler"} price={"$160"} oldprice={"$170"} discount={"-10%"}/>
  <Card2 game={img13}text={"Small BookSelf"}price={"$360"} oldprice={"$300"} discount={"-25%"}/> 
  </div>
<MusicExpo />
<OfferTimer4 />
<div className=" flex mt-12 relative right-12 gap-7">
    <Card3 game={img111} height={"180"} width={"115"}text={"Breed Dry Dog Food"} price={"$260"} /> 
  <Card3 game={img110} height={"163"} width={"146"} text={"CANON EOS DSLR Camera"} price={"$960"}  />
   <Card3 game={img112} text={"ASUS FHD Gaming Laptop"} price={"$160"} />
  <Card3 game={img113}text={"Jr. Zoom Soccer Cleats"}price={"$360"}  /> 
  </div>
  <Button2 />
  <OfferTimer5 /> 
  <Newarrvil />
  <Fottar />
  <Routes>
        
      
      </Routes>
    </>
  )
}

export default App
