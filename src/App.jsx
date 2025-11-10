import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

import EsportChoices from './Components/Landing_Page/E-Sports/Esports';
import SportChoices from './Components/Landing_Page/Sports/Sport';
import Banner_ML from './Components/MLBB_Page/Banner_ML/Banner_ML';
import OGT_ML from './Components/MLBB_Page/On_Going_Tur_ML/OGT_ML';
import Matches_ML from './Components/MLBB_Page/Matches_ML/Matches_ML';
import MLBB_Heroes from './Components/MLBB_Heroes_Page/MLBB_Heroes';
import TeamsPage from './Components/MLBB_Teams_Page/TeamsPage';
import PlayersPage from './Components/MLBB_Players_Page/MLBBPlayers';
import ItemsPage from './Components/MLBB_Items_Page/ItemsPage';
import TournamentsPage from './Components/MLBB_Tour_Page/MLBBTour';
import Mplid from './Components/MLBB_MPLID/Mplid';

import BannerValo from './Components/Valo_Page/Banner_valo/Banner_valo';
import OGT_Valo from './Components/Valo_Page/On_Going_Tur_valo/OGT_Valo';
import Matches_Valo from './Components/Valo_Page/Matches_valo/Matches_Valo';
import Valo_Agents from './Components/Valo_Agents_Page/AgentsPage';
import ValoTeamsPage from './Components/Valo_Teams_Page/ValoTeams';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'dark');

  useEffect(() => {
  localStorage.setItem('current_theme', theme);
  const root = document.getElementsByTagName('html')[0];
  root.className = theme;
}, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Banner theme={theme} />
                <EsportChoices theme={theme} />
                <SportChoices theme={theme} />
              </>
            }
          />

          {/* MLBB Page */}
          <Route
            path="/mlbb"
            element={
              <>
                <Banner_ML theme={theme} />
                <OGT_ML theme={theme} />
                <Matches_ML theme={theme} />
            </>  
            }
          />
          
          <Route
            path="/mlbb_heroes"
            element={<MLBB_Heroes theme={theme} />}
          />

          <Route
            path="/PlayersPage"
            element={<PlayersPage theme={theme} />}
          />

          <Route
            path="/TeamsPage"
            element={<TeamsPage theme={theme} />}
          />

          <Route 
            path="/ItemsPage"
            element={<ItemsPage theme={theme} />}
          />

          <Route
            path="/MLBBTour"
            element={<TournamentsPage theme={theme} />}
          />

          <Route
            path="/Mplid"
            element={<Mplid theme={theme} />}
          />

          {/* VALO Page */}
          <Route
            path="/valo"
            element={
              <>
              <BannerValo theme={theme} />
              <OGT_Valo theme={theme} />
              <Matches_Valo theme={theme} />
            </>}
          />

          <Route
            path="/Valo_Agents"
            element={<Valo_Agents theme={theme} />}
          />

          <Route
            path="/Valo_Teams"
            element={<ValoTeamsPage theme={theme} />}
          />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
