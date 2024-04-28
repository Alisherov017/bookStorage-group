import React from "react";
import NavbarAdmin from "../components/admin/NabarAdmin";
import AllBooksAdmin from "../components/admin/AllBooksAdmin";
import HomeSec from "../components/HomeSec";
import Recomendations from "../components/Recomendations";
import Populars from "../components/Populars";
import Footer from "../components/Footer";

const AdminPage = () => {
  return (
    <div>
      <NavbarAdmin />
      <HomeSec />
      <Recomendations />
      <Populars />
      <AllBooksAdmin />
      <Footer />
    </div>
  );
};

export default AdminPage;
