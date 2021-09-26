import React from "react";
import "./Data.css";

const Data = (props) => {
  const { data } = props;
  // total fee
  let total = 0;
  for (const people of data) {
    total = total + people.salary;
  }

  return (
    <div className="list-container">
      <h3>Your Lists</h3>
      <h4>Person you have added : {props.data.length}</h4>
      <p>Estimated Budget : ${total}</p>

      <div className="list-btn">
        <button>Get Now</button>
      </div>
      {data.map((allPeople) => {
        return <div key={Math.random() * 1000}>{allPeople.name}</div>;
      })}
    </div>
  );
};

export default Data;
