import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import Airbnb from "../components/body/Airbnb";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Filter />
      <Airbnb />
    </div>
  );
};

export default Home;
