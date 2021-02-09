import React from 'react'
import './RecentTrip.scss'
import image1 from '../../images/blog1.jpg';
import image2 from '../../images/blog4.jpg'
import image3 from '../../images/blog3.jpg'

const RecentTrip = () => {
    return (
        <div className="RecentTrip">
            <div className="wrapper">
                <h3 className='Title'>Recent Trips</h3>
                <div className="Journies">
                    <div className="SingleJourney">
                        <img className='image' src={image1} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <a href="/"><h3>Jobs fill your pockets, adventures fill your soul</h3></a>
                    </div>
                    <div className="SingleJourney">
                        <img className='image' src={image2} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <a href="/"><h3>Travel is the only thing you buy that makes you richer</h3></a>
                    </div>
                    <div className="SingleJourney">
                        <img className='image' src={image3} alt="abc" />
                        <span>Oct 12, 2019</span>
                        <a href="/"><h3>Travel. Your money will return. Your time won’t</h3></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentTrip
