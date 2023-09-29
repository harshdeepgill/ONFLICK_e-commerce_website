import React from "react";
import PaymentPage from "./Pages/PaymentPage";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* <PaymentPage /> */}
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
