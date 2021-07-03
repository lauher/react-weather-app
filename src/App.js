import "./App.css";
import Weather from "./Weather";
import TestAxios from "./TestAxios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <TestAxios />
        <Weather />
      </div>
    </div>
  );
}
