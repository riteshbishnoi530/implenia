import React from 'react'
interface Description {
    pera: string
    myClass?: string
}
function CustomDescription({pera, myClass}: Description) {
  return (
   <p className={`text-off-grey max-w-[1090px] leading-custom-lg tracking-[-0.28px] font-light text-custom-sm max-md:text-lg max-sm:text-base ${myClass}`}>{pera}</p>
  )
}

export default CustomDescription