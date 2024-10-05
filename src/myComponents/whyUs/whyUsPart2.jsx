import React from 'react'
import "./whyUsPart2.css"
import image from "./1.png"

export const WhyUsPart2 = () => {
  return (
    <>
        <section id="why-us-part2">
        <div className="why-us-heading">
            <h4 className="why-us-sub-hdng">
                <div className="why-us-line"></div>Why Us
            </h4>
            <h2 className="why-us-main-hdng">Why Choose Us</h2>
        </div>
        <div id="why-us-main-container">
            <div>
                <p>- Ground Facility (80 x 65 m)</p>
                <p>- Drinking Water Facility</p>
                <p>- International 4 level Turf Wicket</p>
                <p>- Bowling Practice</p>
            </div>
            <img src={image} alt="" />
            <div>
                <p>- Training Under NIS Certified Coaches</p>
                <p>- Under 19 Matches</p>
                <p>- Batting Practice</p>
                <p>- All Precautions Taken</p>
            </div>
        </div>
    </section>
    </>
  )
}
