import React from 'react'
import "./index.css"
// import bgPhoto from "./bgPhoto.png";
import bgPhotoMask from "./bgPhotoMask.png";

function ImageBanner() {
    return (
        <div className="banner">
            {/* <img className="banner__image" src={bgPhoto} alt="banner" /> */}
            <div className="banner__contentBox">
                <p className="banner__date">23 MARCH 2021</p>
                <h1 className="banner__title">Commercial Banking open for business.</h1>
                <h2 className="banner__subtitle">Odyssey Bank is pleased to announce the expansion of its Commercial Banking</h2>

            </div>
            <img className="banner__imageMask" src={bgPhotoMask} alt="banner" />
        </div>
    )
}

export default ImageBanner
