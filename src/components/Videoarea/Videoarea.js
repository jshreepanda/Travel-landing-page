import React from 'react';
import './Videoarea.scss';

const Videoarea = () => {
    return (
        <div className="VideoArea">
            <div className="Video-wrapper"><a className='video' href="/">Watch Video</a></div>
            <div className="Play-wrapper"> <i className="fa fa-play"></i></div>
        </div>
    )
}

export default Videoarea
