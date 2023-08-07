import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";
import customIcon from "./assets/pin.png";

const MyMap = ({locations}) => {
    const customMarkerIcon = new L.Icon({
      iconUrl: customIcon,
      iconSize: [32, 32], // Set the size of your custom icon
      iconAnchor: [16, 32], // Set the anchor point of your custom icon
    });
  
    

  return (
    <MapContainer center={[51.505, -0.09]} zoom={50} style={{ height: "800px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
     {
      locations.map((location) => (
    <Marker position={[location.altitude, location.longitude]} icon={customMarkerIcon}>
        <Popup>
          {location.name}
          {location.number}
        </Popup>
    </Marker>
     ))}
    </MapContainer>
  );
};



export default MyMap;
