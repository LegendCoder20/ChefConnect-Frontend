import "./App.css";
import Navbar from "./components/Navbar.jsx";
import PrimaryCard from "./components/Cards/PrimaryCard";
import "./index.css";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar></Navbar>
        <PrimaryCard></PrimaryCard>
      </div>
    </>
  );
}

export default App;
