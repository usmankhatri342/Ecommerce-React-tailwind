import { CiAt } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import qrcode from "../assets/Images/qrcode.png"

import React from 'react'

export default function Fottar() {
  return (
    <>
    <nav className='text-white mobile:flex-col'>
        <div className='bdr2 bg-black  text-white h-[440px] w-[100%] mt-32 flex mr-20 justify-evenly '>
            <div className='mt-20 flex-col flex gap-2 '>
                <h3 className='text-2xl font-semibold'>Exclusive</h3>
                <h4 className='text-xl'>Subscribe</h4>
                <h4 className='text-base'>Get 10% off your first order</h4>
                <div className="flex ">
                <input type="email"  placeholder='Enter Your Email' className='text-black' />
                <VscSend  className="mt-4  relative right-8 font-bold text-2xl text-black"/> 
                </div>
            </div>
            
            <div className=' mt-20 flex-col flex gap-2'>
                <h2 className='text-2xl font-semibold'>Support</h2>
                <h4 className=''>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</h4>
                <h4 className=''>exclusive@gmail.com</h4>
                <h4 className=''>+88015-88888-9999</h4>
            </div>
            <div className='mt-20  flex-col flex gap-2'>
                <h2 className='text-2xl font-semibold '>Account</h2>
                <h4>My Account</h4>
                <h4>Login / Register</h4>
                <h4>Cart</h4>
                <h4>Wishlist</h4>
                <h4>Shop</h4>
            </div>
            <div className='mt-20 flex-col flex gap-2'>
                <h2 className='text-2xl font-semibold'>Quick Link</h2>
                <h4>Privacy Policy</h4>
                <h4>Terms Of Use</h4>
                <h4>FAQ</h4>
                <h4>Contact</h4>
            </div>
            <div className='mt-20 '>
                {/* <h2 className='text-2xl font-semibold'>Download App</h2> */}
                <img src={qrcode} alt="" />
            </div>
           
        </div>
        <div className="">
        <div className='border-t-2 border-gray-800 text-gray-800  relative bottom-14  flex justify-center items-center p-1'><CiAt  />
        <p className="ml-3">Copyright Rimel 2022. All right reserved</p></div>
     </div>
    </nav>
      
    </>
  )
}
