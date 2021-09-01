import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastHours.css";

export default function WeatherForecastDays(props) {
  function Temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°`;
  }

  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return hour;
  }

  return (
    <div className="WeatherForecastHours">
      <h2>{hour()}:00</h2>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={50}
        color="#1a535c"
      />
      <div>
        <span className="temperature">{Temperature()}</span>
      </div>
    </div>
  );
}
