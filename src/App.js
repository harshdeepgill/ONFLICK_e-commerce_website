import React from "react";

import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import { Footer } from "./Components/Footer/Footer";
import ProductListSkeleton from "./Components/ProductListSkeleton";
import LandingPageSkeleton from "./Components/LandingPageSkeleton";


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes />
     <Footer/> */}
      {/* <AllRoutes /> */}
      {/* <ProductListSkeleton/> */}
      <LandingPageSkeleton/>
    </div>
  );
}

export default App;
