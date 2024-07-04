import React from 'react'
import { CommonHeadOne } from './CommonHeadOne'
import { Info } from './Info'
import { FaMobileAlt } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

export const AboutCompo = () => {
  return (
    <>
    <div className="container">
      <div className="flex justify-center items-center">
      <div className="bg-white w-[1110px] px-[80px] pt-[60px] rounded-xl">
      <CommonHeadOne CommonHead='About Me'/>
        <div className="info flex gap-10">
          <div className="image w-[330px] h-[400px] mb-[80px]">
            <img className="w-full h-full rounded-[30px]" src="images/about.png" alt="photo" />
          </div>
          <div className="text w-[623px] mb-10">
            <h3 className="text-[26px] font-medium font-poppins text-black mb-[11px]">Who Am I?</h3>
            <p className="text-[16px] font-normal font-poppins text-[#44566c] mb-[16px]">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br/> <br/>
            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            <div className="personal py-5">
               <div className="infoHead">
               <h3 className="text-[28px] font-medium mb-[15px] inline-block font-poppins text-black">Personal Info</h3>
               <div className="flex flex-wrap px-[15px] ">
                  <Info infoIcon={<FaMobileAlt className="text-[#e93b81]"/>} infoText='phone' infoP='+123 456 7890'/>
                  <Info infoIcon={<BsEnvelopePaper className="text-[#6ab5b9]" />} infoText='Email' infoP='Example@Mail.Com'/>
                  <Info infoIcon={<IoLocationSharp className=" text-[#fd7590]" />} infoText='Location' infoP='Hong Kong China'/>
                  <Info infoIcon={<FaRegCalendarAlt className=" text-[#c17ceb]" />} infoText='Birthday' infoP='May 27, 1990'/>
               </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
