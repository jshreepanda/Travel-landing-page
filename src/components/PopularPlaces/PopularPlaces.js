import React from 'react';
import './PopularPlaces.scss';
import image1 from '../../images/11.jpg'
import image2 from '../../images/12.jpg'
import image3 from '../../images/13.jpg'
import image4 from '../../images/14.jpg'
import image5 from '../../images/15.jpg'
import image6 from '../../images/17.jpg'


const PopularPlaces = () => {
    return (
        <div className="PopularPlaces">
            <div className="wrapper">
                <div className="textarea">
                    <h2>Popular Places</h2>
                    <p>Lorem ipsum dolor sit amet adipisicing elit. Commodi provident voluptates quae est eligendi rerum earum omnis deleniti saepe possimus.</p>
                </div>
                <div className="placesGallery">
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image1} alt="Rome" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Rome</h3>
                            <p>Italy</p>
                        </div>
                    </div>
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image2} alt="Japan" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Japan</h3>
                            <p>Japan</p>
                        </div>
                    </div>
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image3} alt="Paris" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Paris</h3>
                            <p>France</p>
                        </div>
                    </div>
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image4} alt="Dubai" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Dubai</h3>
                            <p>United Arab Emirates</p>
                        </div>
                    </div>
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image5} alt="Rome" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Rome</h3>
                            <p>Italy</p>
                        </div>
                    </div>
                    <div className="singlePlace">
                        <div className="imageBox"> <img className='image' src={image6} alt="Florence" /><span>$500</span></div>
                        <div className="textBox">
                            <h3>Florence</h3>
                            <p>Italy</p>
                        </div>
                    </div>
                </div>
                <div className='buttonHolder'>
                    <a className='btn' href="/">More Places</a>
                </div>
            </div>
        </div>
    )
}

export default PopularPlaces
