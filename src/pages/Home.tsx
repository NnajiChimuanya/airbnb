import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import Airbnb from "../components/body/Airbnb";
import Footer from "../components/footer/Footer";
import ShowMap from "../components/showMap/ShowMap";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Filter />
      <ShowMap text="Show Map" link="/map" />
      <Airbnb />
      <Footer />
    </div>
  );
};

export default Home;
