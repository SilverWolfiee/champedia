import React, { useState } from "react";
import "./MLBBHeroesBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBHeroesBE = ({ theme }) => {
    const [heroes, setHeroes] = useState([
        {
            hero_id: 1,
            hero_name: "Gusion",
            hero_role: "Assassin",
            hero_description: "A fast burst assassin who excels in mobility and high damage.",
        },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editHeroID, setEditHeroID] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [heroToDelete, setHeroToDelete] = useState(null);

    const [newHero, setNewHero] = useState({
        hero_name: "",
        hero_role: "",
        hero_description: "",
    });

    // Handle form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHero({ ...newHero, [name]: value });
    };

    // Handle image upload
    const handleHeroImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewHero({ ...newHero, hero_image: imageURL });
        }
    };

    // Add new hero
    const handleAddHero = () => {
        if (!newHero.hero_name || !newHero.hero_role || !newHero.hero_description) {
            alert("Please fill in all required fields.");
            return;
        }

        const newHeroData = {
            ...newHero,
            hero_id: heroes.length + 1,
        };

        setHeroes([...heroes, newHeroData]);
        setShowForm(false);
        resetForm();
    };

    // Edit hero
    const handleEdit = (hero_id) => {
        const hero = heroes.find((h) => h.hero_id === hero_id);
        if (hero) {
            setEditHeroID(hero_id);
            setNewHero(hero);
            setIsEditing(true);
            setShowForm(true);
        }
    };

    // Update hero
    const handleUpdateHero = () => {
        setHeroes(
            heroes.map((h) =>
                h.hero_id === editHeroID ? { ...h, ...newHero } : h
            )
        );
        closeForm();
    };

    // Remove hero
    const handleRemove = (hero_id) => {
        setHeroToDelete(hero_id);
        setShowConfirmation(true);
    };

    // Confirm remove
    const confirmRemove = () => {
        setHeroes(heroes.filter((h) => h.hero_id !== heroToDelete));
        setShowConfirmation(false);
        setHeroToDelete(null);
    };

    // Close and reset
    const closeForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setEditHeroID(null);
        resetForm();
    };

    const resetForm = () => {
        setNewHero({
            hero_name: "",
            hero_role: "",
            hero_description: "",
            hero_image: "",
        });
    };

    return (
        <div className={`heroes-page ${theme}`}>
            {/* Header */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                    <button className="nav-btn" onClick={() => setShowForm(true)}>
                        Add Hero +
                    </button>
                    {["All", "Assassin", "Fighter", "Mage", "Marksman", "Tank", "Support"].map((role) => (
                        <button key={role} className="nav-btn">
                            {role}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h1 className="region-title">Heroes</h1>
            </main>

            {/* Table */}
            <section className="results">
                <div className="results-section">
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Hero ID</th>
                                <th>Hero Name</th>
                                <th>Role</th>
                                <th>Description</th>
                                {heroes.length > 0 && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {heroes.length === 0 ? (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>
                                        No heroes added yet.
                                    </td>
                                </tr>
                            ) : (
                                heroes.map((row) => (
                                    <tr key={row.hero_id}>
                                        <td>{row.hero_id}</td>
                                        <td>
                                            <div className="team-cell">
                                            <img
                                            src={row.hero_image}
                                            alt={row.hero_name}
                                            className="team-icon"
                                            />
                                            <span>{row.hero_name}</span>
                                        </div>
                                        </td>
                                        <td>{row.hero_role}</td>
                                        <td>{row.hero_description}</td>
                                        <td>
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(row.hero_id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="remove-btn"
                                                onClick={() => handleRemove(row.hero_id)}
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

            {/* Add/Edit Modal */}
            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{isEditing ? "Edit Hero" : "Add New Hero"}</h2>

                        <div className="form-group">
                            <label>Hero Name:</label>
                            <input
                                name="hero_name"
                                value={newHero.hero_name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Role:</label>
                            <select
                                name="hero_role"
                                value={newHero.hero_role}
                                onChange={handleChange}
                            >
                                <option value="">Select Role</option>
                                <option value="Assassin">Assassin</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Mage">Mage</option>
                                <option value="Marksman">Marksman</option>
                                <option value="Tank">Tank</option>
                                <option value="Support">Support</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Description:</label>
                            <textarea
                                name="hero_description"
                                value={newHero.hero_description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Hero Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleHeroImageChange}
                            />
                            {newHero.hero_image && (
                                <div className="image-preview">
                                    <img src={newHero.hero_image} alt="Preview" />
                                </div>
                            )}
                        </div>

                        <div className="modal-actions">
                            <button
                                className="add-btn"
                                onClick={isEditing ? handleUpdateHero : handleAddHero}
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
                        <p>Are you sure you want to remove this hero?</p>
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

export default MLBBHeroesBE;
