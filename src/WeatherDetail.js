import moment from "moment";
import React from "react";

// displaying weather detail
const WeatherDetail = ({ weatherDetail }) => {
  return (
    <div className="weather-detail">
      <h3>Weather Detail</h3>
      <p className="detail">
        Temperature <span>{weatherDetail.main["temp"]} &deg;C</span>
      </p>
      <p className="detail">
        Description <span>{weatherDetail.weather[0].description}</span>
      </p>
      <p className="detail">
        Humidity <span>{weatherDetail.main["humidity"]} %</span>
      </p>
      <p className="detail">
        Wind <span>{weatherDetail.wind["speed"]} mph</span>
      </p>
      <p className="detail">
        Sunrise
        <span>
          {moment(weatherDetail.sys["sunrise"] * 1000).format("hh.mm a")}
        </span>
      </p>
      <p className="detail">
        Sunset
        <span>
          {moment(weatherDetail.sys["sunset"] * 1000).format("hh.mm a")}
        </span>
      </p>
    </div>
  );
};

export default WeatherDetail;
