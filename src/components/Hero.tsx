import React from 'react'
import CustomBtn from './common/CustomBtn'
import Header from './common/Header'
import Image from 'next/image'

function Hero() {
  return (
    <div id='home' className='bg-white'>
      <Header />
      <div className='lg:pl-[50px] relative bg-hero bg-cover bg-no-repeat bg-right lg:h-[662px] max-lg:py-20 flex flex-col justify-center px-4'>
        <Image className='absolute -bottom-10 left-0 max-lg:max-w-[200px] max-md:max-w-[150px]' src='/assets/images/Boxly-winking-left.webp' alt='logo' width={400} height={400}/>
        <div className="relative z-[1] max-w-[1138px] mx-auto w-full">
          <p className='text-shadow text-white text-custom-sm max-md:text-base uppercase font-bold'>Shape the future of Implenia!</p>
          <h1 className='mt-2 text-shadow text-white text-custom-lg leading-custom-sm max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold max-w-[700px] max-lg:max-w-[500px] max-md:max-w-[400px] max-sm:max-w-[300px] mb-[25px]'>WE ARE LOOKING FOR YOUR IDEA</h1>
          <CustomBtn title='Bring your idea to life!' />
        </div>
      </div>
    </div>
  )
}

export default Hero