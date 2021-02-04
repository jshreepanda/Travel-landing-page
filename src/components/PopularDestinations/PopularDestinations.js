import React from 'react';
import './PopularDestinations.scss'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/7.jpg'

const PopularDestinations = () => {
    return (
        <div className="Populardestination">
            <div className="wrapper">
                <div className="textarea">
                    <h2>Popular Destination</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident voluptates quae est eligendi rerum earum omnis deleniti saepe possimus.</p>
                </div>
                <div className="imagegallery">
                    <div className='image'><img src={image1} alt="India 1" /> <span>India</span></div>
                    <div className='image'><img src={image2} alt="Greece 2" /><span>Greece</span></div>
                    <div className='image'><img src={image3} alt="Peru 3" /><span>Peru</span></div>
                    <div className='image'><img src={image4} alt="Norway 4" /><span>Norway</span></div>
                    <div className='image'><img src={image5} alt="London 5" /><span>London</span></div>
                    <div className='image'><img src={image6} alt="Switzerland 6" /><span>Switzerland</span></div>
                </div>
            </div>
        </div>
    )
}

export default PopularDestinations
