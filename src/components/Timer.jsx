import React from 'react'

export default function Timer() {
  return (
    <div className='relative bottom-7 '>
         <div className='flex text-xs gap-9 font-semibold justify-center relative bottom-32'>
        <p>Day</p>
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
    </div>
    <div className='flex text-3xl font-semibold gap-9 justify-center relative bottom-[120px] right-2 '>
        <p>03</p>
        <p>23</p>
        <p>19</p>
        <p>56</p>
    </div>
    <div className=' text-[#db4444] text-5xl ml-[590px] relative bottom-[165px] gap-[60px] flex'>
      <div>:</div>
      <div>:</div>
      <div>:</div>
      
    </div>
    {/* <div className='text-[#db4444]  relative text-4xl left-[595px] bottom-[160px]' >:</div>
    <div className='text-[#db4444]  relative text-4xl left-[665px] bottom-[200px]' >:</div>
    <div className='text-[#db4444]  relative text-4xl left-[730px] bottom-[240px]' >:</div> */}
    </div>
  )
}
