import React from 'react'
import { Link } from 'react-router-dom'
export const SocialButton = ({icons , iconLink}) => {
  return (
    <>
    <Link to={iconLink} className="w-10 h-10 bg-[#f3f6f6] rounded-lg flex justify-center items-center text-xl">{icons}</Link>
    </>
  )
}