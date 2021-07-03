import "./App.css";
import Weather from "./Weather";
import TestAxios from "./TestAxios";

export default function App() {
  return (
    <div className="App">
      <TestAxios />
      <Weather />
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
  );
}
