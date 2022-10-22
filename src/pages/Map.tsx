import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import ShowMap from "../components/showMap/ShowMap";
import MyMap from "../components/map/Map";

const Map = () => {
  return (
    <div className="map">
      <Header />
      <Filter />

      <MyMap />

      <ShowMap text="Show list" link="/" />
    </div>
  );
};

export default Map;
