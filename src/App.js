import React, { useState } from "react";


import AdminPage from "./Pages/AdminPage";
import Navbar from "./Components/Navbar"
import AllRoutes from "./Components/AllRoutes";
import { useLocation } from "react-router-dom";



function App() {
  const location  = useLocation()
  return (
    <div className="App">
        {(location.pathname!=="/admin") && <Navbar />}
        <AllRoutes />
    </div>
  );
}

export default App;
