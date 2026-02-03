import React from "react";

import "./WeatherForecast.css";

function WeatherForecast({day, img, imgAlt, conditions, time}) {
  return (
    <div className="weather">
      <h2>Day of the Week: {day} </h2>
      <img src={img} alt={imgAlt} />
      <p>
        <span>conditions: </span>current weather conditions: {conditions}
      </p>
      <p>
        <span>time: </span>time of day: {time}
      </p>
    </div>
  );
}

export default WeatherForecast;
