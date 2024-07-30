import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import PrimaryCard from "./components/Cards/PrimaryCard";
import Footer from "./components/Footer";
import HeaderTitle from "./components/Small Components/HeaderTitle";
import SecondaryCard from "./components/Cards/SecondaryCard";
import RecipeDetailPage from "./components/Cards/RecipeDetailPage";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <HeaderTitle></HeaderTitle>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<PrimaryCard></PrimaryCard>}></Route>
            <Route
              path="/allRecipe"
              element={<SecondaryCard></SecondaryCard>}
            ></Route>
            <Route
              path="/recipeDetailPage"
              element={<RecipeDetailPage></RecipeDetailPage>}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
