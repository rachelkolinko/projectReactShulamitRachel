import React from "react";
import '../css/imgHome.css';

function ImgHome({image}) {
    if (!image.imageUrl) return null;
    return (
        <img src={image.imageUrl} alt="תמונה" className="gallery-img" />
    )
}

export default ImgHome;