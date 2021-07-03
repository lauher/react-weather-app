import React from "react";
import axios from "axios";

export default function TestAxios() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }

  let apiKey = "538221d97e7453ab216f5f95980b0a93";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>test axios</h2>;
}
