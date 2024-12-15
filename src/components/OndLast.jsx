import oneimg from "../assets/Images/fast1.png"
import twoimg from "../assets/Images/fast2.png"
import threeimg from "../assets/Images/fast 3.png"

export default function OndLast() {
  return (
    <div className=" flex justify-between h-[450px] items-center">
      <div><img src={oneimg} alt=""  className="hover:cursor-pointer"/></div>
       <div><img src={twoimg} alt="" className="hover:cursor-pointer" /></div>
      <div><img src={threeimg} alt=""  className="hover:cursor-pointer"/></div>  
    </div>
  )
}
