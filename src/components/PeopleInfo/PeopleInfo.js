import React, { useEffect, useState } from "react";
import Data from "../Data/Data";
import People from "../People/People";
import "./PeopleInfo.css";

const PeopleInfo = () => {
  const [peoplelist, setPeoplelist] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setPeoplelist(data));
  }, []);

  const hadleAddToList = (addedpeople) => {
    const newData = [...data, addedpeople];
    setData(newData);
  };

  return (
    <div className="people-container">
      <div className="people-card">
        {peoplelist.map((people) => (
          <People
            key={people.id}
            people={people}
            hadleAddToList={hadleAddToList}
          ></People>
        ))}
      </div>
      <div className="people-data">
        <Data data={data}></Data>
      </div>
    </div>
  );
};

export default PeopleInfo;
