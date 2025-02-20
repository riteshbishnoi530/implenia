import React from 'react'
interface Props {
    pera: string
    myClass?: string
}
function CustomDescription({pera, myClass}: Props) {
  return (
   <p className={`text-off-grey max-w-[1090px] leading-custom-md] tracking-[-0.28px] font-light text-custom-sm max-md:text-lg max-sm:text-base ${myClass}`}>{pera}</p>
  )
}

export default CustomDescription