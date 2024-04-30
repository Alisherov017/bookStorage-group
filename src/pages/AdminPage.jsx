import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/admin/NabarAdmin";
import AllBooksAdmin from "../components/admin/AllBooksAdmin";
import HomeSec from "../components/HomeSec";
import Recomendations from "../components/Recomendations";
import Populars from "../components/Populars";
import Footer from "../components/Footer";
import axios from "axios";

const AdminPage = () => {
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
      <NavbarAdmin />
      <HomeSec />
      <Recomendations />
      <Populars />
      <AllBooksAdmin booksData={booksData} />
      <Footer />
    </div>
  );
};

export default AdminPage;
