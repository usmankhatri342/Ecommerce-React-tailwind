import img35 from '../assets/images/stars.jpg'
import img36 from '../assets/images/heart.png'
import img37 from '../assets/images/eye.png'

function Card({game , text, width, height,price,oldprice,discount}) {
  return (
    <div className=" w-[270px] h-[350px] overflow-hidden relative ml-3 bottom-52 left-28 mt-6 maindiv">
        <div className='bg-[#F5F5F5] h-[250px] w-[270px]'>
            <div className="">{discount}</div>
            <div className='relative top-6 left-56'>    
                <img className='mb-2 cursor-pointer' src={img36} alt="" />
                <img className='cursor-pointer' src={img37} alt="" />
            </div>    
            <div className='flex items-center justify-center h-[180px] w-[190px] hover:scale-110 mr-auto ml-auto absolute top-9 left-9'><img height={height} width={width} src={game} alt="ProductImage" /></div>
        </div>
        <h4 className="mb-1">{text}</h4>
        <div className='mb-1'>
            <span>{price}</span>
            <span className='text-gray-600 ml-3 line-through'>{oldprice}</span>
        </div>
        <img className="h-8 cursor-pointer" src={img35} alt="" />
    </div>
  )
}

export default Card
