import React from "react"
import Profile from "../profpic.png"
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-picture" src={Profile} alt="me"/>
                </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-me-heading">Hi! Im LJ!</h1>

                    <p> I am a tenacious, self-motivated, and results-oriented individual capable of conducting or completing work independently, and in group settings. A factotum using strong multitasking, organizational, and communication skills to manage to tasks.</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe
