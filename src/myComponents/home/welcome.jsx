import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./welcome.css"

export const Welcome = () => {
    const navigate = useNavigate();
    // function changeBg() {
    //     const images = [
    //         'url("./pictures/1.png") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/2.png") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/3.png") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/4.png") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/5.jpg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/6.png") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/7.jpg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/8.jpeg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/9.jpeg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/10.jpeg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/11.jpeg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/12.jpeg") rgba(0, 0, 0, 0.5)',
    //         'url("./pictures/13.jpeg") rgba(0, 0, 0, 0.5)',
    //     ]

    //     const section = document.getElementById("home");
    //     const bg = images[Math.floor(Math.random() * images.length)];
    //     section.style.background = bg;
    // }

    // setInterval(changeBg, 10000);

    return (
        <>
            <section id="home">
                <div id="home-content-container">
                    <div className="line"></div>
                    <div id="home-part1">
                        <h2>Welcome to</h2>
                        <h1>Manoj Cricket Academy</h1>
                        <p>Wanna Learn Cricket ? Here are we to make you a cricket champion with our mindblowing facilities.Improve your skills with us.</p>
                        <a onClick={() => navigate('/reach-us')}><button id="home-btn">Join Now</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
