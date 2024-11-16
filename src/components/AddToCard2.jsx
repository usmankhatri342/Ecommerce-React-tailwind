import img5 from '../assets/images/stars.jpg'
import img6 from '../assets/images/heart.png'
import img7 from '../assets/images/eye.png'

function Card({game , text, width, height,price,oldprice,discount}) {
  return (
    <div className=" w-[270px] h-[350px] overflow-hidden relative  bottom-52 left-28 mt-6 maindiv">
        <div className='bg-[#F5F5F5] h-[250px] w-[270px]'>
            <div className="border-2 border-red-500 h-[26px] w-14 bg-red-500 rounded flex items-center justify-center text-white text-xs  ml-3 absolute top-3 hover:cursor-pointer">{discount}</div>
            <div className='relative top-6 left-56'>    
                <img className='mb-2 cursor-pointer' src={img6} alt="" />
                <img className='cursor-pointer' src={img7} alt="" />
            </div>    
            <div className='flex items-center justify-center h-[180px] w-[190px]  mr-auto ml-auto absolute top-9 left-9 hover:scale-110'><img height={height} width={width} src={game} alt="ProductImage" /></div>
        </div>
        <h4 className="mb-1">{text}</h4>
        <div className='mb-1'>
            <span>{price}</span>
            <span className='text-gray-600 ml-3 line-through'>{oldprice}</span>
        </div>
        <img className="h-8 cursor-pointer" src={img5} alt="" />
    </div>
  )
}

export default Card