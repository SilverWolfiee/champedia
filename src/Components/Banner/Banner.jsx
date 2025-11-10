
import React from "react";
import slidingImage from "../../assets/images/MPLS16.png";
import "./Banner.css";

export const Banner = ({theme, setTheme}) => {
    
  return (
    <div className="banner">
      <p className="the-encyclopedia-of">
        <span className="span">The Encyclopedia of </span>
        <span className="text-wrapper-2">Sports</span>
        <span className="span"> and </span>
        <span className="text-wrapper-3">Esports</span>
        <span className="span"> Industry in The World</span>
      </p>
      
      <img className="sliding-image" alt="Sliding image" src={slidingImage} />
      
      <div className="search-container">
        <div className="search-bar">
          <span className="div"></span>
          <input type="text" placeholder="..." />
        </div>
        <button className="search-button">
          <div className="text-wrapper">Search</div>
        </button>
      </div>
    </div>
  );
};

export default Banner;