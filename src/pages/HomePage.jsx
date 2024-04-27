import React from "react";
import HomeSec from "../components/HomeSec";
import Recomendations from "../components/Recomendations";
import Populars from "../components/Populars";
import AllBooks from "../components/AllBooks";

const HomePage = () => {
  return (
    <div>
      <HomeSec />
      <Recomendations />
      <Populars />
      <AllBooks />
    </div>
  );
};

export default HomePage;
