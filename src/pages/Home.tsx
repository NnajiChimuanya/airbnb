import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import Airbnb from "../components/body/Airbnb";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Filter />
      <Airbnb />
      <Footer />
    </div>
  );
};

export default Home;
