import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"

export const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="footer-div" id='site-name'>
                    <h2>Manoj Cricket Academy</h2>
                    <p>Regardless of what is your current level now, after visiting our Academy sessions you will be at the top
                        of your playing conditions!</p>
                </div>

                <div className="footer-div" id="navigation">
                    <h2>Quick Links</h2>
                    <p>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/campus'>Campus</NavLink>
                        <NavLink to='/why-us'>Why Choose Us</NavLink>
                        <NavLink to='/reach-us'>Reach Us</NavLink>
                    </p>
                </div>

                <div className="footer-div" id='footer-mail'>
                    <h2>Contact Info</h2>
                    <p>Link Road, Nh-9 Near Hansi Water works, 2, Dhani Kutubpur Rd, Hansi, Haryana</p>
                    <a href="mailto:mcacricket00@gmail.com?Subject=My%20Query" target="_blank" rel="noreferrer"><p>mcacricket00@gmail.com</p></a>
                </div>

                <div className="footer-div" id="footer-hours">
                    <h2>Opening Hours</h2>
                    <ul>
                        <p>Fri-Tue: 4:00pm – 7:30pm</p>
                        <p>Wednesday: Closed</p>
                        <p>Thursday: Closed</p>
                    </ul>
                </div>
            </section>
            <div id='madeby'>Made By: <a href="https://tgdesigners.in" target="_blank" rel="noreferrer">Tg Designers</a></div>

            <div id="footer2">
                <p>
                    www.manojcricketacademy.in &copy;| All rights reserved!
                </p>
            </div>
        </>
    )
}
