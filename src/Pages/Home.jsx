import Card from '../components/AddToCard'
import img1 from '../assets/Images/AddToCard'
import img2 from '../assets/images/keyboardimg.png'
import img3 from '../assets/images/tvimg.png'
import img4 from '../assets/images/chairimg.png'

export default function Home() {
  return (
    <div>
      
      <div className='flex gap-7 relative right-2 '>
  <Card game={img1} height={"152"} width={"172"}text={"HAVIT HV-G92 Gamepad"} price={"$120"} oldprice={"$160"} discount={"-40%"}/>
  <Card game={img2} height={"101"} width={"191"} text={"AK-900 Wired Keyboard"} price={"$960"} oldprice={"$1160"} className="special-card" discount={"-35%"} />
  <Card game={img3} text={"IPS LCD Gaming Monitor"} price={"$370"} oldprice={"$400"} discount={"-30%"}/>
  <Card game={img4}text={"S-Series Comfort Chair"}price={"$375"} oldprice={"$400"} discount={"-25%"}/><br />
  
  </div>
    </div>
  )
}
