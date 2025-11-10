import React from "react";
import "./OGT_Valo.css";

import vctpacific from "../../../assets/images/vctpacificlogo.png";
import vctamerica from "../../../assets/images/vctamerlogo.png";
import vctchina from "../../../assets/images/vctchinalogo.png";
import vcteurope from "../../../assets/images/vctemealogo.png";
import vctchallengers from "../../../assets/images/vctchallogo.png";
import vctmasters from "../../../assets/images/vctmasters.png";
import vctchampions from "../../../assets/images/vctchamp.png";

const OGT_Valo = () => {
    
    const tournaments = [
        { id: 1, name: "VCT Pacific", image: vctpacific },
        { id: 2, name: "VCT America", image: vctamerica },
        { id: 3, name: "VCT China", image: vctchina },
        { id: 4, name: "VCT Europe", image: vcteurope },
        { id: 5, name: "VCT Challengers", image: vctchallengers },
        { id: 6, name: "VCT Masters", image: vctmasters },
        { id: 7, name: "VCT Champions", image: vctchampions },
    ];
    
    return (
        <section className="ongoing-section">
            <div className="line" />
            <h2 className="ongoing-title">On Going Tournaments</h2>

            <div className = "ongoing-logos">
                {tournaments.map((t, index) => (
                    <img key={index} src={t.image} alt={t.name} />
                ))}
            </div>
        </section>
    );
};

export default OGT_Valo;