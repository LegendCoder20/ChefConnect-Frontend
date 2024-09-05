import React from "react";
import "./App.css";
import "./index.css";

// User Pages
import PrimaryCard from "./components/Cards/PrimaryCard";
import SecondaryCard from "./components/Cards/SecondaryCard";
import RecipeDetailPage from "./components/Cards/RecipeDetailPage";
import AboutUs from "./components/AboutUs";
import ContactMe from "./components/Forms/ContactMe";
import Footer from "./components/Footer";

// Admin Pages
import Register from "./components/Forms/Register";
import Login from "./components/Forms/Login";
import AdminLogin from "./components/Forms/AdminLogin";
import AdminPanelCards from "./components/Cards/AdminPanelCards";
import OwnerPanel from "./components/Cards/OwnerPanel";
import AddRecipe from "./components/Forms/AddRecipe";
import UpdateRecipe from "./components/Forms/UpdateRecipe";

import NotFoundPage from "./components/Small Components/NotFoundPage";

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
              path="/allRecipe/:category"
              element={<SecondaryCard></SecondaryCard>}
            ></Route>
            {/*  */}
            <Route
              path="/recipeDetailPage/:username/:recipeId"
              element={<RecipeDetailPage></RecipeDetailPage>}
            ></Route>
            {/*  */}
            <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
            {/*  */}
            <Route path="/contactme" element={<ContactMe></ContactMe>}></Route>
            {/*  */}

            <Route path="/register" element={<Register></Register>}></Route>
            {/*  */}
            <Route path="/login" element={<Login></Login>}></Route>
            {/*  */}
            <Route
              path="/userPanel"
              element={<AdminPanelCards></AdminPanelCards>}
            ></Route>
            {/*  */}
            <Route
              path="/ownerPanel"
              element={<OwnerPanel></OwnerPanel>}
            ></Route>
            {/*  */}
            <Route
              path="/adminLogin"
              element={<AdminLogin></AdminLogin>}
            ></Route>
            {/*  */}
            <Route path="/addRecipe" element={<AddRecipe></AddRecipe>}></Route>
            {/*  */}
            <Route
              path="/updateRecipe/:recipeId"
              element={<UpdateRecipe></UpdateRecipe>}
            ></Route>
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
