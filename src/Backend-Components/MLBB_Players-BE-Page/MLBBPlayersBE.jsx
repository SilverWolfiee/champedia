import react, { useState } from "react";
import "./MLBBPlayersBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBPlayersBE = ({theme}) => {
    const [ players, setPlayers ] = useState([
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editPlayerID, setEditPlayerID] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [playerToDelete, setPlayerToDelete] = useState(null);

    const [newPlayer, setNewPlayer] = useState({
        in_game_name: "",
        real_name: "",
        role: "",
        country: "",
        country_flag: "",
        team_id: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlayer({ ...newPlayer, [name]: value }); 
    };

    const handleFlagChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewPlayer({ ...newPlayer, country_flag: imageURL });
        }
    };

    const handleAddPlayer = () => {
        if (!newPlayer.in_game_name || !newPlayer.real_name || !newPlayer.role || !newPlayer.country) {
            alert("Please fill in all required fields.");
            return;
        }

        const newPlayerData = {
            ...newPlayer,
            player_id: players.length + 1,
        };

        setPlayers([...players, newPlayerData]);
        setShowForm(false);
    };

    const handleEdit = (player_id) => {
        const player = players.find((p) => p.player_id === player_id);
        if (player) {
            setEditPlayerID(player_id);
            setNewPlayer(player);
            setIsEditing(true);
            setShowForm(true);
        }
    };

    const handleUpdatePlayer = () => {
        setPlayers(
            players.map((p) =>
                p.player_id === editPlayerID ? { ...p, ...newPlayer } : p
            )
        );
        closeForm();
    };

    const handleRemove = (player_id) => {
        setPlayerToDelete(player_id);
        setShowConfirmation(true);
    };

    const confirmRemove = () => {
        setPlayers(players.filter((p) => p.player_id !== playerToDelete));
        setShowConfirmation(false);
        setPlayerToDelete(null);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setEditPlayerID(null);
        setNewPlayer({
            in_game_name: "",
            real_name: "",
            role: "",
            region: "",
            country: "",
            country_flag: "",
            team_id: 1,
        });
    };


    return (
        <div className={`players-page ${theme}` }>
            
            {/* Header */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                <button className="nav-btn" onClick={() => setShowForm(true)}>
                    Add Player +
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
                <h1 className="region-title">Players Database</h1>
            </main>

            {/* Table */}
            <section className="results">
                <div className="results-section">
                    <table className="results-table">
                        <thead>
                        <tr>
                            <th>Player ID</th>
                            <th>In-Game Name</th>
                            <th>Real Name</th>
                            <th>Role</th>
                            <th>Country</th>
                            <th>Team ID</th>
                            {players.length > 0 && <th>Actions</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {players.length === 0 ? (
                            <tr>
                            <td colSpan="8" style={{ textAlign: "center" }}>
                                No players added yet.
                            </td>
                            </tr>
                        ) : (
                            players.map((row) => (
                            <tr key={row.player_id}>
                                <td>{row.player_id}</td>
                                <td>{row.in_game_name}</td>
                                <td>{row.real_name}</td>
                                <td>{row.role}</td>
                                <td>
                                <div className="team-cell">
                                    <img
                                    src={row.country_flag}
                                    alt={row.country_flag}
                                    className="team-icon"
                                    />
                                    <span>{row.country}</span>
                                </div>
                                </td>
                                <td>{row.team_id}</td>
                                <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(row.player_id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(row.player_id)}
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
                    <h2>{isEditing ? "Edit Player" : "Add New Player"}</h2>

                    <div className="form-group">
                    <label>In-Game Name:</label>
                    <input name="in_game_name" value={newPlayer.in_game_name} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                    <label>Real Name:</label>
                    <input name="real_name" value={newPlayer.real_name} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                    <label>Role:</label>
                    <input name="role" value={newPlayer.role} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                    <label>Country:</label>
                    <input name="country" value={newPlayer.country} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                    <label>Country Flag:</label>
                    <input type="file" accept="image/*" onChange={handleFlagChange} />
                    {newPlayer.country_flag && (
                        <div className="flag-preview">
                        <img src={newPlayer.country_flag} alt="Preview" />
                        </div>
                    )}
                    </div>

                    <div className="form-group">
                    <label>Team ID:</label>
                    <input name="team_id" type="number" value={newPlayer.team_id} onChange={handleChange}/>
                    </div>

                    <div className="modal-actions">
                    <button
                        className="add-btn"
                        onClick={isEditing ? handleUpdatePlayer : handleAddPlayer}
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
                    <p>Are you sure you want to remove this player?</p>
                    <div className="modal-actions">
                    <button className="remove-btn" onClick={confirmRemove}>
                        Yes, Remove
                    </button>
                    <button
                        className="back-btn"
                        onClick={() => setShowConfirmation(false)}
                    >
                        Cancel
                    </button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default MLBBPlayersBE;