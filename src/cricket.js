import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cricket.css";
import { BallTriangle } from "react-loader-spinner";

function Cricket() {
  const [cricket, setCricket] = useState([]);
  useEffect(() => {
    Cases();
  }, []);
  //Cricket api
  const Cases = () => {
    var options = {
      method: "GET",
      url: "https://cricket-live-data.p.rapidapi.com/series",
      headers: {
        "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
        "x-rapidapi-key": "bdfe3d3992msh03a33361fa842ddp1d6236jsn5caa2e539de9",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setCricket(response.data.results[0].series);
        console.log("BOOM", response.data.results[0].series);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cricket-covid-content">
      {cricket && cricket.length > 0 ? (
        <>
          {cricket &&
            cricket.map((val) => {
              return (
                <div className="cricket-covid-card">
                  <p className="cricket-state-name-one">
                    Series id:
                    <span className="state-name">{val.series_id}</span>
                  </p>
                  <div className="cricket-confirmation">
                    <p className="cricket-confirmation-value-name">
                      Series name:
                      <span className="cricket-confirmation-value">
                        {val.series_name}
                      </span>
                    </p>
                  </div>
                  <p className="cricket-state-name-one-season">
                    season:
                    <span className="cricket-state-name">{val.season}</span>
                  </p>

                  <div className="cricket-confirmation">
                    <p className="cricket-confirmation-value-name-one">
                      status:
                      <span className="cricket-confirmation-value">
                        {val.status}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          <div className="cricket-loading">
            <BallTriangle color="#76b2fe" height={100} width={100} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cricket;
