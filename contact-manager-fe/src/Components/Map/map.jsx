import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = ({locations}) => {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={-50} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
     {
      locations.map((location) => (
    <Marker position={[location.altitude, location.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
     ))}
    </MapContainer>
  );
};



export default MyMap;
