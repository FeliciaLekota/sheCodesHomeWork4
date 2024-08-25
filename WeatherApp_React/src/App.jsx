import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Weather from "./weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      {" "}
      <h1>Weather App</h1>
      <p>
        <Weather />
      </p>
    </>
  </StrictMode>
);
