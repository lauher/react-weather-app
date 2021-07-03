import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    country: "US",
    date: "Thursday 10:15",
    temperature: 17,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    wind: 16,
    humidity: 30,
  };

  return (
    <div>
      <div className="Weather">
        <div className="d-flex">
          <div className="d-flex w-100">
            <form
              // id="search-form"
              className="d-flex flex-grow-1"
            >
              <input
                type="search"
                className="form-control"
                autofocus="on"
                autoComplete="off"
                // id="city-input"
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
              // id="current-location"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
            <div
              aria-label="unit switch button"
              className="btn-group"
              role="group"
            >
              <input
                autocomplete="off"
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
                autocomplete="off"
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
            </div>
          </div>
        </div>
        <h1
        // id="city"
        >
          {weatherData.city}
        </h1>
        <span
        // id="country"
        >
          {weatherData.country}
        </span>
        <p>
          Last update:{" "}
          <span
          // id="time"
          >
            {weatherData.date}
          </span>
        </p>
        <div className="row">
          <div className="col-sm-8 d-flex align-items-stretch">
            <div className="card card-today">
              <div className="card-body">
                <h2>
                  Now
                  <br />
                  <strong>
                    <span
                    // id="temperature"
                    >
                      {weatherData.temperature}
                    </span>
                    <span
                    // id="unit"
                    >
                      °C
                    </span>
                  </strong>
                </h2>
                <i className="icon-now">
                  <img src={weatherData.imgUrl} alt={weatherData.description} />
                </i>
                <ul>
                  <li
                  // id="description"
                  >
                    {weatherData.description}
                  </li>
                  <li>
                    <span
                    // id="wind"
                    >
                      {weatherData.wind}km/h
                    </span>
                  </li>
                  <li>
                    <span
                    // id="humidity"
                    >
                      {weatherData.humidity}%
                    </span>
                  </li>
                </ul>
                <hr />
                <div
                // id="forecast-hours"
                ></div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4"
            // id="forecast-days"
          ></div>
        </div>
      </div>
      <span
      // id="disclaimer"
      ></span>
      <div className="card-footer text-muted">
        Coded by Laura Herbert and
        <a
          href="https://github.com/lauher/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          open-sourced on GitHub
        </a>
      </div>
    </div>
  );
}
