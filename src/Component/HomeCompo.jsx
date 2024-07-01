import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa6";
import { SocialButton } from './SocialButton';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const HomeCompo = () => {
  return (
    <>
    <div className="personal-info flex justify-center items-center text-center mt-[30px] flex-col">
      <div className="image w-[280px] h-[280px] mb-[21px]">
        <img className="w-full h-full rounded-full " src="images/person.png" alt="person" />
      </div>
      <div className="image-text">
        <Link to="#" className="text-xl font-medium font-slab text-black">Monalisa Ashley</Link>
        <h4 className="text-[14px] font-medium text-[#7b7b7b] mb-[15px] p-[4px 20px] mt-[15px] font-poppins">Ui/Ux Designer</h4>
      </div>
      <div className="social-info mb-[30px] flex gap-[17px] ">
        <SocialButton icons={<FaFacebookF className="text-[#1773ea]" />}/>
        <SocialButton icons={<FaTwitter className="text-[#0d6efd]" />}/>
        <SocialButton icons={<FaInstagram className="text-[#e12a72]" />}/>
        <SocialButton icons={<FaLinkedinIn className="text-[#144679]" />}/>
      </div>
      <div className="btn">
        <Link to="#" className="text-lg font-normal text-[#f3f6f6] py-3 px-[30px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] rounded-[30px] flex justify-between items-center leading-[27px]"><FaDownload className="mr-[5px]"/>Download Cv</Link>
      </div>
    </div>
    </>
  )
}
