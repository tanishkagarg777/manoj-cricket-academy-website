import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.css"

export const Navbar = () => {
    function mobileNav() {
        let part2 = document.getElementById("nav-part2");
        let part3 = document.getElementById("nav-part3");
        let navbar = document.getElementById("navbar");

        if (part2.style.visibility === 'visible' && part3.style.visibility === 'visible') {
            part2.style.visibility = 'hidden';
            part3.style.visibility = 'hidden';
            navbar.style.height = "5vh";
        }
        else {
            part2.style.visibility = 'visible';
            part3.style.visibility = 'visible';
            navbar.style.height = "auto";
        }
    }

    function scrollFunction() {
        let part2 = document.getElementById("nav-part2");
        let part3 = document.getElementById("nav-part3");

        if ((document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) && part2.style.visibility === 'visible' && part3.style.visibility === 'visible') {
            document.getElementById("nav-burger").click();
        }
    }

    window.onscroll = function () { scrollFunction() };

    return (
        <>
            <section id="navbar">
                <div id="nav-part1">
                    <Link to="/">
                        <h2>MCA</h2>
                    </Link>
                    <div id="nav-burger" onClick={mobileNav}>
                        <div className="nav-burger-line"></div>
                        <div className="nav-burger-line"></div>
                        <div className="nav-burger-line"></div>
                    </div>
                </div>
                <div id="nav-part2">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/campus'>Campus</NavLink>
                    <NavLink to='/why-us'>Why Choose Us</NavLink>
                    <NavLink to='/reach-us'>Reach Us</NavLink>
                </div>
                <div id="nav-part3">
                    <a href="tel:+91-951-811-6959" target="_blank" rel="noreferrer">
                        <span><i className="fa-solid fa-phone "></i></span>
                    </a>
                    <a href="mailto:mcacricket00@gmail.com?Subject=My%20Query" target="_blank" rel="noreferrer">
                        <span><i className="fa-solid fa-envelope "></i></span>
                    </a>
                    <a href="https://www.instagram.com/mca.cricket" target="_blank" rel="noreferrer">
                        <span><i className="fa-brands fa-instagram "></i></span>
                    </a>
                    <a href="https://wa.me/919518116959" target="_blank" rel="noreferrer">
                        <span><i className="fa-brands fa-whatsapp "></i></span>
                    </a>
                </div>
            </section>
        </>
    )
}