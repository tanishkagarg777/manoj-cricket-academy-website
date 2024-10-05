import React from 'react'
import "./recentPhotos.css"
import image1 from "./pictures/3.jpeg"
import image2 from "./pictures/4.jpeg"
import image3 from "./pictures/6.jpeg"
import image4 from "./pictures/7.jpeg"

export const RecentPhotos = () => {
    return (
        <>
            <section id="campus-part3">
                <h2>Latest Photos From Our Academy</h2>
                <div id="campus-line2"></div>
                <div id="recent-photos">
                    <img src={image1} alt='' />
                    <img src={image2} alt='' />
                    <img src={image3} alt='' />
                    <img src={image4} alt='' />
                </div>
            </section>
        </>
    )
}
