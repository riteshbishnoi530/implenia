import React from 'react'
interface Props {
    btn: string
    myClass?: string
       
}
function CustomBtn({btn, myClass}: Props) {
  return (
  <button className={`text-white hover:scale-110 transition-all duration-300 ease-linear w-fit text-custom-sm max-sm:text-base font-bold leading-custom-sm border border-white rounded-[47px] py-[22px] px-11 max-sm:px-6 max-sm:py-4 ${myClass}`}>{btn}</button>
  )
}

export default CustomBtn