import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
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
import PatchesPage from './Components/MLBB_Patches_Page/MLBBPatches';
import Mplid from './Components/MLBB_MPLID/Mplid';

import BannerValo from './Components/Valo_Page/Banner_valo/Banner_valo';
import OGT_Valo from './Components/Valo_Page/On_Going_Tur_valo/OGT_Valo';
import Matches_Valo from './Components/Valo_Page/Matches_valo/Matches_Valo';
import Valo_Agents from './Components/Valo_Agents_Page/AgentsPage';
import ValoTeamsPage from './Components/Valo_Teams_Page/ValoTeams';

/* --- BACKEND COMPONENTS --- */
import Login from './Backend-Components/LoginPage/Login';
import EsportChoicesBackEnd from './Backend-Components/AdminPage/E-Sports/Esports';
import SportChoicesBackEnd from './Backend-Components/AdminPage/Sports/Sport';
import BannerML_BackEnd from './Backend-Components/MLBB-BackEnd-Page/Banner_ML/Banner_ML_BackEnd';
import MLBBTeamsBE from './Backend-Components/MLBB_Teams-BE-Page/MLBBTeamsBE';
import MLBBPlayersBE from './Backend-Components/MLBB_Players-BE-Page/MLBBPlayersBE';
import MLBBItemsBE from './Backend-Components/MLBB_Items-BE-Page/MLBBItemsBE';
import MLBBHeroesBE from './Backend-Components/MLBB_Heroes-BE-Page/MLBBHeroesBE';
import MLBBToursBE from './Backend-Components/MLBB_Tours-BE-Page/MLBBToursBE';
import MLBBPatchesBE from './Backend-Components/MLBB_Patches-BE-Page/MLBBPatchesBE';

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
            path="/MLBBPatches"
            element={<PatchesPage theme={theme} />}
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

          {/* ✅ LOGIN PAGE ROUTE */}
          <Route
            path="/login"
            element={<Login theme={theme} />}
          />

          <Route
            path="/AdminPage"
            element={
              <>
                <EsportChoicesBackEnd theme={theme} />
                <SportChoicesBackEnd theme={theme} />
              </>
            }
          />

          <Route
            path="/mlbb_admin"
            element={ <BannerML_BackEnd theme={theme} />}
          />

          <Route
            path="/mlbb_teams_BE"
            element={<MLBBTeamsBE theme={theme} />}
          />

          <Route
            path="/mlbb_players_BE"
            element={<MLBBPlayersBE theme={theme} />}
          />

          <Route
            path="/mlbb_items_BE"
            element={<MLBBItemsBE theme={theme} />}
          />

          <Route
            path="/mlbb_heroes_BE"
            element={<MLBBHeroesBE theme={theme} />}
          />

          <Route
            path="/mlbb_tours_BE"
            element={<MLBBToursBE theme={theme} />}
          />

          <Route
            path="/mlbb_patches_BE"
            element={<MLBBPatchesBE theme={theme} />}
          />

        </Routes>

        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
