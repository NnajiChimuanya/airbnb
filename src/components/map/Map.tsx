import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MyMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyALvyaTe0j8UecPXnO20J6ou6HYqFddynI">
      <GoogleMap
        mapContainerStyle={{
          width: "98vw",
          height: "41.5vw",
        }}
        center={{
          lat: 9.072264,
          lng: 7.491302,
        }}
        zoom={10}
      />
    </LoadScript>
  );
};

export default MyMap;
