import React from "react";
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

const History = () => {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline" />
        <h2>History</h2>
      </div>
      <p><i>Hover for more information!</i></p>
      <div className="coffee-history">
        {Object.keys(coffeeConsumptionHistory).sort((a, b) => b - a).map((utcTime, cIndex) => {
          const coffee = coffeeConsumptionHistory[utcTime]
          const timeSinceConsume = timeSinceConsumption(utcTime)
          const originalAmount = getCaffeineAmount(coffee.name)
          const remainingAmount = calculateCurrentCaffeineLevel({
            [utcTime] : coffee
          })

          const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`

          return (
            <div title={summary} key={cIndex}>
              <i className="fa-solid fa-mug-hot" />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default History;
