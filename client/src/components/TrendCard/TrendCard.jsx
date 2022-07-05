import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend, key) => {
        return (
          <div className="trend" key={trend.name}>
            <span key={trend.name}>#{trend.name}</span>
            <span key={trend.shares}>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
