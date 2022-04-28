import React, { useState } from "react";
import Ingredients from "./Ingredients/Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState("");

  // console.log(meal);
  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      <h2>
        <input
          className="m-2"
          id="1"
          type="radio"
          onClick={(e) => setMeal(e.target.id)}
          name="active"
        />
        {"Плов"}
      </h2>
      <h2>
        <input
          className="m-2"
          id="2"
          type="radio"
          onClick={(e) => setMeal(e.target.id)}
          name="active"
        />
        {"Манты"}
      </h2>
      <h2>
        <input
          className="m-2"
          type="radio"
          id="3"
          onClick={(e) => setMeal(e.target.id)}
          name="active"
        />
        {"Самсы"}
      </h2>

      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
