import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDays.css";

export default function WeatherForecastDays(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDays card">
      <h2>{day()}</h2>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={50}
        color="#1a535c"
      />
      <div className="description">{props.data.weather[0].description}</div>
      <div>
        <span className="temperature-max">{maxTemperature()}</span>
        <span className="temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
