"use client";
import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? false : index);
  };
  return (
    <div className="bg-off-white pt-[128px] pb-[146px] max-lg:py-20 max-md:py-16 max-sm:py-10 px-4">
      <div className="max-w-[1090px] container mx-auto">
        <CustomHeading myClass="pb-[9px]" text="FAQs" />
        {FAQ_LIST.map((data, index: number) => (
          <div
            key={index}
            className="overflow-hidden min-h-[45px] border-b-[1px] border-solid border-darkGray"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="text-[21px] font-semibold text-left leading-custom-sm max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] text-blackLight flex justify-between items-center w-full py-2"
            >
              {data.title}
              <img
              width={"30px"}
              className={`${
                openIndex === index ? "rotate-90 transition-all duration-300" : "rotate-0 transition-all duration-300" }`}
              src='/assets/images/arrow-icon.webp'
              alt="uparrow"
            />
            </button>
            <div
              className={`${
                openIndex === index ? "max-h-20 pb-3.5" : "max-h-0"
              } transition-all duration-500 overflow-hidden`}
            >
              <CustomDescription pera={data.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
