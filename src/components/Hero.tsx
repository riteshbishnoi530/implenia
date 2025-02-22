import React from 'react'
import CustomBtn from './common/CustomBtn'
import Header from './common/Header'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <Header />
      <div className='relative bg-hero bg-cover bg-no-repeat bg-right flex flex-col justify-center'>
        <div className='max-sm:bg-black max-sm:bg-opacity-50 w-full h-full lg:pl-[50px] lg:h-[662px] max-lg:py-20 px-5'>
        <Image className='pointer-events-none absolute -bottom-10 left-0 max-lg:max-w-[200px] max-md:max-w-[150px]' src='/assets/images/Boxly-winking-left.webp' alt='layer' width={400} height={400}/>
        <div className="relative z-[1] max-w-[1138px] mx-auto w-full">
          <p className='text-shadow text-white text-custom-sm max-md:text-base uppercase font-bold'>Shape the future of Implenia!</p>
          <h1 className='mt-2 text-shadow text-white text-custom-lg leading-custom-sm max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold max-w-[700px] max-lg:max-w-[500px] max-md:max-w-[400px] max-sm:max-w-[300px] mb-[25px]'>WE ARE LOOKING FOR YOUR IDEA</h1>
          <CustomBtn myClass='hover:!bg-white hover:!text-red-500 !border-2' title='Bring your idea to life!' />
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero