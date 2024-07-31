import React from 'react'
import Container from './container/Container'
import Button from './Button'
import { TbWorldWww } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
function ProCourse() {
  return (
    <Container>
      {/* [#ECEDEF] */}
        <div className='flex flex-col text-[#373636] items-center justify-center pt-20'>
         <p>Certified Cources for <span className='font-bold'>Professionals</span></p>
         <div className='my-12 flex justify-between items-center w-full gap-x-14'>
            <div className='border bg-[#ECEDEF] w-72 p-6  flex items-center flex-col rounded-lg'>
                <div className='w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                <TbWorldWww className='text-lg'/>
                </div>
                <h2 className='my-4 font-semibold text-[#373636]'>Web Development</h2>
                <Button className='mt-3 bg-[#C2F578] rounded-lg px-4 text-xs font-semibold text-[#373636] shadow'>View Course</Button>
            </div>
            <div className='border bg-[#ECEDEF] p-6 w-72 flex items-center flex-col rounded-lg'>
                <div className='w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                <GiMaterialsScience  className='text-lg'/>
                </div>
                <h2 className='my-4 font-semibold text-[#373636]'>Data Science</h2>
                <Button className='mt-3 bg-[#C2F578] rounded-lg px-4 text-xs font-semibold text-[#373636] shadow'>View Course</Button>
            </div>
            <div className='border bg-[#ECEDEF] p-6 w-72 flex items-center flex-col rounded-lg'>
                <div className='w-14 h-14 shadow-md  rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                <MdOutlineAppSettingsAlt  className='text-lg'/>
                </div>
                <h2 className='my-4 font-semibold text-[#373636]'>App Development</h2>
                <Button className='mt-3 bg-[#C2F578] shadow rounded-lg px-4 text-xs font-semibold text-[#373636]'>View Course</Button>
            </div>
           
          
         </div>
        </div>
    </Container>
  )
}

export default ProCourse