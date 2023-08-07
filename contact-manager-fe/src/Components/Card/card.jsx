import React from "react";
import "./card.css";

const Card = ({ name, number, altitude,longitde }) => {
  return (
    <div className="flex-card">
      <p>{name}</p>
      <p>{number}</p>
      <p>{altitude}</p>
      <p>{longitde}</p>
    </div>
  );
};

export default Card;