import { CiAt } from "react-icons/ci";

import React from 'react'

export default function Fottar() {
  return (
    <>
    <nav className='text-white '>
        <div className='bdr2 bg-black w-[1340px] text-white h-[440px] mt-32 flex justify-evenly '>
            <div className='mt-20 flex-col flex gap-4 '>
                <h3 className='text-2xl font-semibold'>Exclusive</h3>
                <h4 className='text-xl'>Subscribe</h4>
                <h4 className='text-base'>Get 10% off your first order</h4>
                <input type="email"  placeholder='Enter Your Email' className='text-black' />
            </div>
            
            <div className=' mt-20 flex-col flex gap-4'>
                <h2 className='text-2xl font-semibold'>Support</h2>
                <h4 className=''>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</h4>
                <h4 className=''>exclusive@gmail.com</h4>
                <h4 className=''>+88015-88888-9999</h4>
            </div>
            <div className='mt-20  flex-col flex gap-4'>
                <h2 className='text-2xl font-semibold '>Account</h2>
                <h4>My Account</h4>
                <h4>Login / Register</h4>
                <h4>Cart</h4>
                <h4>Wishlist</h4>
                <h4>Shop</h4>
            </div>
            <div className='mt-20 flex-col flex gap-4'>
                <h2 className='text-2xl font-semibold'>Quick Link</h2>
                <h4>Privacy Policy</h4>
                <h4>Terms Of Use</h4>
                <h4>FAQ</h4>
                <h4>Contact</h4>
            </div>
            <div className='mt-20 '>
                <h2 className='text-2xl font-semibold'>Download App</h2>
            </div>
           
        </div>
        
        <div className='border-t-2 border-gray-800 text-gray-800  relative bottom-14 w-[99%] flex justify-center items-center p-1'><CiAt />
        Copyright Rimel 2022. All right reserved</div>
     
    </nav>
      
    </>
  )
}
