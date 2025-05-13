import React from "react";
import { coffeeOptions } from "../utils";

const CoffeeForm = () => {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today...</h2>
      </div>
      <h4>Select Coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((opt, optIndex) => {
          return (
            <button className="button-card" key={optIndex}>
              <h4>{opt.name}</h4>
              <p>{opt.caffeine} mg</p>
            </button>
          );
        })}
        <button className="button-card">
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      <select id="coffee-list" name="coffee-list">
        <option value={null}>Select type</option>
        {coffeeOptions.map((opt, optIndex) => {
          return (
            <option value={opt.name} key={optIndex}>
              {opt.name} ({opt.caffeine}mg)
            </option>
          );
        })}
      </select>

      <h4>Add the cost ($)</h4>
      <input type="number" className="w-full" placeholder="4.50" />

      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select id="hours-select">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hrs, hrsIndex) => {
              return (
                <option value={hrs} key={hrsIndex}>
                  {hrs}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select id="mins-select">
            {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
              return (
                <option value={min} key={minIndex}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default CoffeeForm;
