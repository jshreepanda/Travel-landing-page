import React from 'react'
import './Testimonials.scss'
import image1 from '../../images/user1.jpg'

const Testimonials = () => {
    return (
        <div className="Testimonials">
            <div className="wrapper">
                <div className="User-image">
                    <img className='image' src={image1} alt="user1" />
                </div>
                <div className="Text-area">
                    <p className='comment'>"Working in conjunction with humanitarian aid agencies,
            we have supported programmes to help alleviate human suffering.</p>
                    <span className='name'>- Jhon Smith</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
