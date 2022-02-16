import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BallTriangle } from "react-loader-spinner";

function Covid() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    Cases();
  }, []);

  //covid api

  const Cases = () => {
    const options = {
      method: "GET",
      url: "https://covid-19-india2.p.rapidapi.com/details.php",
      headers: {
        "x-rapidapi-host": "covid-19-india2.p.rapidapi.com",
        "x-rapidapi-key": "bdfe3d3992msh03a33361fa842ddp1d6236jsn5caa2e539de9",
      },
    };

    axios
      .request(options)
      .then((response) => {
        let label = Object.keys(response.data);
        let value = Object.values(response.data);
        let final = label.map((da, i) => {
          return { value: value[i], label: da };
        });
        setCovid(final);
      })
      .catch((error) => {});
  };

  return (
    <div className="covid-covid-content">
      {covid && covid.length > 0 ? (
        <>
          {covid &&
            covid.map((val) => {
              return (
                <div className="covid-covid-card">
                  <p className="covid-state-name-one">
                    State Name:
                    <span className="covid-state-name">{val.value.state}</span>
                  </p>
                  <p className="covid-state-name-one">
                    Total Case:
                    <span className="covid-state-name">{val.value.total}</span>
                  </p>
                  <div className="covid-content">
                    <div className="covid-confirmation">
                      <p className="covid-confirmation-value">
                        {val.value.confirm}
                      </p>
                      <p className="covid-confirmation-value-name">
                        Confirm Case
                      </p>
                    </div>
                    <div className="covid-confirmation">
                      <p className="covid-confirmation-value">
                        {val.value.cured}
                      </p>
                      <p className="covid-confirmation-value-name">
                        cured Case
                      </p>
                    </div>
                    <div className="covid-confirmation">
                      <p className="covid-confirmation-value">
                        {val.value.death}
                      </p>
                      <p className="covid-confirmation-value-name">
                        death Case
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          <div className="covid-loading">
            <BallTriangle color="#76b2fe" height={100} width={100} />
          </div>
        </>
      )}
    </div>
  );
}

export default Covid;
