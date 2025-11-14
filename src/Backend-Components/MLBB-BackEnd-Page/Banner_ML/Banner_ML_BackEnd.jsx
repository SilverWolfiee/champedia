import React from "react";
import "./Banner_ML_BackEnd.css";
import { useNavigate } from "react-router-dom";


import teamsImg from "../../../assets/images/mlbb_teams.png";
import playersImg from "../../../assets/images/mlbb_players.png";
import tournamentsImg from "../../../assets/images/mlbb_tournaments.png";
import heroesImg from "../../../assets/images/mlbb_heroes.png";
import equipmentsImg from "../../../assets/images/mlbb_equipments.png";
import patchesImg from "../../../assets/images/mlbb_patches.png";

const items = [
  { id: 1, name: "Teams", image: teamsImg, path: "/mlbb_teams_BE" },
  { id: 2, name: "Players", image: playersImg, path: "/mlbb_players_BE" },
  { id: 3, name: "Tournaments", image: tournamentsImg, path: "/mlbb_tours_BE" },
  { id: 4, name: "Heroes", image: heroesImg, path: "/mlbb_heroes_BE" },
  { id: 5, name: "Equipments", image: equipmentsImg, path: "/mlbb_items_BE" },
  { id: 6, name: "Patches and Updates", image: patchesImg, path: "/mlbb_patches_BE" },
];

const BannerML_BackEnd = ({ theme }) => {
  const navigate = useNavigate();
  return (
    <div className={`bannerMl ${theme}`}>
      <h1>MLBB Admin Portal</h1>

      <div className="gridContainer">
        {items.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => navigate(item.path)}
            >
            <img src={item.image} alt={item.name} />
            <div className="cardLabel">{item.name}</div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default BannerML_BackEnd;
