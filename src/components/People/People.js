import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./People.css";

const People = (props) => {
  const { name, img, age, country, id, salary } = props.people;
  const Icon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="people">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="people-info">
        <h3>Name : {name}</h3>
        <p>
          <small>Id: {id}</small>
        </p>
        <p>Age : {age}</p>
        <p>Fee : ${salary}</p>
        <p>Country : {country}</p>
        <button onClick={() => props.hadleAddToList(props.people)}>
          {Icon} Add to List
        </button>
      </div>
    </div>
  );
};

export default People;
