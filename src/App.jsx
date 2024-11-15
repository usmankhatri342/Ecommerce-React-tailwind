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
    </>
  )
}

export default App
