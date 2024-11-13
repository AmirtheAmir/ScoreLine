import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import Homeelement from "./Pages/Home/Index";
import Formulaone from "./Pages/FormulaOne/Index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  // Set the class based on the route
  const containerClass =
    location.pathname === "/formulaone" ? "min-h-screen" : "h-screen";

  return (
    <div className={`bg-zinc-900 ${containerClass}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeelement />} />
        <Route path="/formulaone" element={<Formulaone />} />
      </Routes>
    </div>
  );
}

export default App;
