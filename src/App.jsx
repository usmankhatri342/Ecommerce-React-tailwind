import Banner from "./components/Banner"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from './components/AddToCard'
import img1 from './assets/images/gameimg.png'
import img2 from './assets/images/keyboardimg.png'
import img3 from './assets/images/tvimg.png'
import img4 from './assets/images/chairimg.png'
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


function App() {
 

  return (
    <>
    
 <Banner />
 <Header />
 <Hero />
 <OfferTimer />
 <Timer/>
 <div className='flex gap-3 relative right-2 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} price={"$120"} oldprice={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} price={"$960"} oldprice={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} price={"$370"} oldprice={"$400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}price={"$375"} oldprice={"$400"} discount={"-25%"}/><br />
  
  </div>
<Button />
<OfferTimer2 />
<CategoryList />
<OfferTimer3 />
{/* <AddToCard2 /> */}


   <div className=" flex relative top-28 gap-3">
    <Card2 game={img10} height={"152"} width={"172"}text={"The north coat"} price={"$260"} oldprice={"$360"} discount={"-40%"}/> 
  <Card2 game={img11} height={"101"} width={"191"} text={"Gucci duffle bag"} price={"$960"} oldprice={"$1160"} className="special-card" discount={"-35%"} />
   <Card2 game={img12} text={"RGB liquid CPU Cooler"} price={"$160"} oldprice={"$170"} discount={"-10%"}/>
  <Card2 game={img13}text={"Small BookSelf"}price={"$360"} oldprice={"$300"} discount={"-25%"}/> 
  </div>
<MusicExpo />
<OfferTimer4 />
<div className=" flex mt-12 relative right-5 gap-4">
    <Card3 game={img111} height={"180"} width={"115"}text={"Breed Dry Dog Food"} price={"$260"} /> 
  <Card3 game={img110} height={"163"} width={"146"} text={"CANON EOS DSLR Camera"} price={"$960"}  />
   <Card3 game={img112} text={"ASUS FHD Gaming Laptop"} price={"$160"} />
  <Card3 game={img113}text={"Jr. Zoom Soccer Cleats"}price={"$360"}  /> 
  </div>
  <Button2 />
  <OfferTimer5 /> 
  <Newarrvil />
  <Fottar />
    </>
  )
}

export default App
