import React from "react";
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from "../utils";

function StatCard(props) {
  const { large, title, children } = props;
  return (
    <div className={"card card-stat " + (large ? "col-span-2" : "")}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

const Stats = () => {
  const stats = {
    daily_caffeine: 240,
    daily_cost: 6.8,
    average_coffees: 2.3,
    total_cost: 220,
  };

  const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>

      <div className="stats-grid">
        <StatCard large title="Active Caffiene Level">
          <div className="status">
            <p>
              <span className="stat-text">{caffeineLevel}</span> mg
            </p>
            <h5 style={{color : statusLevels['low'].color, background : statusLevels['low'].background}}>Low</h5>
          </div>
          <p>{statusLevels['low'].description}</p>
        </StatCard>

        <StatCard title="Daily Caffeine">
          <p>
            <span className="stat-text">{stats.daily_caffeine}</span> mg
          </p>
        </StatCard>
        <StatCard title="Avg # of Coffee">
          <p>
            <span className="stat-text">{stats.average_coffees}</span> mg
          </p>
        </StatCard>
        <StatCard title="Daily Cost ($)">
          <p>
            <span className="stat-text">$ {stats.daily_cost}</span>
          </p>
        </StatCard>
        <StatCard title="Total Cost ($)">
          <p>
            <span className="stat-text">$ {stats.total_cost}</span>
          </p>
        </StatCard>
      </div>
    </>
  );
};

export default Stats;
