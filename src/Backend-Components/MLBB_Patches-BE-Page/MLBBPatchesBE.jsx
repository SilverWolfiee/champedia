import React, { useState } from "react";
import "./MLBBPatchesBE.css";

import mlbbBanner from "../../assets/images/mlbb_teams/mlbb_banner.png";

const MLBBPatchesBE = () => {
  const [patches, setPatches] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editPatchID, setEditPatchID] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [patchToDelete, setPatchToDelete] = useState(null);

  const [newPatch, setNewPatch] = useState({
    patch_version: "",
    release_date: "",
    highlights: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatch({ ...newPatch, [name]: value });
  };

  const handleAddPatch = () => {
    if (!newPatch.patch_version || !newPatch.release_date || !newPatch.highlights) {
      alert("Please fill in all fields.");
      return;
    }

    const newPatchData = {
      ...newPatch,
      patch_id: patches.length + 1,
    };

    setPatches([...patches, newPatchData]);
    closeForm();
  };

  const handleEdit = (patch_id) => {
    const patch = patches.find((p) => p.patch_id === patch_id);
    if (patch) {
      setEditPatchID(patch_id);
      setNewPatch(patch);
      setIsEditing(true);
      setShowForm(true);
    }
  };

  const handleUpdatePatch = () => {
    setPatches(
      patches.map((p) =>
        p.patch_id === editPatchID ? { ...p, ...newPatch } : p
      )
    );
    closeForm();
  };

  const handleRemove = (patch_id) => {
    setPatchToDelete(patch_id);
    setShowConfirmation(true);
  };

  const confirmRemove = () => {
    setPatches(patches.filter((p) => p.patch_id !== patchToDelete));
    setShowConfirmation(false);
    setPatchToDelete(null);
  };

  const closeForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditPatchID(null);
    setNewPatch({
      patch_version: "",
      release_date: "",
      highlights: "",
    });
  };

  return (
    <div className="patches-page">
      {/* Header */}
      <div className="header">
        <img src={mlbbBanner} alt="MLBB Banner" className="header-logo" />
        <div className="nav-tabs">
          <button className="nav-btn" onClick={() => setShowForm(true)}>
            Add Patch
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="region-title">Manage Patches</h2>

        <table className="results-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patch</th>
              <th>Release Date</th>
              <th>Highlights</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patches.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No patches added yet.
                </td>
              </tr>
            ) : (
              patches.map((p) => (
                <tr key={p.patch_id}>
                  <td>{p.patch_id}</td>
                  <td>{p.patch_version}</td>
                  <td>{p.release_date}</td>
                  <td className="highlights-cell">
                    {p.highlights.split("\n").map((line, i) => (
                      <div key={i}>- {line}</div>
                    ))}
                  </td>
                  <td>
                    <button className="add-btn" onClick={() => handleEdit(p.patch_id)}>
                      Edit
                    </button>
                    <button className="back-btn" onClick={() => handleRemove(p.patch_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditing ? "Edit Patch" : "Add Patch"}</h2>

            <div className="form-group">
              <label>Patch Version</label>
              <input
                type="text"
                name="patch_version"
                value={newPatch.patch_version}
                onChange={handleChange}
                placeholder="e.g., Patch 1.1"
              />
            </div>

            <div className="form-group">
              <label>Release Date</label>
              <input
                type="text"
                name="release_date"
                value={newPatch.release_date}
                onChange={handleChange}
                placeholder="e.g., September 5, 2025"
              />
            </div>

            <div className="form-group">
              <label>Highlights (Use new line for each point)</label>
              <textarea
                name="highlights"
                rows="5"
                value={newPatch.highlights}
                onChange={handleChange}
                placeholder="- Hero Adjustments&#10;- Item Changes&#10;- Bug Fixes"
              />
            </div>

            <div className="modal-actions">
              <button
                className="add-btn"
                onClick={isEditing ? handleUpdatePatch : handleAddPatch}
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

      {/* Delete Confirmation Modal */}
      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this patch?</p>
            <div className="modal-actions">
              <button className="back-btn" onClick={confirmRemove}>
                Yes
              </button>
              <button className="add-btn" onClick={() => setShowConfirmation(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MLBBPatchesBE;
