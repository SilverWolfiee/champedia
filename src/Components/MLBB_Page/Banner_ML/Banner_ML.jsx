import React from "react";
import "./Banner_ML.css";
import { useNavigate } from "react-router-dom";

import mlbbBanner from "../../../assets/images/mlbb_banner.png";
import teamsImg from "../../../assets/images/mlbb_teams.png";
import playersImg from "../../../assets/images/mlbb_players.png";
import tournamentsImg from "../../../assets/images/mlbb_tournaments.png";
import heroesImg from "../../../assets/images/mlbb_heroes.png";
import equipmentsImg from "../../../assets/images/mlbb_equipments.png";
import patchesImg from "../../../assets/images/mlbb_patches.png";

const items = [
  { id: 1, name: "Teams", image: teamsImg, path: "/TeamsPage" },
  { id: 2, name: "Players", image: playersImg, path: "/PlayersPage" },
  { id: 3, name: "Tournaments", image: tournamentsImg, path: "/MLBBTour" },
  { id: 4, name: "Heroes", image: heroesImg, path: "/MLBB_Heroes" },
  { id: 5, name: "Equipments", image: equipmentsImg, path: "/ItemsPage" },
  { id: 6, name: "Patches and Updates", image: patchesImg },
];

const BannerML = ({ theme }) => {
  const navigate = useNavigate();
  return (
    <div className={`bannerMl ${theme}`}>
      <div className="mainBanner">
        <img src={mlbbBanner} alt="MLBB Banner" />
      </div>

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

export default BannerML;
