import React from "react";
import "./cardscontainer.css";
import Card from "../Card/card";

const CardsContainer = ({ cards}) => {
  return (

    <div className="container">
      {cards.map((card) => (
        <Card
          name={card.name}
          number={card.number}
          altitude={card.altitude}
          longitude={card.longitude}
          key={card.name}
        />
      ))}
    </div>
  );
};

export default CardsContainer;