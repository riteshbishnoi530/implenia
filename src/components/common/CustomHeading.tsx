import React from 'react'
interface Props {
    text: string
    myClass?: string
}

function CustomHeading({text, myClass}: Props) {
  return (
    <h2 className={`text-custom-md max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-black ${myClass}`}>{text}</h2>
  )
}

export default CustomHeading