import React from 'react'

export const Info = ({infoIcon , infoText , infoP}) => {
  return (
    <>
    <div className="flex pt-[10px] pb-[10px] flex-wrap items-center gap-[10px] w-[240px] ">
        <div className="text-[22px] font-black w-[35px] h-[35px] leading-[35px] flex justify-center items-center bg-white rounded-lg text-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white">{infoIcon}</div>
        <div className=" flex flex-col justify-start items-start">
            <span className="text-[12px] font-normal leading-[18px] text-[#44566c] inline-block">{infoText}</span>
            <p className="text-[14px] font-poppins font-normal text-black leading-[24px] ">{infoP}</p>
        </div>

    </div>

    </>
  )
}
