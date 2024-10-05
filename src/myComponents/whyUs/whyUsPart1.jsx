import React from 'react'
import { Link } from 'react-router-dom'
import "./whyUsPart1.css"

export const WhyUsPart1 = () => {
    return (
        <>
            <section id="why-us-part1">
                <h1>We Value Your Dream And Money</h1>
                <Link to="/reach-us"><button>Get Started Now</button></Link>
            </section>
        </>
    )
}
