import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { KICKBOX_PROCESS_LIST } from '@/utils/helper'
import Image from 'next/image'
import CustomBtn from './common/CustomBtn'

function KickboxProcess() {
    return (
        <div className='max-w-[1122px] mx-auto px-4 pt-[129px] pb-[142px] max-lg:py-20 max-md:py-16 max-sm:py-10'>
            <CustomHeading text='KICKBOX PROCESS' />
            <CustomDescription pera='The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors.' />
            <div className='flex max-lg:flex-wrap justify-center gap-[51px] max-xl:gap-6 mt-[73px]'>
                {KICKBOX_PROCESS_LIST.map((obj, i) => (
                    <div key={i}>
                        <Image className='mx-auto mb-[39px] max-lg:mb-6' src={obj.image} alt={obj.imageAlt} width={227} />
                        <div className='flex flex-col gap-8 max-w-[323px] max-md:max-w-[500px] border border-black rounded-[28px] pb-[19px] pt-8 px-6 max-xl:px-4'>
                            <div>
                                <p className={`text-custom-2xl leading-custom-xs font-semibold ${i === 0 ? "text-custom-red" : i === 1 ? "text-custom-blue" : "text-custom-yellow"}`} >
                                    {obj.subTitle}
                                </p>
                                <h3 className='text-custom-ssm font-semibold text-black'>{obj.title}</h3>
                                <p className='text-custom-sm font-light text-off-grey tracking-[-0.28px] leading-[128%]'>{obj.description}</p>
                            </div>
                            <div>
                                <p className='text-custom-sm font-light text-off-grey tracking-[-0.28px] leading-[128%]'>{obj.boxDuration}</p>
                                <p className='text-custom-sm font-light text-off-grey tracking-[-0.28px] leading-[128%]'>{obj.budget}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CustomBtn myClass='!text-custom-red max-md:mt-6 !border-custom-red !py-4 flex max-lg:mx-auto !px-[46px] mt-[39px]' title='Start your RedBox!'/>
        </div>
    )
}

export default KickboxProcess