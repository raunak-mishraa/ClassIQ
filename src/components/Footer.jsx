import React from 'react'
import Container from './container/Container'
import logo from '../assets/logo.png'
import mlogo from '../assets/m-logo.svg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Container>
        <div className='block sm:flex justify-between w-full pt-20'>
            <div className='sm:w-6/12 w-full'>
                <Link to='/'>
                    <img src={logo} alt="logo" className="opacity-80 h-9 hidden sm:block" />
                    <img src={mlogo} alt="logo" className="h-10 md:hidden block" />
                </Link>
                <div className='mt-4'>
                    <h2 className='font-semibold text-[#3E3E3E] text-sm'>Subscribe</h2>
                    <p className='font-light text-[#88868d] text-xs mt-2'>Subscribe for the latest courses, tips, and updates. Join our learning community today!</p>
                    <div className='bg-[#ffffff] w-fit rounded-lg p-2 mt-5 flex items-center'>
                        <input type="text" placeholder='Enter your email' className=' rounded-lg px-4 py-2 outline-none w-72'/>
                        <button className='bg-[#C2F578] rounded-lg px-4 py-3 h-full ml-2 text-xs font-semibold text-[#373636]'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='sm:3/12 sm:m-0 my-10'>
                <h3 className='font-semibold text-[#373636] mb-2'>ClassIQ Bussiness</h3>
                <ul className='text-[#373636] text-sm space-y-3'>
                    <li>Teach on ClassIQ</li>
                    <li>Teaching Tools</li>
                    <li>ClassIQ app</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='sm:3/12'>
                <h3 className='font-semibold text-[#373636] mb-2'>Careers</h3>
                <ul className='text-[#373636] text-sm space-y-3'>
                    <li>Blog</li>
                    <li>Affiliate</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
        <hr className='border-b border-[#EAEDEB] mt-10'/>
        <div>
            <div className='flex flex-col md:flex-row gap-y-4 justify-between items-center py-8'>
                <p className='text-[#373636] text-sm text-center'>© 2024 ClassIQ. All rights reserved.</p>
                <div className='space-x-3 flex'>
                    <Link className='bg-[#C2F578] p-2 rounded-sm'><AiFillInstagram /></Link>
                    <Link className='bg-[#C2F578] p-2 rounded-sm'><FaXTwitter/></Link>
                    <Link className='bg-[#C2F578] p-2 rounded-sm'><FaLinkedinIn/></Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer