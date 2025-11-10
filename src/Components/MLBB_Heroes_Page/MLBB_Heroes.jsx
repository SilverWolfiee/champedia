import React, { useState } from "react";
import "./MLBB_Heroes.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";
import eudoraImg from "../../assets/images/heroes/eudora.png";
import esmeraldaImg from "../../assets/images/heroes/esmeralda.png";
import xborgIMG from "../../assets/images/heroes/xborg.png";
import terizlaIMG from "../../assets/images/heroes/terizla.png";
import zilongIMG from "../../assets/images/heroes/zilong.png";
import lingIMG from "../../assets/images/heroes/ling.png";
import atlasIMG from "../../assets/images/heroes/atlas.png";
import josephIMG  from "../../assets/images/heroes/joseph.png";
import ocepIMG from "../../assets/images/heroes/ocep.png";

const MLBB_Heroes = () => {
  const [filter, setFilter] = useState("All");

  const heroes = [
    { name: "Eudora", img: eudoraImg, role: "Mage", lane: "Mid", region: "Moniyan" },,
    { name: "Esmeralda", img: esmeraldaImg, role: "Fighter", lane: "EXP", region: "Moniyan" },
    { name: "Xborg", img: xborgIMG, role: "Fighter", lane: "EXP", region: "Moniyan" },
    { name: "Terizla", img: terizlaIMG, role: "Figther", lane: "EXP", region: "Moniyan" },
    { name: "Zilong", img: zilongIMG, role: "Mage", lane: "EXP", region: "Moniyan" },
    { name: "Ling", img: lingIMG, role: "Mage", lane: "EXP", region: "Moniyan" },
    { name: "Atlas", img: atlasIMG, role: "Mage", lane: "EXP", region: "Moniyan" },
    { name: "Joseph", img: josephIMG, role: "Mage", lane: "EXP", region: "Moniyan" },
    { name: "Andreas", img: ocepIMG, role: "Mage", lane: "EXP", region: "Moniyan" },
  ];

  // Optional: filter logic for Role/Lane/Region
  const filteredHeroes = heroes.filter((hero) => {
    if (filter === "All") return true;
    return (
      hero.role === filter ||
      hero.lane === filter ||
      hero.region === filter
    );
  });

  return (
    <div className="heroes-page">
      <div className="heroes-header">
        <img
          src={mlbbBanner}
          alt="Mobile Legends Logo"
          className="heroes-logo"
        />

        <div className="heroes-filters">
          {["All", "Role", "Lane", "Region"].map((btn) => (
            <button
              key={btn}
              className={`filter-btn ${filter === btn ? "active" : ""}`}
              onClick={() => setFilter(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        <h2 className="heroes-title">All Heroes</h2>
      </div>

      <div className="heroes-grid">
        {filteredHeroes.map((hero, index) => (
          <div className="hero-card" key={index}>
            <img src={hero.img} alt={hero.name} />
            <div className="hero-name">{hero.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MLBB_Heroes;