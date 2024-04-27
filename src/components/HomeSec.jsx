import React from "react";
import { Link } from "react-router-dom";

const HomeSec = () => {
  return (
    <section className="main-sec">
      <h1>Discover Your Next Great Read</h1>
      <p>
        Explore our expansive collection of digital books and find your perfect
        literary companion.
      </p>
      <Link to="/join"><button>Create Account or Log in</button></Link>
    </section>
  );
};

export default HomeSec;
