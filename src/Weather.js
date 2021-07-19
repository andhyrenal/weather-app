import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const Weather = ({ weatherData, lat, long }) => {
  const api_key = "731368453825eee9b4a6f83b6fb487e0";
  const base_url = "https://api.openweathermap.org/data/2.5";
  const icon = "http://openweathermap.org/img/wn/";
  const [forecast, setForcast] = useState([]);

  // get data for forecasting
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${base_url}/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&APPID=${api_key}`
      );
      setForcast(res.data);
      // console.log(data)
    };
    fetchData();
  }, [lat, long]);
  const filtered =
    forecast.daily &&
    forecast.daily.filter((day, index) => {
      return index !== 0;
    });
  return (
    <>
      <div className="main-weather">
        <div className="deg">{weatherData.main.temp}&deg;</div>

        <div className="date-place">
          {weatherData.name}
          <div className="date">{moment().format("dddd, MMM D 'YY")}</div>
        </div>
      </div>
      <div className="forecast">
        {forecast.daily &&
          filtered.map((day, index) => {
            return (
              <div className="forecastlist" key={index}>
                <div className="forecast-day">
                  {moment(day.dt * 1000).format("ddd")}
                </div>
                <div className="forecast-img">
                  <img src={`${icon}${day.weather[0].icon}@2x.png`} alt="" />
                </div>
                <div className="forecast-desc">
                  {day.weather[0].description}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Weather;
