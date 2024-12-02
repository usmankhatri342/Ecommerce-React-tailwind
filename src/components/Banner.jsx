import React from 'react'

export default function Banner() {
  return (
  <>
    <div className='bdr4 bg-black text-white  flex justify-center items-center h-12 mobile: w-[1440px] '>
    <div className=' mobiles:hidden mobilem:hidden mobilel:hidden laptopl:block laptop:flex tablet:flex'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!    </div>  
  <div className='hover:cursor-pointer mobiles:right-[510px] relative mobiles:block'>
  <span className='font-bold hover:underline cursor-pointer  mobiles:hidden '> ShopNow</span></div>
   
    </div>
    </>
  )
}
