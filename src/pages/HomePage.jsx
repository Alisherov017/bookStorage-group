import React, { useEffect, useState } from "react";
import HomeSec from "../components/HomeSec";
import Recomendations from "../components/Recomendations";
import Populars from "../components/Populars";
import AllBooks from "../components/AllBooks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const API = "http://localhost:8000/books";
  const [booksData, setBooksData] = useState([]);

  const getBooksData = async () => {
    const res = await axios.get(API);
    console.log(res.data);
    setBooksData(res.data);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <div>
      <Navbar />
      <HomeSec />
      <Recomendations />
      <Populars />
      <AllBooks booksData={booksData} />
      <Footer />
    </div>
  );
};

export default HomePage;
