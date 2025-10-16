import "./Cards.css";

import React from 'react';

import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="cards">
      {
        CardsData.map((card, id) =>{
          return(
            <div className="card-container">
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                icon={card.png}
                series={card.series}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards