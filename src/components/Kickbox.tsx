"use client"
import React from 'react'
import CustomHeading from './common/CustomHeading'
import { KICK_BOX_LIST } from '@/utils/helper'
import CustomBtn from './common/CustomBtn'
import CountUp from 'react-countup'
import CustomDescription from './common/CustomDescription'

function Kickbox() {

    return (
        <div className='bg-white pt-[134px] max-lg:py-20 max-md:py-16 max-sm:py-10 pb-[129px] px-5'>
            <div className='max-w-[1150px] mx-auto'>
                <CustomHeading text='IMPLENIA KICKBOX' />
                <CustomDescription myClass='mt-4 max-sm:mt-1' pera='Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!'/>
                <div className='flex items-center max-xl:flex-col mt-10 max-md:mt-5'>
                    <div className='flex max-lg:gap-12 !gap-y-6 max-sm:flex-wrap justify-center items-center'>
                        {KICK_BOX_LIST.map((obj, i) => (
                            <div key={i} className={`${i === 0 && "lg:mr-24"} ${i === 1 && "lg:mr-24"}`}>
                                <h2 className='text-custom-xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-lg:text-center text-custom-yellow leading-custom-sm'>
                                    +
                                    <span>
                                    <CountUp start={0} end={
                                        i === 0 ? 155 : i === 1 ? 325 : i === 2 ? 250 : 0} duration={5} />
                                        </span>
                                </h2>
                                <p className='text-custom-sm max-md:text-base font-bold text-black max-sm:text-center -mt-[6px]'>{obj.ideas}</p>
                            </div>

                        ))}
                    </div>
                    <div className='ml-[97px] max-xl:ml-0 max-xl:mt-10 max-md:mt-6'>
                        <CustomBtn title='Submit your idea!' myClass='!text-custom-red !border-custom-red !py-4 !px-[51px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kickbox