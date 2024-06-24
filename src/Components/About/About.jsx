import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a frontend developer who bings figma mockups to life</p>
                    <p>My passion for frontend development </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h2>1+</h2>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="about-achievement">
                <h2>20+</h2>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h2>8+</h2>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About