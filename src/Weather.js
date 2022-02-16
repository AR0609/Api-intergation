import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import { BallTriangle } from "react-loader-spinner";

function Weather() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    Cases();
  }, []);
  //weather api
  const Cases = () => {
    var options = {
      method: "GET",
      url: "https://foreca-weather.p.rapidapi.com/forecast/daily/102643743",
      params: {
        alt: "0",
        tempunit: "C",
        windunit: "MS",
        periods: "8",
        dataset: "full",
      },
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "bdfe3d3992msh03a33361fa842ddp1d6236jsn5caa2e539de9",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log("value", response.data.forecast);
        setWeather(response.data.forecast);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="weather-covid-content">
      {weather && weather.length > 0 ? (
        <>
          <table class="table table-sm mt-3">
            <thead className="head">
              <th>Date</th>
              <th>Wind Speed</th>
              <th>Climate</th>
              <th>Min-temp</th>
              <th>Max-temp</th>
              <th>Humidity</th>
            </thead>
            <tbody>
              {weather &&
                weather.map((val) => {
                  return (
                    <tr>
                      <td className="text">{val.date}</td>
                      <td>{val.maxWindSpeed} KM</td>
                      <td>{val.symbolPhrase}</td>
                      <td>{val.minTemp} C</td>
                      <td>{val.maxTemp} C</td>
                      <td>{val.minRelHumidity}C</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* </div> */}
        </>
      ) : (
        <>
          <div className="weather-loading">
            <BallTriangle color="#76b2fe" height={100} width={100} />
          </div>
        </>
      )}
    </div>
  );
}
export default Weather;
