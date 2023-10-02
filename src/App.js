import React, { useState } from "react";


import AdminPage from "./Pages/AdminPage";
import Navbar from "./Components/Navbar"
import AllRoutes from "./Components/AllRoutes";



function App() {
  
  return (
    <div className="App">
        <Navbar />
        <AllRoutes />
    </div>
  );
}

export default App;
