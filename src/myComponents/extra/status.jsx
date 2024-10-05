import React from 'react'
import { Link } from 'react-router-dom'
import statusImage from "./status.png"
import "./status.css"

export const Status = () => {
    return (
        <div id='status'>
            <img src={statusImage} alt="" />
            <div id='status-container'>
                <h1>404</h1>
                <div className='status-para'>
                    <p>Aha! You see! You can be wrong!</p>
                    <p>(or it could be us)...</p>
                </div>
                <div className='status-para'>
                    <p>...either way you should probably</p>
                    <Link to="/">go back to the home page</Link>
                </div>
            </div>
        </div>
    )
}
