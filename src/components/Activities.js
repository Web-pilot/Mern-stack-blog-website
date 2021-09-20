import React, { useState } from "react";

import { data } from "./Data/data";

const Activities = () => {
  const [ind, setInd] = useState(1);
  const [activity, setActivity] = useState(data);

  const { title, act, time } = activity[ind];
  return (
    <section className="section">
      <h4 className="act-title">Weekly and daily activities</h4>
      <span className="underline"></span>
      <div className="act-info">
        <ul className="active">
          <li>
            {title}:{act} <span>{time}</span>
          </li>
        </ul>
        {data.map((item, index) => {
          return (
            <span
              key={item.id}
              className={`act-btn ${ind === index && "active"}`}
              onClick={() =>
                setInd((prev) => {
                  return (prev = index);
                })
              }
            >
              {item.title.slice(0, 1)}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
