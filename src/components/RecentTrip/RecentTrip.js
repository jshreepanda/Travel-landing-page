import React from 'react'
import './RecentTrip.scss'
import image1 from '../../images/blog1.jpg';
import image2 from '../../images/blog4.jpg'
import image3 from '../../images/blog3.jpg'

const RecentTrip = () => {
    return (
        <div className="RecentTrip" id="stories">
            <div className="wrapper">
                <h3 className='Title'>Travellers' Stories</h3>
                <div className="Journies">
                    <div className="SingleJourney">
                        <img className='image' src={image1} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <h3> <a href="/">Jobs fill your pockets, adventures fill your soul</a> </h3>
                    </div>
                    <div className="SingleJourney">
                        <img className='image' src={image2} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <h3> <a href="/">Jobs fill your pockets, adventures fill your soul</a> </h3>
                    </div>
                    <div className="SingleJourney">
                        <img className='image' src={image3} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <h3> <a href="/">Jobs fill your pockets, adventures fill your soul</a> </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentTrip
