import React from 'react'
import Hero from '../components/Hero'
import Company from '../components/Company'
import ProCourse from '../components/ProCourse'
import Feature from '../components/Feature'

function Home() {
  return (
    <div className='bg-[#F5F5F5]'>
    <Hero/>
    <Company/>
    <ProCourse/>
    <Feature/>
    </div>
  )
}

export default Home