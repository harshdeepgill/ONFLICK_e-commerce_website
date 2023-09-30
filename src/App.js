import React from "react";
import PaymentPage from "./Pages/PaymentPage";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import SignInAndSignUp from "./Components/SignInAndSignUp";



function App() {
  return (
    <div className="App">
    
     <SignInAndSignUp/>
    
    </div>
  );
}

export default App;
