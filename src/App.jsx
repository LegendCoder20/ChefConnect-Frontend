import React from "react";
import "./App.css";
import "./index.css";
import PrimaryCard from "./components/Cards/PrimaryCard";
import Footer from "./components/Footer";
import SecondaryCard from "./components/Cards/SecondaryCard";
import RecipeDetailPage from "./components/Cards/RecipeDetailPage";
import ContactMe from "./components/Forms/ContactMe";
import NotFoundPage from "./components/Small Components/NotFoundPage";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<PrimaryCard></PrimaryCard>}></Route>
            {/*  */}
            <Route
              path="/allRecipe"
              element={<SecondaryCard></SecondaryCard>}
            ></Route>
            {/*  */}
            <Route
              path="/recipeDetailPage"
              element={<RecipeDetailPage></RecipeDetailPage>}
            ></Route>
            {/*  */}
            <Route path="/contactme" element={<ContactMe></ContactMe>}></Route>
            {/*  */}
            <Route path="/login" element={<Login></Login>}></Route>
            {/*  */}
            <Route path="/register" element={<Register></Register>}></Route>
            {/*  */}
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            {/*  */}
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
