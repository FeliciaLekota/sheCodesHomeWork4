import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then((response) => {
      setDescription(response.data.weather[0].description);
      setPrecipitation(response.data.clouds.all);
      setTemperature(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
      );
      setName(response.data.name);
    });
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weather-details">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={changeCity}
          placeholder="Enter a city..."
        />
        <input type="submit" onClick={handleSubmit} value="Search" />
      </form>
      <div>
        <div>
          <div>
            {temperature && (
              <div className="temp">
                <div className="header">
                  <div className="description">
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="temperature-icon">
                    <p className="temperature">{Math.round(temperature)}°C</p>
                    <img src={icon} alt="Weather icon" />
                  </div>
                </div>
                <div className="details">
                  <div className="precipitation">
                    <p>Precipitation: {precipitation}%</p>
                  </div>
                  <div className="wind">
                    <p>Wind Speed: {wind} m/s</p>
                  </div>
                </div>

                <div className="forecast">
                  <div className="forecast-container">
                    <div className="forecast-day">
                      <p>🌞 Mon: 25°C</p>
                    </div>
                    <div className="forecast-day">
                      <p>🌦 Tues: 22°C</p>
                    </div>
                    <div className="forecast-day">
                      <p>☁️ Wed: 20°C</p>
                    </div>
                    <div className="forecast-day">
                      <p>⛈ Thurs: 18°C</p>
                    </div>
                    <div className="forecast-day">
                      <p>🌥 Fri: 20°C</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <footer>
            <a
              href="https://github.com/FeliciaLekota/sheCodesHomeWork4"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by
            <a href="https://github.com/FeliciaLekota" target="_blank">
              {" "}
              Felicia Lekota
            </a>
            ,{" "}
            <a
              href="https://earnest-stardust-f6c642.netlify.app/"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Weather;
