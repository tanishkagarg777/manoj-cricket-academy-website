import React from 'react'
import "./social.css"

export const Social = () => {
    return (
        <>
            <section id="social">
                <h1>Let's Stay Connected</h1>
                <p>
                    <a href="tel:+91-951-811-6959" target="_blank" rel="noreferrer">
                        <span><i className="fa-solid fa-phone "></i></span>
                    </a>
                    <a href="mailto:mcacricket00@gmail.com?Subject=My%20Query" target="_blank" rel="noreferrer">
                        <span><i className="fa-solid fa-envelope "></i></span>
                    </a>
                    <a href="http://www.instagram.com/mca.cricket" target="_blank" rel="noreferrer">
                        <span><i className="fa-brands fa-instagram "></i></span>
                    </a>
                    <a href="https://wa.me/919518116959" target="_blank" rel="noreferrer">
                        <span><i className="fa-brands fa-whatsapp "></i></span>
                    </a>
                </p>
            </section>
        </>
    )
}
