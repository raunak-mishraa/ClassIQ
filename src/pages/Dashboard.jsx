import React from 'react'
import Container from '../components/container/Container'
import dashboard from '../assets/dashboard.svg'
import gradient from '../assets/gradient.png'
import Course from '../components/Course'

function Dashboard() {
  return (
    <Container>
        <div className='mt-8'>
            <div className='bg-[#ECEDEF] rounded-lg pt-10 px-10 flex justify-between'>
              <div className='w-1/2'>
                <h2 className='font-semibold text-xl text-[#373636]'>Enroll in your favorite courses </h2>
                    <p className='text-[#373636]'>And Here’s Why You Should </p>
                    <ul className='mt-4 text-[#686868] list-disc space-y-1 ml-4  font-semibold'>
                        <li className='bg-[#C2F578] text-black w-fit'>Certifications</li>
                        <li className='bg-[#C2F578] text-black w-fit'>Expert Instructors</li>
                        <li className='bg-[#C2F578] text-black w-fit'>Affordable Pricing</li>
                    </ul>
                    <div className='border-b-4 border-[#C2F578] pb-2 mt-11 text-5xl uppercase font-bold text-[#373636]'>Learn With ClassIQ</div>
              </div>
              <div className=' w-1/2 flex justify-center items-end relative overflow-hidden'>
                <img src={dashboard} alt="" className='relative z-10'/>
                <img src={gradient} alt="" className='absolute bottom-0 object-cover'/>
               </div>
            </div>
        </div>
        <Course  />
    </Container>
  )
}

export default Dashboard