import React from "react";
import "./Sport.css";
import basketballImage from "../../../assets/images/basketball.png";
import motogpImage from "../../../assets/images/motogp.png";
import f1Image from "../../../assets/images/f1.png";
import badmintonImage from "../../../assets/images/badminton.png";

export const SportChoicesBackEnd = ({ theme }) => {
  const sports = [
    { id: 1, name: "MotoGP", image: "" },
    { id: 2, name: "Formula 1", image: "" },
    { id: 3, name: "Badminton", image: "" },
    { id: 4, name: "Basketball", image: "" },
  ];

  return (
    <div className={`sport-choices ${theme}`}>
      <div className="line" />
      <h2 className="section-title">Sports</h2>
      
      <div className="sport-list">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-item">
            <div className="image-sport">
                {sport.id === 1 && <img src={motogpImage} alt="MotoGP" />}
                {sport.id === 2 && <img src={f1Image} alt="Formula 1" />}
                {sport.id === 3 && <img src={badmintonImage} alt="Badminton" />}
                {sport.id === 4 && <img src={basketballImage} alt="Basketball" />}
            </div>
            <div className="sport-name">{sport.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportChoicesBackEnd;