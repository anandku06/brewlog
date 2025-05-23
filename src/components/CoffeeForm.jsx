import { coffeeOptions } from "../utils";
import { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const CoffeeForm = (props) => {
  const { isAuthenticated } = props;
  const [selectedCoffee, setSeletedCoffee] = useState(null);
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { globalData, setGlobalData, globalUser } = useAuth();

  async function handleSubmitForm() {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    // define a guard clause that only submits the form if it is completed
    if (!selectedCoffee) return;

    // then going to create a new data object
    try {
      const newGlobalData = {
        ...(globalData || {}),
      };

      const nowTime = Date.now();
      const timeToSubtract = hour * 60 * 60 * 1000 + min * 60 * 100;
      const timeStamp = nowTime - timeToSubtract;
      const newData = {
        name: selectedCoffee,
        cost: coffeeCost,
      };

      newGlobalData[timeStamp] = newData;

      // update the global state
      setGlobalData(newGlobalData);

      // persist the data in the firestore
      const userRef = doc(db, "users", globalUser.uid);
      const res = await setDoc(
        userRef,
        {
          [timeStamp]: newData,
        },
        { merge: true }
      );

      setSeletedCoffee(null);
      setHour(0);
      setMin(0);
      setCoffeeCost(0);
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {showModal && (
        <Modal handleCloseModal={() => setShowModal(false)}>
          <Authentication handleCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today...</h2>
      </div>
      <h4>Select Coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((opt, optIndex) => {
          return (
            <button
              onClick={() => {
                setSeletedCoffee(opt.name);
                setShowCoffeeTypes(false);
              }}
              className={
                "button-card " +
                (opt.name === selectedCoffee ? "coffee-button-selected" : "")
              }
              key={optIndex}
            >
              <h4>{opt.name}</h4>
              <p>{opt.caffeine} mg</p>
            </button>
          );
        })}
        <button
          className={
            "button-card " + (showCoffeeTypes ? "coffee-button-selected" : "")
          }
          onClick={() => {
            setShowCoffeeTypes(true);
            setSeletedCoffee(null);
          }}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      {showCoffeeTypes && (
        <select
          onChange={(e) => {
            setSeletedCoffee(e.target.value);
          }}
          id="coffee-list"
          name="coffee-list"
        >
          <option value={null}>Select type</option>
          {coffeeOptions.slice(5).map((opt, optIndex) => {
            return (
              <option value={opt.name} key={optIndex}>
                {opt.name} ({opt.caffeine}mg)
              </option>
            );
          })}
        </select>
      )}

      <h4>Add the cost ($)</h4>
      <input
        type="number"
        className="w-full"
        placeholder="4.50"
        onChange={(e) => {
          setCoffeeCost(e.target.value);
        }}
      />

      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            id="hours-select"
            onChange={(e) => {
              setHour(e.target.value);
            }}
          >
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
          <select
            id="mins-select"
            onChange={(e) => {
              setMin(e.target.value);
            }}
          >
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
      <button onClick={handleSubmitForm}>
        <p>Add Entry</p>
      </button>
    </>
  );
};

export default CoffeeForm;
