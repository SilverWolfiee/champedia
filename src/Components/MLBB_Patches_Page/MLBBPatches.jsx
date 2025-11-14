import React from "react";
import "./MLBBPatches.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const patches = [
  { patch: "Patch 1.0", date: "August 22, 2025", highlights: "- Hero Adjustments\n- Equipment Adjustments\n- Emblem Adjustments\n- Battle Spells Adjustments" },
  { patch: "Patch 1.1", date: "September 5, 2025", highlights: "- Hero Balancing\n- New Hero Release\n- UI Improvements\n- Bug Fixes" },
  { patch: "Patch 1.2", date: "October 12, 2025", highlights: "- Item Balancing\n- Emblem Adjustments\n- Map Optimization" },
];

const MLBBPatches = ({ theme }) => {
    return (
        <div className={`mlbb-patches ${theme}`}>

        {/* === HEADER === */}
        <header className="patches-header">
            <img src={mlbbBanner} alt="Mobile Legends" className="patches-header-logo" />
        </header>

        {/* === OVERVIEW SECTION === */}
        <section className="patches-overview">
            <h2 className="patches-title">Patch Overview</h2>
            <div className="patches-overview-box">
            <p>
                Patches are regular game updates that shape Mobile Legends’ evolving meta through balance adjustments, bug fixes, and new content.
            </p>
            <p><strong>These updates usually include:</strong></p>
            <ul>
                <li>Heroes</li>
                <li>Equipments</li>
                <li>Emblems</li>
                <li>Battle Spells</li>
            </ul>
            </div>
        </section>

        {/* === MAIN TITLE === */}
        <main className="patches-main">
            <h1 className="patches-main-title">Recent Patches</h1>
        </main>

        {/* === PATCHES TABLE === */}
        <section className="patches-table-section">
            <div className="patches-table-wrapper">
            <table className="patches-table">
                <thead>
                <tr>
                    <th>Patch</th>
                    <th>Release Date</th>
                    <th>Highlights</th>
                </tr>
                </thead>
                <tbody>
                {patches.map((row, index) => (
                    <tr key={index}>
                    <td>{row.patch}</td>
                    <td>{row.date}</td>
                    <td>
                        {row.highlights.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                        ))}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </section>
        </div>
    );
};

export default MLBBPatches;

