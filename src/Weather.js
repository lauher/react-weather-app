import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: "Thursday 10:15",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      wind: Math.round(3.6 * response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <div className="d-flex w-100">
                <form className="d-flex flex-grow-1">
                  <input
                    type="search"
                    className="form-control city-input"
                    autoFocus="on"
                    autoComplete="off"
                    placeholder="Search a city"
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-search"
                  >
                    <i className="fas fa-search-location"></i>
                  </button>
                </form>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-location"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </button>
                {/* <div
                aria-label="unit switch button"
                className="btn-group"
                role="group"
              >
                <input
                  autoComplete="off"
                  className="btn-check btn-unit-inputs"
                  // id="btn-unit-C"
                  type="radio"
                />
                <label
                  className="btn btn-outline-primary btn-labels active"
                  for="btn-unit-C"
                  // id="label-cels"
                >
                  °C
                </label>
                <input
                  autoComplete="off"
                  className="btn-check btn-unit-inputs"
                  // id="btn-unit-F"
                  type="radio"
                />
                <label
                  className="btn btn-outline-primary btn-labels"
                  for="btn-unit-F"
                  // id="label-fahr"
                >
                  °F
                </label>
              </div> */}
              </div>
            </div>

            <h1>{weatherData.city}</h1>
            <span className="country">{weatherData.country}</span>
            <p>
              Last update: <span>{weatherData.date}</span>
            </p>

            <div className="row">
              <div className="col-sm-8 d-flex align-items-stretch">
                <div className="card card-today">
                  <div>
                    <h2>
                      Now
                      <br />
                      <strong>
                        <span>{Math.round(weatherData.temperature)}</span>
                        <span>°C</span>
                      </strong>
                    </h2>
                    <i className="icon-now">
                      <img
                        src={weatherData.iconUrl}
                        alt={weatherData.description}
                      />
                    </i>
                    <ul>
                      <li className="text-capitalize">
                        {weatherData.description}
                      </li>
                      <li>
                        <span>{weatherData.wind}km/h</span>
                      </li>
                      <li>
                        <span>{weatherData.humidity}%</span>
                      </li>
                    </ul>
                    <hr />
                    <div>
                      <h2>Forecast upcoming hours</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card card-forecast">
                  <h2>Forecast upcoming days</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            Coded by{" "}
            <a
              href="https://upbeat-austin-079924.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Laura Herbert
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/lauher/react-weather-app"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              open-sourced on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "538221d97e7453ab216f5f95980b0a93";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&k&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
