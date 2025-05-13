import React from "react";

const Hero = () => {
  return (
    <>
      <h1>
        Coffee Tracking for Coffee{" "}
        <abbr title="An enthusiast or devotee">Fiends</abbr>!
      </h1>

      <div className="benefits-list">
        <h3 className="font-bolder">
          Try <span className="text-gradient">BrewLog</span> and start ...
        </h3>
        <p>✅ Tracking every Coffee</p>
        <p>✅ Measuring your Blood Caffiene Level</p>
        <p>✅ Costing and Quantifying your addition</p>
      </div>

      <div className="card info-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3>Did you know...</h3>
        </div>

        <div>That caffiene&apos;s half-life is about 5 hours?</div>
        <p>
          This means that after 5 hours, half the caffiene you consumed is still
          in your system, keeping you alert longer! So if you drink a cup of
          coffee with 200mg of caffiene, 5 hours later, you&apos;ll still have
          about 100mg of caffiene in your system.
        </p>
      </div>
    </>
  );
};

export default Hero;
