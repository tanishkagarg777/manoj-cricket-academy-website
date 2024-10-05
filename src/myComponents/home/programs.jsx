import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./programs.css"
import Service1 from "./pictures/prog1.jpg"
import Service2 from "./pictures/prog2.jpg"
import Service3 from "./pictures/prog3.jpg"

export const Programs = () => {
    const navigate = useNavigate();

    return (
        <>
            <section id="program">
                <div id="prog-part1">
                    <h1>Our Facilities</h1>
                    <div className="line"></div>
                </div>
                <div id="prog-part2">
                    <div className="prog-box" id='box1'>
                        <h1>Net Practice</h1>
                        <img src={Service1} alt="" />
                        <a onClick={() => navigate('/why-us')}><button>Learn More</button></a>
                    </div>
                    <div className="prog-box" id='box2'>
                        <h1>Tournaments</h1>
                        <img src={Service2} alt="" />
                        <a onClick={() => navigate('/why-us')}><button>Learn More</button></a>
                    </div>
                    <div className="prog-box" id='box3'>
                        <h1>Practice Matches</h1>
                        <img src={Service3} alt="" />
                        <a onClick={() => navigate('/why-us')}><button>Learn More</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
