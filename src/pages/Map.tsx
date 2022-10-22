import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import ShowMap from "../components/showMap/ShowMap";

const Map = () => {
  return (
    <div className="map">
      <Header />
      <Filter />

      <h3> The Map</h3>

      <ShowMap text="Show list" link="/" />
    </div>
  );
};

export default Map;
