// import img5 from '../assets/images/stars.jpg'
import img6 from '../assets/images/heart.png'
import img7 from '../assets/images/eye.png'
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'



// function Card({game , text, width, height,price,oldprice,discount}) {

  function Card (props) {
  
    //  const discountPrice= (  props.discountPercentage - props.price   * (props.price / 100)
    //    ).toFixed(2)
      
       
  return (
    <>
    
    
    

<div
       
       className=" w-[270px] h-[390px] bg-slate-200 shadow-xl overflow-hidden relative p-3 sh bottom-32 left-[100px] mt-32 maindiv">
    
        <div className='bg-slate-100 h-[250px] w-full'> 
            <div className="border-2 border-primary h-[26px] w-14 bg-primary rounded flex items-center justify-center text-white text-xs  ml-3 absolute top-6  ">-{30}</div>
            <div className='relative top-6 left-56'>    
                <img className='mb-2 cursor-pointer relative right-4' src={img6} alt="" />
                <img className='cursor-pointer relative right-4' src={img7} alt="" />
            </div>    
            <div className='flex items-center justify-center  mr-auto ml-auto absolute top-9 left-9 hover:scale-110'><img  src={props.game} alt="ProductImage" /></div>
        </div>
        <h4 className="mb-1">{props.text}</h4>
        <div className='mb-1'>
           
            <span >${props.price}</span>
            <span className='text-gray-600 ml-3 line-through'>{props.discountPercentage}</span>
            <div>  {props.key}</div>
         
        </div>
         <Link to=
     {`/product/${props.id}`} 
 className='bdr2 h-8 bg-black text-white flex justify-center items-center cursor-pointer hover:text-primary '> 
  View Details

</Link>
        {/* <img className="h-8 cursor-pointer" src={img5} alt="" /> */}
        <div>
     <ReactStars
      count={5}
      value={props.rating}
      size={24}
      // color2={"red"}
      color1={"gray"}
      edit={true}
    />
  </div>  
        
    
  
    
  </div>
  </>
  )
}

export default Card