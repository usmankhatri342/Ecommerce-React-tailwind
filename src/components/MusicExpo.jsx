import MusicImg from "../assets/Images/musicExprience.png"
import buler from "../assets/Images/bulerimg.png"

export default function MusicExpo() {
  return (
    <div>
      <div className='bdr2 w-[1170px] h-[500px] bg-[#000000] mt-8 ml-24'>
      {/* <div>  <img src={buler} alt="" /> </div> */}
        <div className="ml-[525px] mt-24"><img src={MusicImg} alt="" /></div>
        <div  className="relative bottom-[360px] ml-20 ">
        <p className="text-[#00FF66] ">Categories</p><br /><br />
        <h3 className="text-white text-5xl">Enhance Your <br />Music Experience</h3> <br /><br />
        <div className="flex gap-3">
        <div className="">
            <div className="border-2  font-semibold text-sm border-[#FFFFFF] rounded-full flex justify-center items-center  w-16 h-16 bg-[#ffffff]"> 
                <span className="relative left-5 bottom-3">23 </span><br />
                <span className="relative  top-2 right-2"> Hours</span>
                </div>
                
            
        </div>
        <div>
            <div className="border-2  font-semibold text-sm  border-[#FFFFFF] rounded-full flex justify-center items-center w-16 h-16 bg-[#ffffff]"> 
                <span className="relative left-5 bottom-3">05 </span><br />
                <span className="relative  top-2 right-2"> Days</span>
                </div>
                
            
        </div>
        <div>
            <div className="border-2  font-semibold  text-base border-[#FFFFFF] rounded-full flex justify-center items-center w-16 h-16 bg-[#ffffff]"> 
                <span className="relative left-7 bottom-3">59 </span><br/>
                <span className="relative  top-2 right-2"> Minutes</span>
                </div>
                
            
        </div>
        <div>
            <div className="border-2  font-semibold text-sm  border-[#FFFFFF] rounded-full flex justify-center items-center w-16 h-16 bg-[#ffffff]"> 
                <span className="relative left-7 bottom-3">35 </span><br />
                <span className="relative  top-2 right-2">Seconds</span>
                </div>
                
            
        </div>
        </div>
        <div className="mt-11" ><button className=" bg-[#00FF66] border-1 rounded-sm flex justify-center font-semiboldbold items-center cursor-pointer text-white w-44 h-14">Buy Now!</button></div>
      </div>

      </div>
    
    </div>
  )
}
