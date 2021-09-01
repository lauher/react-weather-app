import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-8 d-flex align-items-stretch">
          <div className="card card-today">
            <div>
              <h2>
                Now
                <br />
                <strong>
                  <WeatherTemperature celsius={props.data.temperature} />
                </strong>
              </h2>

              <WeatherIcon code={props.data.icon} size={80} color="#1a535c" />

              <ul>
                <li>{props.data.description}</li>
                <li>
                  <span>{props.data.wind}km/h</span>
                </li>
                <li>
                  <span>{props.data.humidity}%</span>
                </li>
              </ul>
              <hr />
              <div>
                <h2>Forecast upcoming hours</h2>
                <WeatherForecast coordinates={props.data.coordinates} />
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
  );
}
