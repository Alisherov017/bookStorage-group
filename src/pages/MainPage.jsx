import React from "react";
import HomePage from "./HomePage";

const MainPage = () => {
  return (
    <div className="mainPage">
      <a href="/password">
        <button className="adminBtn">I'm admin</button>
      </a>
      <a href="/home">
        <button className="userBtn">I'm reader</button>
      </a>
    </div>
  );
};

export default MainPage;
