import React from "react";
import "./ItemsPage.css";

// === Attack ===
import malefic_gun from "../../assets/images/mlbb_items/Malefic_Gun.png";
import great_dragon_spear from "../../assets/images/mlbb_items/Great_Dragon_Spear.webp";
import sea_halberd from "../../assets/images/mlbb_items/Sea_Halberd.webp";
import hunters_Strike from "../../assets/images/mlbb_items/Hunter_Strike.webp";
import blood_of_despair from "../../assets/images/mlbb_items/Blade_of_Despair.webp";
import blade_of_the_heptaseas from "../../assets/images/mlbb_items/Blade_of_the_Heptaseas.webp";
import windtalker from "../../assets/images/mlbb_items/Windtalker.webp";
import endless_battle from "../../assets/images/mlbb_items/Endless_Battle.webp";

// === Magic ===

// === Defense ===

// === Movement ===

// === Jungling ===

// === Roaming ===

// === Header Banner ===
import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const itemsData = {
  Attack: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
    
  ],
  Magic: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
  ],
  Defense: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
  ],
  Movement: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
  ],
  Jungling: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
  ],
  Roaming: [
    { name: "Malefic Gun", logo: malefic_gun },
    { name: "Great Dragon Spear", logo: great_dragon_spear },
    { name: "Sea Halberd", logo: sea_halberd },
    { name: "Hunters Strike", logo: hunters_Strike },
    { name: "Blood of Despair", logo: blood_of_despair },
    { name: "Blade of the Heptaseas", logo: blade_of_the_heptaseas },
    { name: "Windtalker", logo: windtalker },
    { name: "Endless Battle", logo: endless_battle },
  ]
};

const ItemsPage = ({ theme }) => {
  return (
    <div className={`teams-page ${theme}`}>
      {/* Header */}
      <header className="header">
        <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
        <nav className="nav-tabs">
          {["Attack", "Magic", "Defense", "Movement", "Jungling", "Roaming", "All"].map(
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
        <h1 className="region-title">Equipments</h1>

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
    </div>
  );
};

export default ItemsPage;
