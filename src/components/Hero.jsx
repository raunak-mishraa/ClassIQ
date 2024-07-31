import Button from './Button'
import Container from './container/Container'
import React from 'react'
import line from '../assets/line.svg'
import hero_image from '../assets/hero_img.png'
import gradient from '../assets/gradient.png'
function Hero() {
  return (
    <Container>
      <div className='flex items-center justify-around min-h-[80vh] font-poppins'>
          <div className='w-1/2'>
            <h1 className='font-light text-6xl leading-tight'>Empower Your Learning Journey with 
              <span className='font-semibold ml-3 relative'>
                ClassIQ
                <img src={line} alt="line image" className='absolute right-0 bottom-0'/>
              </span>
              </h1>
            <p className='text-[#595959] text-sm py-6 pr-3'>Unlock a world of knowledge and skills with our innovative online courses, expert instructors, and interactive learning tools.and skills with our innovative online courses, expert instructors, and interactive learning tools.</p>
            <Button className=' font-semibold text-[#3E3E3E] text-sm cursor-pointer inline-block px-3 rounded-lg bg-[#C2F578] hover:bg-[#a5d064] transition-colors ease-linear'>
              Explore Courses
            </Button>
          </div>
          <div className=' w-1/2'>
          {/* /*bg-[#ECEDEF]*/ }
            <div className='h-full w-full relative'>
              <img src={hero_image} alt="hero image" className='relative z-10 w-full object-cover'/>
              <img src={gradient} alt="" className='opacity-60 absolute top-0 right-0 '/>
            </div>
          </div>
      </div>
    </Container>
  )
}

export default Hero