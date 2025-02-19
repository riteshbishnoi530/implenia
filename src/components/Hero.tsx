import React from 'react'
import CustomBtn from './common/CustomBtn'
import Header from './common/Header'

function Hero() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='lg:pl-[50px] bg-hero bg-cover bg-no-repeat bg-center lg:h-[662px] max-lg:py-20 flex flex-col justify-center px-4'>
        <div className="max-w-[1138px] mx-auto w-full">
          <p className='text-white text-custom-sm max-md:text-base uppercase font-bold drop-shadow-[0px_4px_4px_0px_#00000040]'>Shape the future of Implenia!</p>
          <h1 className='text-white text-custom-lg leading-custom-sm max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold max-w-[800px] max-lg:max-w-[600px] max-md:max-w-[500px] max-sm:max-w-[400px] mb-[25px]'>WE ARE LOOKING FOR YOUR IDEA</h1>
          <CustomBtn btn='Bring your idea to life!' />
        </div>
      </div>
    </div>
  )
}

export default Hero