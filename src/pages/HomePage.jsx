import React from "react";
import HomeSec from "../components/HomeSec";
import Recomendations from "../components/Recomendations";
import Populars from "../components/Populars";
import AllBooks from "../components/AllBooks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeSec />
      <Recomendations />
      <Populars />
      <AllBooks />
      <Footer />
    </div>
  );
};

export default HomePage;
