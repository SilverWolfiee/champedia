import React from "react";
import "./OGT_ML.css";
import { useNavigate } from "react-router-dom";

import mplPH from "../../../assets/images/mplph.png";
import mplID from "../../../assets/images/mplid.png";
import mplMY from "../../../assets/images/mplmy.png";
import mplSG from "../../../assets/images/mplsg.png";

const OGT_ML = () => {
  const navigate = useNavigate();

  const tournaments = [
    { name: "MPL Philippines", img: mplPH },
    { name: "MPL Indonesia", img: mplID, path: "/Mplid" },
    { name: "MPL Malaysia", img: mplMY },
    { name: "MPL Singapore", img: mplSG },
  ];

  return (
    <section className="ongoing-section">
      <div className="line" />
      <h2 className="ongoing-title">On Going Tournaments</h2>

      <div className="ongoing-logos">
        {tournaments.map((t, index) => (
          <img
            key={index}
            src={t.img}
            alt={t.name}
            onClick={() => t.path && navigate(t.path)}
            style={{ cursor: t.path ? "pointer" : "default" }}
          />
        ))}
      </div>
    </section>
  );
};

export default OGT_ML;