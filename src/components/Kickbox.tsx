"use client"
import React from 'react'
import CustomHeading from './common/CustomHeading'
import { KICK_BOX_LIST } from '@/utils/helper'
import CustomBtn from './common/CustomBtn'
import CountUp from 'react-countup'

function Kickbox() {

    return (
        <div className='bg-white pt-[134px] max-lg:py-20 max-md:py-16 max-sm:py-10 pb-[129px] px-4'>
            <div className='max-w-[1200px] mx-auto'>
                <CustomHeading text='IMPLENIA KICKBOX' />
                <p className='mt-4 text-off-grey font-light text-custom-sm max-md:text-lg max-sm:text-base'>Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!</p>
                <div className='flex items-center max-xl:flex-col'>
                    <div className='flex max-[850.98px]:flex-wrap max-[850.98px]:gap-10 justify-center items-center mt-5'>
                        {KICK_BOX_LIST.map((obj, i) => (
                            <div key={i} className={`${i === 0 ? "min-[850.98px]:mr-[94px]" : ""} ${i === 1 ? "min-[850.98px]:mr-[97px]" : ""}`}>
                                <h2 className='text-custom-xl max-lg:text-6xl max-md:text-5xl max-md:text-center text-yellow-400 leading-custom-md'>
                                    +  <CountUp start={0} end={
                                        i === 0 ? 155 : i === 1 ? 325 : i === 2 ? 250 : 0} duration={5} />
                                </h2>
                                <p className='text-custom-sm font-bold text-black max-sm:text-center'>{obj.ideas}</p>
                            </div>

                        ))}
                    </div>
                    <div className='ml-[97px] max-xl:ml-0 max-xl:mt-10'>
                        <CustomBtn btn='Submit your idea!' myClass='!text-red-600 !border-red-600 !py-4 !px-[51px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kickbox