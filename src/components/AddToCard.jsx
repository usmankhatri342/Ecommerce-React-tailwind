import img5 from '../assets/images/stars.jpg'
import img6 from '../assets/images/heart.png'
import img7 from '../assets/images/eye.png'
import ReactStars from 'react-stars'



// function Card({game , text, width, height,price,oldprice,discount}) {

  function Card (props) {
  
    //  const discountPrice= (  props.discountPercentage - props.price   * (props.price / 100)
    //    ).toFixed(2)
      
       
  return (
    <>
    <div className=" w-[270px] h-[350px] overflow-hidden relative p-3 sh bottom-32 left-[100px] mt-6 maindiv">
        <div className='bg-[#F5F5F5] h-[250px] w-[270px]'>
            <div className="border-2 border-primary h-[26px] w-14 bg-primary rounded flex items-center justify-center text-white text-xs  ml-3 absolute top-6  ">{-30}</div>
            <div className='relative top-6 left-56'>    
                <img className='mb-2 cursor-pointer relative right-4' src={img6} alt="" />
                <img className='cursor-pointer relative right-4' src={img7} alt="" />
            </div>    
            <div className='flex items-center justify-center h-[180px] w-[190px]  mr-auto ml-auto absolute top-9 left-9 hover:scale-110'><img height={props.height} width={props.width} src={props.game} alt="ProductImage" /></div>
        </div>
        <h4 className="mb-1">{props.text}</h4>
        <div className='mb-1'>
            <span>{props.price}</span>
            <span className='text-gray-600 ml-3 line-through'>${props.oldprice}</span>
         
        </div>
        

        <img className="h-8 cursor-pointer" src={img5} alt="" />
        
    </div>
     {/* <div>
     <ReactStars
      count={5}
      value={Props.rating}
      size={24}
      // color1={"red"}
      color2={"#db4444"}
      edit={false}
    />
  </div>  */}
  </>
  )
}

export default Card