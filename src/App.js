import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";
import { Input } from "semantic-ui-react";
import WeatherDetail from "./WeatherDetail";

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState([]);
  const [location, setLocation] = useState();
  const [input, setInput] = useState();

  const api_key = "731368453825eee9b4a6f83b6fb487e0";
  const base_url = "https://api.openweathermap.org/data/2.5";

  // get first data base on latitude and longitude
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const res = await axios.get(
        `${base_url}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${api_key}&wind.speed=imperial`
      );
      setData(res.data);
    };
    fetchData();
  }, [lat, long]);

  // get data base on location on search bar
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${base_url}/weather?q=${location}&units=metric&APPID=${api_key}&wind.speed=imperial`
      );
      setData(res.data);

      // console.log(data)
    };
    fetchData();
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(input);
    setInput("");
  };

  // displaying the data
  return (
    <div className="App">
      <div className="split">
        <div className="column1">
          {typeof data.main != "undefined" ? (
            <Weather
              weatherData={data}
              lat={data.coord["lat"] ? data.coord["lat"] : lat}
              long={data.coord["lon"] ? data.coord["lon"] : long}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="column2">
          <div className="input-group">
            <form action="" onSubmit={handleSubmit}>
              <Input
                value={input}
                action={{ icon: "search" }}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Another location..."
                transparent
              />
            </form>
          </div>
          {typeof data.main != "undefined" ? (
            <WeatherDetail weatherDetail={data} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
