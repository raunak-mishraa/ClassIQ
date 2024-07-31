import React from 'react'
import Container from './container/Container'
import google from '../assets/companies/google.svg'
import airbnb from '../assets/companies/airbnb.svg'
import amazon from '../assets/companies/amazon.svg'
import facebook from '../assets/companies/facebook.svg'
import netflix from '../assets/companies/netflix.svg'

function Company() {
  return (
    <Container>
        <div className=' pt-16  flex-col font-medium text-[#565656] flex justify-center items-center'>
            <p>Trusted by 5,000+ Companies Worldwide</p>
            <div className='flex my-12 items-center justify-evenly h-8 w-full'>
                <img src={google} alt="google image" className='h-full object-cover'/>
                <img src={netflix} alt="netflix image" className='h-full object-cover'/>
                <img src={airbnb} alt="airbnb image" className='h-full object-cover'/>
                <img src={amazon} alt="amazon image" className='h-full object-cover'/>
                <img src={facebook} alt="facebook image" className='h-full object-cover'/>
            </div>
        </div>
    </Container>
  )
}

export default Company