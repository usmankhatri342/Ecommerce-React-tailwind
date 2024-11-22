import React from 'react'


export default function OfferTimer(Props) {
  return (
    <div className='mt-16 flex-col ' >
    <div className='flex gap-4 '>
        <div className='boxes bdr w-5 h-10  rounded-[4px] bg-[#db4444]'></div>
        <div className='dayName font-bold text-[#db4444]  gap-4 flex items-center'>{Props.OfferDay}</div>
        
      
    </div>
    <div className='productName text-5xl mt-3 font-semibold '>{Props.OfferName}</div>
 
    </div>
    )
}
