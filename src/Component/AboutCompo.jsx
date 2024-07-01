import React from 'react'
import { CommonHeadOne } from './CommonHeadOne'

export const AboutCompo = () => {
  return (
    <>
    <div className="container">
      <div className="flex justify-center items-center">
      <div className="bg-white w-[1110px] px-[80px] pt-[60px] ">
      <CommonHeadOne CommonHead='About Me'/>
        <div className="info flex gap-10">
          <div className="image w-[330px] h-[400px] mb-[80px]">
            <img className="w-full h-full rounded-[30px]" src="images/about.png" alt="photo" />
          </div>
          <div className="text w-[623px] mb-10">
            <h3 className="text-[26px] font-medium font-poppins text-black mb-[11px]">Who Am I?</h3>
            <p className="text-[16px] font-normal font-poppins text-[#44566c] mb-[16px]">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br/> <br/>
            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            <div className="personal p-5">
               <h3 className="text-[28px] font-medium font-poppins text-black">Personal Info</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
