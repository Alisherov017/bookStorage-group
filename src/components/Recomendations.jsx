import React from "react";
import harryBook from "../img/harry-potter-book.jpg";
import prideBook from "../img/pride-and-prejudice.webp";
import atomicBook from "../img/atomic-habits-book.jpg";
import kidsBook from "../img/kids-book.jpg";

const Recomendations = () => {
  const openLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="recomendations">
      <h2>Recomendations</h2>
      <div className="container">
        <div
          className="card"
          onClick={() =>
            openLink(
              "https://www.pottermorepublishing.com/wp-content/uploads/1_Harry-Potter-and-Philosophers-Stone.pdf"
            )
          }
        >
          <img src={harryBook} alt="" className="card-img" />
          <h3 className="card-title">Harry Potter</h3>
          <span className="card-author">J.K. Rowling</span>
          <p className="card-description">
            The novels follow Harry Potter, an 11-year-old boy who discovers he
            is the son of famous wizards and will attend Hogwarts School of
            Witchcraft and Wizardry.
          </p>
        </div>

        <div
          className="card"
          onClick={() =>
            openLink("https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf")
          }
        >
          <img src={prideBook} alt="" className="card-img" />
          <h3 className="card-title">Pride and Prejudice</h3>
          <span className="card-author">Jane Austen</span>
          <p className="card-description">
            Pride and Prejudice is a novel by Jane Austen that satirizes issues
            of marriage and social class.
          </p>
        </div>

        <div
          className="card"
          onClick={() =>
            openLink(
              "https://drive.google.com/file/d/1GkH1gHGYoAaRBhi-WEB3zOaxIT-VI7a3/view?usp=sharing"
            )
          }
        >
          <img src={atomicBook} alt="" className="card-img" />
          <h3 className="card-title">Atomic Habits</h3>
          <span className="card-author">James Clear</span>
          <p className="card-description">
            An atomic habit is a regular practice or routine that is not only
            small and easy to do but is also the source of incredible power; a
            component of the system of compound growth.
          </p>
        </div>

        <div
          className="card"
          onClick={() =>
            openLink(
              "https://drive.google.com/file/d/1UnlAWQM32ma4uAaROvWPCAJfZJKsZOcP/view?usp=sharing"
            )
          }
        >
          <img src={kidsBook} alt="" className="card-img" />
          <h3 className="card-title">Matilda</h3>
          <span className="card-author">Roald Dahl</span>
          <p className="card-description">
            She's brilliant, resilient, creative, and kind, despite growing up
            in difficult circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
