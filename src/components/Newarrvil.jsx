import img21 from "../assets/images2/Frame2.png"
import img22 from "../assets/images2/Frame3.png"
import img23 from "../assets/images2/Frame 4.png"
import img24 from "../assets/images2/Frame5.png"

export default function Newarrvil() {
  return (
    <>
    <div className="w-[1170px] h-[600px] ml-24 mb-12 ">
          <div className="main grid grid-cols-4 gap-8 grid-rows-2">
      <div className="bg-[#0D0D0D] rounded col-span-2 row-span-2">
        <img src={img21} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded col-span-2">
        <img src={img22} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded">
        <img src={img23} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded">
        <img src={img24} alt="product image" />
      </div>
    </div>
    </div>
    </>
  )
}
