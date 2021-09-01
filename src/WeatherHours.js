import React, { useState } from "react";
import WeatherForecastHours from "./WeatherForecastHours";
import axios from "axios";

export default function WeatherHours(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherHours">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index === 3 || index === 6 || index === 9) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastHours data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
