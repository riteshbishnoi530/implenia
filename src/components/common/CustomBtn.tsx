import React from 'react'
interface Btn {
    title: string
    myClass?: string
       
}
function CustomBtn({title, myClass}: Btn) {
  return (
  <button className={`text-white hover:!bg-custom-red hover:!text-white transition-all duration-300 ease-linear w-fit text-custom-sm max-md:text-base font-bold leading-custom-sm border border-white rounded-[47px] py-[22px] px-[53px] max-md:px-6 max-md:py-4 ${myClass}`}>{title}</button>
  )
}

export default CustomBtn