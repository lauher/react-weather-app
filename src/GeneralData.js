import React from "react";
import FormattedDate from "./FormattedDate";
import "./GeneralData.css";

export default function GeneralData(props) {
  return (
    <div className="GeneralData">
      <h1>{props.data.city}</h1>
      <span className="country">{props.data.country}</span>
      <p>
        Last update: <FormattedDate date={props.data.date} />
      </p>
    </div>
  );
}
