import React from "react";
import "./MLBBPlayers.css";




// === Indonesia Logos ===
import bigetron from "../../assets/images/mlbb_teams/bigetron.png";
import alterego from "../../assets/images/mlbb_teams/alterego.png";
import onic from "../../assets/images/mlbb_teams/onic.png";
import rrq from "../../assets/images/mlbb_teams/rrq.png";
import evos from "../../assets/images/mlbb_teams/evos.png";
import navi from "../../assets/images/mlbb_teams/navi.png";
import geekfam from "../../assets/images/mlbb_teams/geekfam.png";
import teamliquidid from "../../assets/images/mlbb_teams/teamliquid.png";
import dewaunited from "../../assets/images/mlbb_teams/dewaunited.png";
import paparrex from "../../assets/images/mlbb_teams/prx.png";

// === Country ===
import cambodia from "../../assets/images/country/cambodia.png";
import indonesia from "../../assets/images/country/indonesia.png";

// === Header Banner ===
import mlbbBanner from "../../assets/images/mplid.png";




// === DATABASES ===

const teamsData = [
  { name: "BIGETRON", logo: bigetron },
  { name: "ALTER EGO", logo: alterego },
  { name: "ONIC", logo: onic },
  { name: "RRQ Hoshi #7", logo: rrq },
  { name: "EVOS", logo: evos },
  { name: "NATUS VINCERE ID", logo: navi },
  { name: "GEEK FAM", logo: geekfam },
  { name: "TEAM LIQUID ID", logo: teamliquidid },
  { name: "DEWA UNITED", logo: dewaunited },
];

