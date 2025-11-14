import React, { useState } from "react";
import "./MLBBTeamsBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBTeamsBE = ({theme}) => {
    const [teams, setTeams] = useState([
        {
        team_id: 1,
        team_name: "Blacklist International",
        team_nickname: "BLCK",
        team_logo: "",
        region: "SEA",
        country: "Philippines",
        status: "Active",
        },
        {
        team_id: 2,
        team_name: "Team Liquid",
        team_nickname: "TL",
        team_logo: "",
        region: "SEA",
        country: "Philippines",
        status: "Active",
        },
        {
        team_id: 3,
        team_name: "Team Secret",
        team_nickname: "TS",
        team_logo: "",
        region: "SEA",
        country: "Philippines",
        status: "Active",
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTeamID, setEditTeamID] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [teamToDelete, setTeamToDelete] = useState(null);

    const [newTeam, setNewTeam] = useState({
        team_name: "",
        team_nickname: "",
        region: "",
        country: "",
        status: "Active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTeam({ ...newTeam, [name]: value });
        };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewTeam({ ...newTeam, team_logo: imageURL });
        }
    };

    const handleAddTeam = () => {
        if (!newTeam.team_name || !newTeam.team_nickname || !newTeam.region || !newTeam.country) {
            alert("Please fill all required fields!");
            return;
        }

        const newTeamData = {
            ...newTeam,
            team_id: teams.length + 1,
        };

        setTeams([...teams, newTeamData]);
        setShowForm(false);
    };
    

    const handleEdit = (team_id) => {
        const team = teams.find((t) => t.team_id === team_id);
        if (team) {
            setEditTeamID(team_id);
            setNewTeam(team);
            setIsEditing(true);
            setShowForm(true);
        }
    };

    const handleUpdateTeam = () => {
        setTeams(
        teams.map((t) =>
            t.team_id === editTeamID ? { ...t, ...newTeam } : t
        )
        );
        closeForm();
    };

    const handleRemove = (team_id) => {
        setTeamToDelete(team_id);
        setShowConfirmation(true);
    };

    const confirmRemove = () => {
        setTeams(teams.filter((t) => t.team_id !== teamToDelete));
        setShowConfirmation(false);
        setTeamToDelete(null);
    }

    const closeForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setEditTeamID(null);
        setNewTeam({
            team_name: "",
            team_nickname: "",
            team_logo: "",
            region: "",
            country: "",
            status: "Active",
        });
    };

    return (
        <div className={`teams-page ${theme}`}>

            {/* Header */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                <button className="nav-btn" onClick={() => setShowForm(true)}>
                    Add Team +
                </button>
                {["SEA", "Asia", "EMEA", "South America", "North America", "China", "All"].map((region) => (
                    <button key={region} className="nav-btn">
                        {region}
                    </button>
                ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h1 className="region-title">Teams Database</h1>
            </main>

            {/* Table */}
            <section className="tournament-results">
                <div className="results-section">
                    <table className="results-table">
                        <thead>
                        <tr>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th>Team Nickname</th>
                            <th>Team Logo</th>
                            <th>Region</th>
                            <th>Country</th>
                            <th>Status</th>
                            {teams.length > 0 && <th>Actions</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {teams.length === 0 ? (
                            <tr>
                            <td colSpan="8" style={{ textAlign: "center" }}>
                                No teams added yet.
                            </td>
                            </tr>
                        ) : (
                            teams.map((row) => (
                            <tr key={row.team_id}>
                                <td>{row.team_id}</td>
                                <td>{row.team_name}</td>
                                <td>{row.team_nickname}</td>
                                <td>
                                <div className="team-cell">
                                    <img
                                    src={row.team_logo}
                                    alt={row.team_name}
                                    className="team-icon"
                                    />
                                    <span>{row.team_name}</span>
                                </div>
                                </td>
                                <td>{row.region}</td>
                                <td>{row.country}</td>
                                <td>{row.status}</td>
                                <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(row.team_id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(row.team_id)}
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
                <h2>{isEditing ? "Edit Team" : "Add New Team"}</h2>

                <div className="form-group">
                <label>Team Name:</label>
                <input name="team_name" value={newTeam.team_name} onChange={handleChange} />
                </div>

                <div className="form-group">
                <label>Team Nickname:</label>
                <input name="team_nickname" value={newTeam.team_nickname} onChange={handleChange} />
                </div>

                <div className="form-group">
                <label>Region:</label>
                <input name="region" value={newTeam.region} onChange={handleChange} />
                </div>

                <div className="form-group">
                <label>Country:</label>
                <input name="country" value={newTeam.country} onChange={handleChange} />
                </div>

                <div className="form-group">
                <label>Team Logo:</label>
                <input type="file" accept="image/*" onChange={handleLogoChange} />
                {newTeam.team_logo && (
                    <div className="logo-preview">
                    <img src={newTeam.team_logo} alt="Preview" />
                    </div>
                )}
                </div>

                <div className="modal-actions">
                <button
                    className="add-btn"
                    onClick={isEditing ? handleUpdateTeam : handleAddTeam}
                >
                    {isEditing ? "Update" : "Add"}
                </button>
                <button className="back-btn" onClick={closeForm}>
                    Back
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
                <p>Are you sure you want to remove this team?</p>
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

export default MLBBTeamsBE;