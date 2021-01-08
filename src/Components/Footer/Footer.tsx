import React from 'react';
import './Footer.css';
import vkLogo from './image/vk.png';
import youtubeLogo from './image/youtube.png';
import fbLogo from './image/fb.png';

const Footer: () => JSX.Element = () => {
    return (
        <React.Fragment>
            <div className="footerContainer">
                <div className="socialLinks">
                    <a href="#"><img src={vkLogo} alt=""/></a>
                    <a href="#"><img src={youtubeLogo} alt=""/></a>
                    <a href="#"><img src={fbLogo} alt=""/></a>
                </div>
            </div>
            <div className = "additional-info">
                <a href = "tel:+1234567"> 8 - (888) - 888 - 88 - 88 </a>
            </div>
        </React.Fragment>
    )
}

export default Footer