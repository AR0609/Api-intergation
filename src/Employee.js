import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Employee.css";
import { BallTriangle } from "react-loader-spinner";

function Employee() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    emp();
  }, []);
  //employee api
  const emp = () => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setUserList(res.data.data);
    });
  };
  return (
    <div className="container-fluid p-3">
      {userList && userList.length > 0 ? (
        <>
          <table class="table table-sm mt-3">
            <thead>
              <th className="head">First Name</th>
              <th className="head">Last Name</th>
              <th className="head">Email</th>
              <th className="head">Avatar</th>
            </thead>
            <tbody>
              {userList.map((x) => (
                <tr>
                  <td className="head-text">{x.first_name}</td>
                  <td className="head-text">{x.last_name}</td>
                  <td className="head-text">{x.email}</td>
                  <td className="head-text">
                    <img src={x.avatar} width="100" height="100" />
                  </td>
                </tr>
              ))}
              {userList.length == 0 && (
                <tr>
                  <td className="text-center" colSpan="4">
                    <b>No data found to display.</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className="employee-loading">
            <BallTriangle color="#76b2fe" height={100} width={100} />
          </div>
        </>
      )}
    </div>
  );
}

export default Employee;
