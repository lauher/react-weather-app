import React from "react";
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
                  <span>{Math.round(props.data.temperature)}</span>
                  <span>°C</span>
                </strong>
              </h2>
              <i className="icon-now">
                <img src={props.data.iconUrl} alt={props.data.description} />
              </i>
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
