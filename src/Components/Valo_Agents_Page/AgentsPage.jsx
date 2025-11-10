import React from "react";
import "./AgentsPage.css";

// === Controller ===
import astraImage from "../../assets/images/valo_agents/astra.png";
import omenImage from "../../assets/images/valo_agents/omen.png";
import cloveImage from "../../assets/images/valo_agents/clove.png";
import brimstoneImage from "../../assets/images/valo_agents/brimstone.png";
import viperImage from "../../assets/images/valo_agents/viper.png";
import harborImage from "../../assets/images/valo_agents/harbor.png";
// === Duelist ===
import jettImage from "../../assets/images/valo_agents/jett.png";
import neonImage from "../../assets/images/valo_agents/neon.png";
import razeImage from "../../assets/images/valo_agents/raze.png";
import yoruImage from "../../assets/images/valo_agents/yoru.png";
import waylay from "../../assets/images/valo_agents/waylay.png";
import phoenixImage from "../../assets/images/valo_agents/phoenix.png";
import reynaImage from "../../assets/images/valo_agents/reyna.png";
import isoImage from "../../assets/images/valo_agents/iso.png";
// === Initiator ===
import breachImage from "../../assets/images/valo_agents/breach.png";
import fadeImage from "../../assets/images/valo_agents/fade.png";
import gekkoImage from "../../assets/images/valo_agents/gekko.png";
import kayoImage from "../../assets/images/valo_agents/kayo.png";
import skyeImage from "../../assets/images/valo_agents/skye.png";
import sovaImage from "../../assets/images/valo_agents/sova.png";
import tejoImage from "../../assets/images/valo_agents/tejo.png";
// === Sentinel ===
import chamberImage from "../../assets/images/valo_agents/chamber.png";
import cypherImage from "../../assets/images/valo_agents/cypher.png";
import deadlockImage from "../../assets/images/valo_agents/deadlock.png";
import killjoyImage from "../../assets/images/valo_agents/killjoy.png";
import sageImage from "../../assets/images/valo_agents/sage.png";
import vetoImage from "../../assets/images/valo_agents/veto.png";
import vyseImage from "../../assets/images/valo_agents/vyse.png";
// === Header Banner ===
import valoBanner from "../../assets/images/valo_logo.png";

const itemsData = {
  Controller: [
    { name: "Astra", logo: astraImage }, 
    { name: "Omen", logo: omenImage },
    { name: "Clove", logo: cloveImage },
    { name: "Brimstone", logo: brimstoneImage },
    { name: "Viper", logo: viperImage },
    { name: "Harbor", logo: harborImage },
  ],
  Duelist: [
    { name: "Jett", logo: jettImage },
    { name: "Neon", logo: neonImage },
    { name: "Raze", logo: razeImage },
    { name: "Yoru", logo: yoruImage },
    { name: "Waylay", logo: waylay },
    { name: "Phoenix", logo: phoenixImage },
    { name: "Reyna", logo: reynaImage },
    { name: "Iso", logo: isoImage },
  ],
  Initiator: [
    { name: "Breach", logo: breachImage },
    { name: "Fade", logo: fadeImage },
    { name: "Gekko", logo: gekkoImage },
    { name: "Kayo", logo: kayoImage },
    { name: "Skye", logo: skyeImage },
    { name: "Sova", logo: sovaImage },
    { name: "Tejo", logo: tejoImage },
  ],
  Sentinel: [
    { name: "Chamber", logo: chamberImage },
    { name: "Cypher", logo: cypherImage },
    { name: "Deadlock", logo: deadlockImage },
    { name: "Killjoy", logo: killjoyImage },
    { name: "Sage", logo: sageImage },
    { name: "Veto", logo: vetoImage },
    { name: "Vyse", logo: vyseImage },
  ]
};

const AgentsPage = ({ theme }) => {
  return (
    <div className={`teams-page ${theme}`}>
      {/* Header */}
      <header className="header">
        <img src={valoBanner} alt="Mobile Legends" className="header-logo" />
        <nav className="nav-tabs">
          {["Duelist", "Initiator", "Sentinel", "Controller", "All"].map(
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
        <h1 className="region-title">Agents</h1>

        {Object.keys(itemsData).map((country) => (
          <section key={country} className="country-section">
            <h2 className="country-title">{country}</h2>
            <div className="team-grid">
              {itemsData[country].map((team) => (
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

export default AgentsPage;