const SEAPlayers = [
    { country: "Cambodia", countryflag: cambodia, gameName: "ATEV", realName: "Ly Kimhong", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "ATM", realName: "Kosal Piseth", team: "Team Flash KH", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Abie", realName: "Chhaylim Kenary", team: "CFU Serendipity", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Aries", realName: null, team: "Team Max", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "BOXI", realName: "Sok Viera", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "BiiMo", realName: "Touch Dara Vid", team: "Team Max", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Boom", realName: "Ly Kimlong", team: "Duck Rice Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "BranTzy", realName: "Tep Sokthai", team: "See You Soon", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "C Cat", realName: "Sok Roth", team: "Galaxy Legends", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Celichma", realName: "Sour Mara", team: "Valhalla", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Cypher", realName: "Sokun Bunnalong", team: "Team Max", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "D7", realName: "Ty Oudom", team: "PRO Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Deja", realName: "Houn Chan Vicha", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Detective", realName: "Nhem Chandavan", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "EMBER", realName: "Seng Monyoudom", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "FaaFaa", realName: "Eavlan Loem", team: "CFU Serendipity", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Felix", realName: "Leng Kimhak", team: "PRO Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Flamezy", realName: "Lem Sochetra", team: "YBINGAME", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Fury", realName: "Vithou Sovisal", team: "Team Flash KH", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "HOUV", realName: "Lim Kimhouv", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Hakurai", realName: "Lim Bunhak", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "JingKang", realName: "You Chansela", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Layy", realName: "Hou Kimlay", team: "Team Max", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Linnn", realName: "Mean So Nalin", team: "Galaxy Legends", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "LuTu", realName: "Long Sokhornushah", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Luffy", realName: "Chum Mengly", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "MOSHII", realName: "Chanpisey Yong", team: "CFU Serendipity", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Naja", realName: "Heang Chheanglong", team: "Valhalla", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Oppi", realName: "Chhuon Phengkong", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Panha", realName: "Sok Panha", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "RUNN", realName: "Mon Phearun", team: "PRO Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Raa", realName: "Sovann Chanmakara", team: "See You Soon", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "SAA", realName: "Seng Rosa", team: "PRO Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "SENSEI", realName: "Keo Sokkheng", team: "See You Soon", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "SHADOW", realName: "Hy Meng Kong", team: "See You Soon", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Sakura", realName: "Say Siyon", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Sakzuuu", realName: "Sorm Panhasak", team: "Team Max", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Senpai", realName: "Chan Soksreng", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Sticcc", realName: null, team: "Duck Rice Esport", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Tegami", realName: "Rin Chanthana", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Tyyy", realName: "Tan Yuongty", team: "Team Flash KH", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "UEE", realName: "Ee Prum", team: "CFU Serendipity", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "WATT", realName: "Van Sothyvath", team: null, status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Wadu", realName: "Vann Dane", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "WayOfTheShadow", realName: "Pich Sopheak", team: "ROY Esports", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Wickyy", realName: null, team: "Galaxy Legends", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Xingg", realName: "Khoun Amey", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "YuiFendi", realName: "Maraty Ol", team: "CFU Serendipity", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Zee", realName: "Cheang Piseth", team: "CFU Gaming", status: "active" },
    { country: "Cambodia", countryflag: cambodia, gameName: "Zeroo", realName: "Phou Vinthalong", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "A B O Y", realName: "Valent Agriansyah Putra", team: "Geek Fam ID", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "AMYY", realName: "Fahmi Fadillah", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "AeronnShikii", realName: "Sultan Muhammad", team: "Team Liquid ID", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Aether", realName: "Jason Keane Zefanya", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Agatha", realName: "Angelia Agatha", team: "Falcons Vega", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Alberto", realName: "Juan Alberto Hasudungan", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Alberttt", realName: "Albert Neilsen Iskandar", team: "EVOS", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Alin", realName: "Asti Adnyaswari", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Altamiz", realName: "Ibnu Shabri Muttaqin", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Anavel", realName: "Junisen Young Lo", team: "Rare Atom", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Ando", realName: "Brandon Lijaya", team: "GPX", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Anna", realName: "Ivana Tjahjono", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Antimage", realName: "Maxhill Leonardo", team: "EVOS", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Aran", realName: "Aldhia Fahmi Aranda", team: "Team Liquid ID", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Arfy", realName: "Arifudin Dingarai", team: "Alter Ego", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Ash", realName: "Delvia Ivana", team: "EVOS Holy Fury", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Audycs", realName: "Zulfikar", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "AyamJAGO", realName: "Try Widyanto Sukardi", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "AzeR", realName: "Reza Kurniawan", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Azumi", realName: "Mega Lestari", team: "Kuda Terbang", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Azuraa", realName: "Rohib Bingkas Pambudi", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "B1RUL", realName: "Alvi Birrul", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Babywww", realName: "Farel Rustjo", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Badboy", realName: "Felix Davide", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bajan", realName: "Raihan Delvino Ardy", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Banana", realName: "Andre Raymond Putra", team: "RRQ Hoshi", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "BayMax", realName: "Rizki", team: "Pendekar Esports", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Benji", realName: "Septaza Arga Firhansyah", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bill", realName: "Nabila Putri Ghaisani", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bottle", realName: "I Gusti Pramana Cipta Dita", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bouy", realName: "Boy Ramadhan Junior", team: "ONIC Prime", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Brandt", realName: "Alrazali", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Branz", realName: "Jabran Bagus Wiloko", team: "EVOS", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bryann", realName: "Anugrah Vebryantama", team: "Geek Fam ID Jr", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Bunnyqt", realName: "Muhammad Safril Saifuddin", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Butsss", realName: "Muhammad Satrya Sanubari", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Caderaa", realName: "Mohammad Dwi Chandra Pambudi", team: "Geek Fam ID", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Caid", realName: "Raihan Said", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Caramel", realName: "Violetta Aurelia", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Cardo", realName: "Ricardo Fajarlay", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Celiboy", realName: "Eldin Rahadian Putra", team: "Alter Ego X", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Chell", realName: "Michelle Denise Siswanto", team: "Team Vitality", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Chenn", realName: "Arron Fernaus", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Chincaaw", realName: "Destria Chinca Dewi", team: "Falcons Vega", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Chood", realName: "Gilby Pangemanan", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Chr1sphobia", realName: "Chrisman Agus Siagian", team: "Holy Esports", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Ciko", realName: "Marsiko Adi", team: "RRQ Sena", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Cinny", realName: "Cindy Laurent Siswanto", team: "Team Vitality", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Ckim", realName: "Miftach Fauzan Hakim", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Claw Kun", realName: "Adriansyah Baihaqi Lesmana", team: "Team Vamos", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Clayyy", realName: "Deden Muhammad Nurhasan", team: "RRQ Hoshi", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Clover", realName: "Hafizhan Hidayatullah Mirzaputra", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Cr1te", realName: "Muhammad Nur Efandy Yusuf", team: "EVOS Holy", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Crunchyy", realName: "Helena Rengka", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Cyruz", realName: "Muhammad Halim", team: "Alter Ego", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Daniel", realName: "Daniel Ibel Ferdinand Wagey", team: "Kagendra", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Dannqt", realName: "Muhammad Nurhamdan", team: "ONIC Prime", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Darkness", realName: "Novan Reimond Lumingkewas", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Deee", realName: "Dhiwa Zulpiqar", team: "CG Esports", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Donkey", realName: "Yurino Putra Angkawidjaja", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Donn", realName: "Ramadhoni", team: "Rare Atom", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Doyok", realName: "Tantyo Aditya", team: null, status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "DreamS", realName: "Rachmad Wahyudi", team: "Alter Ego", status: "active" },
    { country: "Indonesia", countryflag: indonesia, gameName: "Drian", realName: "Adriand Larsen Wong", team: null, status: "active" },
];





const MLBBPlayers = ({ theme }) => {
  return (
    <div className={`teams-page ${theme}`}>
        <header className="header">
        <img src={mlbbBanner} alt="Mobile Legends" className="header-logo" />
        <nav className="nav-tabs">
          {["SEA", "Asia", "EMEA", "South America", "North America", "China", "All"].map(
            (region) => (
              <button key={region} className="nav-btn">
                {region}
              </button>
            )
          )}
        </nav>
      </header>

        {/* Main Content */}
        <main className="main-content">
            <h1 className="region-title">Players</h1>

        

            {/* Southeast Asia */}

            <section className="tournament-results">
            <h2 className="country-title">Southeast Asia</h2>
            
            <div className="results-section">
                <h3 className="results-subtitle">Cambodia</h3>
                <table className="results-table">
                <thead>
                    <tr>
                    <th>Country</th>
                    <th>Game Name</th>
                    <th>Real Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody> 
                    {SEAPlayers.map((row) => (
                    <tr key={row.country}>
                        <td><div className="team-cell">
                            <img src={row.countryflag} alt={row.countryflag} className="team-icon" />
                            <span>{row.country}</span></div></td>
                        <td>{row.gameName}</td>
                        <td>{row.realName}</td>
                        <td>
                            <div className="team-cell">
                            <img src={row.logo} alt={row.team} className="team-icon" />
                            <span>{row.team}</span>
                            </div>
                        </td>
                        <td>{row.status}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            
            </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Champedia — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MLBBPlayers;