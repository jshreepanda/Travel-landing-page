import React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
    return (
        <div className="newsletter" id="newsletter">
            <div className="wrapper">
                <div className="text">
                    <h2>Subscribe Our Newsletter</h2>
                    <p>Subscribe newsletter to get offers and about new places to discover.</p>
                </div>
                <div className="formnbtn">
                    <input className='field' type="text" placeholder="Your email" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
