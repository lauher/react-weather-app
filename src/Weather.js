import React, { useState } from "react";
import GeneralData from "./GeneralData";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(3.6 * response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&k&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <div className="d-flex w-100">
                <form onSubmit={handleSubmit} className="d-flex flex-grow-1">
                  <input
                    autoComplete="off"
                    autoFocus="on"
                    className="form-control city-input"
                    onChange={handleCityChange}
                    type="search"
                    placeholder="Search a city"
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-search"
                  >
                    <img
                      className="location-icons"
                      src="images/search-location.png"
                      alt="Search Icon"
                    />
                  </button>
                </form>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-location"
                >
                  <img
                    className="location-icons"
                    src="images/location.png"
                    alt="Location Icon"
                  />
                </button>
              </div>
            </div>
            <GeneralData data={weatherData} />
            <WeatherInfo data={weatherData} />
          </div>
          <div className="card-footer text-muted">
            Coded by{" "}
            <a
              href="https://upbeat-austin-079924.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Laura Herbert
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/lauher/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              open-sourced on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
