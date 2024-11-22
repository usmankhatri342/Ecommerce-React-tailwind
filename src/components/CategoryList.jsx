import React from 'react'
import PhoneImg from "../assets/Images/Category-Phone (1).png"
import PhoneImg2 from "../assets/Images/Category-Phone (2).png"
import PhoneImg3 from "../assets/Images/Category-Phone (3).png"
import PhoneImg4 from "../assets/Images/Category-Phone (4).png"
import PhoneImg5 from "../assets/Images/Category-Phone (5).png"
import PhoneImg6 from "../assets/Images/Category-Phone (6).png"


export default function CategoryList() {
  return (
  <>
    <div className='flex  mt-20  justify-between '>
    <div><img src={PhoneImg} alt="Phone-Category" /></div>
    <div><img src={PhoneImg2} alt="Phone-Category" /></div>
    <div><img src={PhoneImg3} alt="Phone-Category" /></div>
    <div><img src={PhoneImg4} alt="Phone-Category" /></div>
    <div><img src={PhoneImg5} alt="Phone-Category" /></div>
    <div><img src={PhoneImg6} alt="Phone-Category" /></div>
    </div>
    <div className='border-[.5px]  w-[95%] mt-10 justify-center flex '></div>
    </>
  )
}
