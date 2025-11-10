import React from "react";
import "./ValoTeams.css";

// === Pacific Logos ===
import boom from "../../assets/images/valo_teams/boom.png";
import dfm from "../../assets/images/valo_teams/dfm.png";
import drx from "../../assets/images/valo_teams/drx.png";
import ge from "../../assets/images/valo_teams/ge.png";
import geng from "../../assets/images/valo_teams/geng.png";
import nongshim from "../../assets/images/valo_teams/nongshim.png";
import prx from "../../assets/images/valo_teams/prx.png";
import rrq from "../../assets/images/valo_teams/rrq.png";
import t1 from "../../assets/images/valo_teams/t1.png";
import talon from "../../assets/images/valo_teams/talon.png";
import ts from "../../assets/images/valo_teams/ts.png";
import zeta from "../../assets/images/valo_teams/zeta.png";

// === Emea Logos ===
import bbl from "../../assets/images/valo_teams/bbl.png";
import fnatic from "../../assets/images/valo_teams/fnatic.png";
import fut from "../../assets/images/valo_teams/fut.png";
import giantx from "../../assets/images/valo_teams/giantx.png";
import kc from "../../assets/images/valo_teams/kc.png";
import movistarkoi from "../../assets/images/valo_teams/movistarkoi.png";
import navi from "../../assets/images/valo_teams/navi.png";
import teamheretics from "../../assets/images/valo_teams/teamheretics.png";
import teamliquid from "../../assets/images/valo_teams/teamliquid.png";
import teamvitality from "../../assets/images/valo_teams/teamvitality.png";
import gentlemates from "../../assets/images/valo_teams/gentlemates.png";
import apeks from "../../assets/images/valo_teams/apeks.png";

// === Americas Logo ===
import a100theives from "../../assets/images/valo_teams/100thieves.png";
import cloud9 from "../../assets/images/valo_teams/cloud9.png";
import evilgeniuses from "../../assets/images/valo_teams/evilgeniuses.png";
import furia from "../../assets/images/valo_teams/furia.png";
import kru from "../../assets/images/valo_teams/kru.png";
import leviathan from "../../assets/images/valo_teams/leviathan.png";
import loud from "../../assets/images/valo_teams/loud.png";
import mibr from "../../assets/images/valo_teams/mibr.png";
import nrg from "../../assets/images/valo_teams/nrg.png";
import sentinels from "../../assets/images/valo_teams/sentinels.png";
import g2 from "../../assets/images/valo_teams/g2.png";
import a2games from "../../assets/images/valo_teams/2game.png";

// === China Logo ===
import allgamers from "../../assets/images/valo_teams/allgamers.png";
import bilibili from "../../assets/images/valo_teams/bilibili.png";
import edwardgaming from "../../assets/images/valo_teams/edwardgaming.png";
import funplusphoenix from "../../assets/images/valo_teams/funplusphoenix.png";
import jdg from "../../assets/images/valo_teams/jdg.png";
import nova from "../../assets/images/valo_teams/nova.png";
import titan from "../../assets/images/valo_teams/titan.png";
import trace from "../../assets/images/valo_teams/trace.png";
import tyloo from "../../assets/images/valo_teams/tyloo.png";
import wolves from "../../assets/images/valo_teams/wolves.png";
import drg from "../../assets/images/valo_teams/drg.png";
import xlg from "../../assets/images/valo_teams/xlg.png";

// === Header Banner ===
import mlbbBanner from "../../assets/images/valo_logo.png";

const teamsData = {
  Pacific: [
    { name: "BOOM", logo: boom },
    { name: "DFM", logo: dfm },
    { name: "DRX", logo: drx },
    { name: "GE", logo: ge },
    { name: "Geng", logo: geng },
    { name: "Nongshim", logo: nongshim },
    { name: "PRX", logo: prx },
    { name: "RRQ", logo: rrq },
    { name: "T1", logo: t1 },
    { name: "TALON", logo: talon },
    { name: "TS", logo: ts },
    { name: "ZETA", logo: zeta },
  ],
  Emea: [
    { name: "BBL", logo: bbl },
    { name: "Fnatic", logo: fnatic },
    { name: "FUT", logo: fut },
    { name: "GiantX", logo: giantx },
    { name: "KC", logo: kc },
    { name: "MovistarKoi", logo: movistarkoi },
    { name: "Navi", logo: navi },
    { name: "Team Heretics", logo: teamheretics },
    { name: "Team Liquid", logo: teamliquid },
    { name: "Team Vitality", logo: teamvitality },
    { name: "Gentlemates", logo: gentlemates },
    { name: "APEKS", logo: apeks },
  ],
  Americas: [
    { name: "100 Theives", logo: a100theives },
    { name: "Cloud9", logo: cloud9 },
    { name: "Evil Geniuses", logo: evilgeniuses },
    { name: "Furia", logo: furia },
    { name: "KRU", logo: kru },
    { name: "Leviathan", logo: leviathan },
    { name: "LOUD", logo: loud },
    { name: "MIBR", logo: mibr },
    { name: "NRG", logo: nrg },
    { name: "Sentinels", logo: sentinels },
    { name: "G2 Esports", logo: g2 },
    { name: "2Games Esports", logo: a2games },
  ],
  China: [
    { name: "All Gamers", logo: allgamers },
    { name: "Bilibili", logo: bilibili },
    { name: "Edward Gaming", logo: edwardgaming },
    { name: "Funplus Phoenix", logo: funplusphoenix },
    { name: "JDG Esports", logo: jdg },
    { name: "Nova Esports", logo: nova },
    { name: "Titan Esports Club", logo: titan },
    { name: "Trace Esports", logo: trace },
    { name: "Tyloo", logo: tyloo },
    { name: "Wolves Esports", logo: wolves },
    { name: "Dragon Ranger Gaming", logo: drg },
    { name: "Xi Lai Gaming", logo: xlg },
  ],
    
};

const ValoTeamsPage = ({ theme }) => {
  return (
    <div className={`teams-page ${theme}`}>
      {/* Header */}
      <header className="header">
        <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
        <nav className="nav-tabs">
          {["SEA", "Asia", "EMEA", "South America", "North America", "China", "All"].map(
            (region) => (
              <button key={region} className="nav-btn">
                {region}
              </button>
            )
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="region-title">Teams</h1>

        {Object.keys(teamsData).map((country) => (
          <section key={country} className="country-section">
            <h2 className="country-title">{country}</h2>
            <div className="team-grid">
              {teamsData[country].map((team) => (
                <div key={team.name} className="team-card">
                  <img src={team.logo} alt={team.name} className="team-logo" />
                  <p className="team-name">{team.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Champedia — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ValoTeamsPage;