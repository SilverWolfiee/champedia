import React from "react";
import "./MLBBTour.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

import mplid from "../../assets/images/mlbb_tour_logos/mplid.png";

const recentTours = [
    { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
    { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
    { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
    { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
    { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
]

const sTierTours = [
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "A", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "A", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "A", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
]

const bcTierTours = [
   { Tier: "B", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "B", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "C", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "B", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "C", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "C", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "B", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
]

const qualiTours = [
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "Q", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
]

const otherTours = [
   { Tier: "B", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "A", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "C", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
   { Tier: "S", Tournament: "MPL Indonesia Season 16", logo: mplid, Location: "Jakarta", Date: "Aug 22 - Nov 2, 2025", Prizepool: "$292,110.32" },
]


const MLBBTour = ({theme}) => {
    return (
        <div className={`mlbb-tour ${theme}`}>

            {/* HEADER */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                {["Recent", "S Tier", "A Tier", "B Tier", "C Tier", "Qualifier", "Other", "All"].map(
                    (region) => (
                    <button key={region} className="nav-btn">
                        {region}
                    </button>
                    )
                )}
                </nav>
            </header>

            {/* MAIN CONTENT */}
            <main className="main-content">
                <h1 className="region-title">Tournaments</h1>
            </main>

            {/* RECENT TOURS */}
            <section className="tournament-results">


            <div className="results-section">
                <h3 className="results-subtitle">Recent Tournaments</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Prizepool</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTours.map((row) => (
                    <tr key={row.Tournament}>
                        <td>{row.Tier}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.Tournament} className="team-icon" />
                            <span>{row.Tournament}</span>
                            </div>
                        </td>
                        <td>{row.Location}</td>
                        <td>{row.Date}</td>
                        <td>{row.Prizepool}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>

            {/* S AND A Tier */}
            <section className="tournament-results">


            <div className="results-section">
                <h3 className="results-subtitle">S & A Tier Tournaments</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Prizepool</th>
                    </tr>
                </thead>
                <tbody>
                    {sTierTours.map((row) => (
                    <tr key={row.Tournament}>
                        <td>{row.Tier}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.Tournament} className="team-icon" />
                            <span>{row.Tournament}</span>
                            </div>
                        </td>
                        <td>{row.Location}</td>
                        <td>{row.Date}</td>
                        <td>{row.Prizepool}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>

            {/* B AND C Tier */}
            <section className="tournament-results">


            <div className="results-section">
                <h3 className="results-subtitle">B & C Tier Tournaments</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Prizepool</th>
                    </tr>
                </thead>
                <tbody>
                    {sTierTours.map((row) => (
                    <tr key={row.Tournament}>
                        <td>{row.Tier}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.Tournament} className="team-icon" />
                            <span>{row.Tournament}</span>
                            </div>
                        </td>
                        <td>{row.Location}</td>
                        <td>{row.Date}</td>
                        <td>{row.Prizepool}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>

            {/* B AND C Tier */}
            <section className="tournament-results">


            <div className="results-section">
                <h3 className="results-subtitle">Qualifier Tournaments</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Prizepool</th>
                    </tr>
                </thead>
                <tbody>
                    {qualiTours.map((row) => (
                    <tr key={row.Tournament}>
                        <td>{row.Tier}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.Tournament} className="team-icon" />
                            <span>{row.Tournament}</span>
                            </div>
                        </td>
                        <td>{row.Location}</td>
                        <td>{row.Date}</td>
                        <td>{row.Prizepool}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>

            {/* other */}
            <section className="tournament-results">


            <div className="results-section">
                <h3 className="results-subtitle">Other & Pass Tournaments</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Prizepool</th>
                    </tr>
                </thead>
                <tbody>
                    {otherTours.map((row) => (
                    <tr key={row.Tournament}>
                        <td>{row.Tier}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.Tournament} className="team-icon" />
                            <span>{row.Tournament}</span>
                            </div>
                        </td>
                        <td>{row.Location}</td>
                        <td>{row.Date}</td>
                        <td>{row.Prizepool}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>


        </div>
    );
};

export default MLBBTour;