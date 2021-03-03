import React from 'react'
import phone from "../../img/phone.svg"
import email from "../../img/email.svg"
import resume from "../../img/resume.svg"
import my_resume from "../../img/Justin-Lampe_resume_2021.pdf"
import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="my-info">
                <div className="info-el">
                    <img className="info-icon" src={phone} alt="a phone" />
                    <a href="tel:856-982-3258">856-982-3258</a>
                </div>
                <div className="info-el">
                    <img className="info-icon" src={email} alt="a phone" />
                    <a href="mailto:pierrelampre@gmail.com">pierrelampre@gmail.com</a>
                </div>
                <div className="info-el">
                    <img className="info-icon" src={resume} alt="a phone" />
                    <a href={my_resume} download>My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
