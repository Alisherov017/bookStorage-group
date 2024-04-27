import React from "react";
import imgPopular from "../img/img-popular.png";
import imgBest from "../img/best.webp";

const Populars = () => {
  return (
    <section className="populars">
      <h2>The Most Popular Books</h2>
      <div className="container">
        <div className="text-block">
          <p>
            Discover the books that readers can't get enough of. These timeless
            classics and trending bestsellers are flying off the shelves and
            captivating audiences worldwide.
          </p>
          <p>
            Browse our selection of the most sought-after titles to find your
            next great read. From gripping novels to informative non-fiction,
            there's something for every literary taste.
          </p>
        </div>
        <img src={imgPopular} alt="" />
      </div>

      <div className="next">
        <img src={imgBest} alt="" />
      </div>
    </section>
  );
};

export default Populars;
