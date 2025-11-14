import React, { useState } from "react";
import "./MLBBToursBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBToursBE = ({ theme }) => {
    const [tournaments, setTournaments] = useState([
        {
            tournament_id: 1,
            tournament_name: "M5 World Championship",
            tier: "S",
            region: "Global",
            location: "Manila, Philippines",
            date_start: "2025-11-01",
            date_end: "2025-11-15",
            prize_pool: "$900,000",
            tournament_logo: "",
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTournamentID, setEditTournamentID] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [tournamentToDelete, setTournamentToDelete] = useState(null);

    const [newTournament, setNewTournament] = useState({
        tournament_name: "",
        tier: "C",
        region: "",
        location: "",
        date_start: "",
        date_end: "",
        prize_pool: "",
        tournament_logo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTournament({ ...newTournament, [name]: value });
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewTournament({ ...newTournament, tournament_logo: imageURL });
        }
    };

    const handleAddTournament = () => {
        if (
            !newTournament.tournament_name ||
            !newTournament.region ||
            !newTournament.location ||
            !newTournament.date_start ||
            !newTournament.date_end ||
            !newTournament.prize_pool
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        const newTournamentData = {
            ...newTournament,
            tournament_id: tournaments.length + 1,
        };

        setTournaments([...tournaments, newTournamentData]);
        closeForm();
    };

    const handleEdit = (tournament_id) => {
        const tournament = tournaments.find((t) => t.tournament_id === tournament_id);
        if (tournament) {
            setEditTournamentID(tournament_id);
            setNewTournament(tournament);
            setIsEditing(true);
            setShowForm(true);
        }
    };

    const handleUpdateTournament = () => {
        setTournaments(
            tournaments.map((t) =>
                t.tournament_id === editTournamentID ? { ...t, ...newTournament } : t
            )
        );
        closeForm();
    };

    const handleRemove = (tournament_id) => {
        setTournamentToDelete(tournament_id);
        setShowConfirmation(true);
    };

    const confirmRemove = () => {
        setTournaments(tournaments.filter((t) => t.tournament_id !== tournamentToDelete));
        setShowConfirmation(false);
        setTournamentToDelete(null);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setEditTournamentID(null);
        setNewTournament({
            tournament_name: "",
            tier: "C",
            region: "",
            location: "",
            date_start: "",
            date_end: "",
            prize_pool: "",
            tournament_logo: "",
        });
    };

    return (
        <div className={`tournaments-page ${theme}`}>
            {/* Header */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                    <button className="nav-btn" onClick={() => setShowForm(true)}>
                        Add Tournament +
                    </button>
                    {["S", "A", "B", "C", "Q"].map((tier) => (
                        <button key={tier} className="nav-btn">
                            Tier {tier}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h1 className="region-title">Tournaments</h1>
            </main>

            {/* Table */}
            <section className="results">
                <div className="results-section">
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Tier</th>
                                <th>Region</th>
                                <th>Location</th>
                                <th>Dates</th>
                                <th>Prize Pool</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tournaments.length === 0 ? (
                                <tr>
                                    <td colSpan="10" style={{ textAlign: "center" }}>
                                        No tournaments added yet.
                                    </td>
                                </tr>
                            ) : (
                                tournaments.map((row) => (
                                    <tr key={row.tournament_id}>
                                        <td>{row.tournament_id}</td>
                                        <td>
                                            {row.tournament_logo ? (
                                                <img
                                                    src={row.tournament_logo}
                                                    alt="Tournament Logo"
                                                    className="team-icon"
                                                />
                                            ) : (
                                                "—"
                                            )}
                                        </td>
                                        <td>{row.tournament_name}</td>
                                        <td>{row.tier}</td>
                                        <td>{row.region}</td>
                                        <td>{row.location}</td>
                                        <td>
                                            {row.date_start} - {row.date_end}
                                        </td>
                                        <td>{row.prize_pool}</td>
                                        <td>
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(row.tournament_id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="remove-btn"
                                                onClick={() => handleRemove(row.tournament_id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Add / Edit Modal */}
            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{isEditing ? "Edit Tournament" : "Add New Tournament"}</h2>

                        <div className="form-group">
                            <label>Tournament Name:</label>
                            <input
                                name="tournament_name"
                                value={newTournament.tournament_name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Tier:</label>
                            <select
                                name="tier"
                                value={newTournament.tier}
                                onChange={handleChange}
                            >
                                {["S", "A", "B", "C", "Q"].map((tier) => (
                                    <option key={tier} value={tier}>
                                        {tier}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Region:</label>
                            <input
                                name="region"
                                value={newTournament.region}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Location:</label>
                            <input
                                name="location"
                                value={newTournament.location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Date Start:</label>
                            <input
                                type="date"
                                name="date_start"
                                value={newTournament.date_start}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Date End:</label>
                            <input
                                type="date"
                                name="date_end"
                                value={newTournament.date_end}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Prize Pool:</label>
                            <input
                                name="prize_pool"
                                value={newTournament.prize_pool}
                                onChange={handleChange}
                                placeholder="$500,000"
                            />
                        </div>

                        <div className="form-group">
                            <label>Tournament Logo:</label>
                            <input type="file" accept="image/*" onChange={handleLogoChange} />
                            {newTournament.tournament_logo && (
                                <div className="logo-preview">
                                    <img src={newTournament.tournament_logo} alt="Preview" />
                                </div>
                            )}
                        </div>

                        <div className="modal-actions">
                            <button
                                className="add-btn"
                                onClick={isEditing ? handleUpdateTournament : handleAddTournament}
                            >
                                {isEditing ? "Update" : "Add"}
                            </button>
                            <button className="back-btn" onClick={closeForm}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm Delete Modal */}
            {showConfirmation && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to remove this tournament?</p>
                        <div className="modal-actions">
                            <button className="remove-btn" onClick={confirmRemove}>
                                Yes, Remove
                            </button>
                            <button className="back-btn" onClick={() => setShowConfirmation(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MLBBToursBE;
