import React from 'react'
import "./aboutUs.css"
import image from "./pictures/1.png"

export const AboutUs = () => {
    return (
        <>
            <section id="campus-part2">
                <div id="campus-content-container">
                    <h4>
                        <div id="campus-line1"></div>About Us
                    </h4>
                    <h2>Improve Your Cricket Skills With Us</h2>
                    <p>We provide you best quality of teaching with NIS certified coaches.Our academy is for both boys and
                        girls.We
                        have Ranji Players and International Ground level System. We also provide you video analysis system for your better understanding.</p>
                    <h3>One To One Personal Coach Training</h3>
                </div>
                <img src={image} alt='' />
            </section>
        </>
    )
}
