import React, { useState } from "react";
import "./MLBBItemsBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBItemsBE = ({theme}) => {

    const [items, setItems] = useState([]);

    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editItemID, setEditItemID] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const [newItem, setNewItem] = useState({
        item_name: "",
        item_type: "",
        item_description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleItemImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewItem({ ...newItem, item_image: imageURL });
        }
    };

    const handleAddItem = () => {
        if (!newItem.item_name || !newItem.item_type || !newItem.item_description) {
            alert("Please fill in all fields.");
            return;
        }

        const newItemData = {
            ...newItem,
            item_id: items.length + 1,
        };

        setItems([...items, newItemData]);
        setShowForm(false);
    };

    const handleEdit = (item_id) => {
        const item = items.find((i) => i.item_id === item_id);
        if (item) {
            setEditItemID(item_id);
            setNewItem(item);
            setIsEditing(true);
            setShowForm(true);
        }
    };

    const handleUpdateItem = () => {
        setItems(
            items.map((i) =>
                i.item_id === editItemID ? { ...i, ...newItem } : i
            )
        );
        closeForm();
    };

    const handleRemove = (item_id) => {
        setItemToDelete(item_id);
        setShowConfirmation(true);
    };

    const confirmRemove = () => {
        setItems(items.filter((i) => i.item_id !== itemToDelete));
        setShowConfirmation(false);
        setItemToDelete(null);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsEditing(false);
        setEditItemID(null);
        setNewItem({
            item_name: "",
            item_type: "",
            item_description: "",
        });
    };

    return (
        <div className={`items-page ${theme}`}>
            {/* Header */}
            <header className="header">
                <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
                <nav className="nav-tabs">
                    <button className="nav-btn" onClick={() => setShowForm(true)}>
                        Add Item +
                    </button>
                    {["Attack", "Defense", "Magic", "Movement", "Jungle", "Roaming", "All"].map((category) => (
                        <button key={category} className="nav-btn">
                            {category}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <h1 className="region-title">Items</h1>
            </main>

            {/* Table Section */}
            <section className="results">
                <div className="results-section">
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                {items.length > 0 && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {items.length === 0 ? (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>
                                        No items added yet.
                                    </td>
                                </tr>
                            ) : (
                                items.map((row) => (
                                    <tr key={row.item_id}>
                                        <td>{row.item_id}</td>
                                        <td>
                                            <div className="team-cell">
                                            <img
                                            src={row.item_image}
                                            alt={row.item_name}
                                            className="team-icon"
                                            />
                                            <span>{row.item_name}</span>
                                        </div>
                                        </td>
                                        <td>{row.item_type}</td>
                                        <td>{row.item_description}</td>
                                        <td>
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(row.item_id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="remove-btn"
                                                onClick={() => handleRemove(row.item_id)}
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
                        <h2>{isEditing ? "Edit Item" : "Add New Item"}</h2>

                        <div className="form-group">
                        <label>Item Name:</label>
                        <input name="item_name" value={newItem.item_name} onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                        <label>Item Type:</label>
                        <input name="item_type" value={newItem.item_type} onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                        <label>Description:</label>
                        <textarea name="item_description" value={newItem.item_description} onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Item Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleItemImageChange}
                            />
                            {newItem.item_image && (
                                <div className="image-preview">
                                    <img src={newItem.item_image} alt="Preview" />
                                </div>
                            )}
                        </div>

                        <div className="modal-actions">
                            <button
                                className="add-btn"
                                onClick={isEditing ? handleUpdateItem : handleAddItem}
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
                        <p>Are you sure you want to remove this item?</p>
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

export default MLBBItemsBE;