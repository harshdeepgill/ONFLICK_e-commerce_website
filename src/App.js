import React, { useState } from "react";

import AdminPage from "./Pages/AdminPage";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import ImageSlider from "./Components/ImageSlider";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
