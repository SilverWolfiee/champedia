import React from "react";
import "./TeamsPage.css";

// === Indonesia Logos ===
import bigetron from "../../assets/images/mlbb_teams/bigetron.png";
import alterego from "../../assets/images/mlbb_teams/alterego.png";
import onic from "../../assets/images/mlbb_teams/onic.png";
import rrq from "../../assets/images/mlbb_teams/rrq.png";
import evos from "../../assets/images/mlbb_teams/evos.png";
import navi from "../../assets/images/mlbb_teams/navi.png";
import geekfam from "../../assets/images/mlbb_teams/geekfam.png";
import teamliquidid from "../../assets/images/mlbb_teams/teamliquid.png";
import dewaunited from "../../assets/images/mlbb_teams/dewaunited.png";
import paparrex from "../../assets/images/mlbb_teams/prx.png";

// === Philippines Logos ===
import apbren from "../../assets/images/mlbb_teams/apbren.png";
import aurora from "../../assets/images/mlbb_teams/aurora.png";
import onicph from "../../assets/images/mlbb_teams/onicph.png";
import omega from "../../assets/images/mlbb_teams/omega.png";
import tnc from "../../assets/images/mlbb_teams/tnc.png";
import falcons from "../../assets/images/mlbb_teams/falcons.png";
import twisted from "../../assets/images/mlbb_teams/twisted.png";
import teamliquidph from "../../assets/images/mlbb_teams/teamliquid.png";

// === Header Banner ===
import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const teamsData = {
  Indonesia: [
     {
      name: "ALTER EGO",
      logo: alterego,
      players: [
        { name: "Nino", role: "Gold" },
        { name: "Yazukee", role: "Roam" },
        { name: "Hijumee", role: "Mid" },
        { name: "Arfy", role: "EXP" },
        { name: "Alekk", role: "Jungle" },
      ],
    },
    {
      name: "ONIC",
      logo: onic,
      players: [
        { name: "Kairi", role: "Jungle" },
        { name: "CW", role: "Gold" },
        { name: "Butsss", role: "EXP" },
        { name: "SamoHt", role: "Roam" },
        { name: "Drian", role: "Mid" },
      ],
    },
    { name: "RRQ Hoshi #7", logo: rrq },
    { name: "EVOS", logo: evos },
    { name: "NATUS VINCERE ID", logo: navi },
    { name: "GEEK FAM", logo: geekfam },
    { name: "TEAM LIQUID ID", logo: teamliquidid },
    { name: "DEWA UNITED", logo: dewaunited },
    { name: "PRX", logo: paparrex },
  ],
  Philippines: [
    { name: "AP.BREN", logo: apbren },
    { name: "AURORA GAMING", logo: aurora },
    { name: "ONIC PH", logo: onicph },
    { name: "OMEGA ESPORTS", logo: omega },
    { name: "TNC PRO TEAM", logo: tnc },
    { name: "TEAM FALCONS PH", logo: falcons },
    { name: "TWISTED MINDS PH", logo: twisted },
    { name: "TEAM LIQUID PH", logo: teamliquidph },
  ],
  SGU: [
    { name: "BIGETRON", logo: bigetron },
    { name: "ALTER EGO", logo: alterego },
    { name: "ONIC", logo: onic },
    { name: "RRQ Hoshi #7", logo: rrq },
    { name: "EVOS", logo: evos },
    { name: "NATUS VINCERE ID", logo: navi },
    { name: "GEEK FAM", logo: geekfam },
    { name: "TEAM LIQUID ID", logo: teamliquidid },
    { name: "DEWA UNITED", logo: dewaunited },
    { name: "PRX", logo: paparrex },
  ],
};

const TeamsPage = ({ theme }) => {
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
        <h1 className="region-title">Southeast Asia</h1>

        {Object.keys(teamsData).map((country) => (
          <section key={country} className="country-section">
            <h2 className="country-title">{country}</h2>
            <div className="team-grid">
              {teamsData[country].map((team) => (
                <div key={team.name} className="team-card">
                  <img src={team.logo} alt={team.name} className="team-logo" />
                  <p className="team-name">{team.name}</p>

                  {/* Hover panel */}
                  <div className="player-popup">
                    <h4>{team.name}</h4>
                    <table className="player-table">
                      <tbody>
                        {team.players?.map((player, index) => (
                        <tr key={index}>
                          <td className="flag">🇮🇩</td>
                          <td className="player-name">{player.name}</td>
                          <td className="role">{player.role}</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>

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

export default TeamsPage;
