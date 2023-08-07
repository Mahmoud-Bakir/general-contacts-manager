import React from "react";
import "./card.css";

const Card = ({ name, number, altitude,longitude }) => {
  return (
    <div className="flex-card">
      <span className="title">Personal info</span>
      <span>Name: {name}</span>
      <span>Phone number: {number}</span>
      <br />
      <span className="title">Location</span>
      <span>Altitude: {altitude}</span>
      <span>Longitude: {longitude}</span>
    </div>
  );
};

export default Card;