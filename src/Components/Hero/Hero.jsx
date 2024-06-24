import React from 'react'
import './Hero.css'
import profileImg from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
<img src={profileImg} alt="" />
<h1><span>I am Precious Bamawo,</span> a frontend developer</h1>
<p>I am a frontend developer who takes delight in crafting great user experience and accessibility for all kind of website user.</p>
<div className="hero-action">
  <div className="hero-connect">Connect with me</div>
  <div className="hero-resume">My Resume</div>
</div>
<p></p>
    </div>
  )
}

export default Hero