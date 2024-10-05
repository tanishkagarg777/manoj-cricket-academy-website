import React from 'react'
import "./whyUsPart3.css"
import image from "./3.jpg"

export const WhyUsPart3 = () => {
    return (
        <>
            <section id="why-us-part3">
                <div>
                    <h4 className="why-us-sub-hdng">
                        <div className="why-us-line"></div>Our Services
                    </h4>
                    <h2 className="why-us-main-hdng">What We Provide You</h2>

                    <div id="why-us-container">
                        <p>- Tournaments</p>
                        <p>- Video Analysis Training</p>
                        <p>- Net Practice</p>
                        <p>- Cricket Training</p>
                        <p>- Ground Practice</p>
                        <p>- Practice Match</p>
                        <p>- Leather Ball Provided</p>
                        <p>- Personal Coaches</p>
                        <p>- Bowling Machine</p>
                    </div>

                </div>
                <img src={image} alt="" />
            </section>
        </>
    )
}
