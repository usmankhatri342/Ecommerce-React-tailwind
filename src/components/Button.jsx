// import React from 'react'

// export default function Button(Props) {
//   return (
//     <>
//     <div className='justify-center flex relative bottom-16 text-center'>
//     <div className='bg-[#db4444] bdr w-60 h-14 rounded-[4px] flex justify-center
//      items-center text-white text-base  '>{Props.BtnNumber} </div>
//     </div>
//      <div className='border-[.5px] w-[88%] relative bottom-2 left-20 flex'></div>
//      </>
//   )
// }

export default function Button(Props) {
  return (
    <button
      className={`font-medium rounded bg-primary center text-white  ${Props.className}`}
    >
      {Props.children}
    </button>
  );
}