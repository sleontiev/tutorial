import React from 'react';
import vkLogo from './img/vk.png';
import youtubeLogo from './img/youtube.png';
import fbLogo from './img/fb.png';
export default () => (
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
);
