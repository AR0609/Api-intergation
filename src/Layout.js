import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
const Layout = () => {
  const [covidhead, setCovidhead] = useState();
  const [crickethead, setCrickethead] = useState();
  const [weatherhead, setWeatherhead] = useState();
  const [employeehead, setEmployeehead] = useState();
  return (
    <>
      <nav className="nav">
        <div className="link-text-two">
          <Link className="link-text" to="/">
            COVID
          </Link>
        </div>

        <div className="link-text-two">
          <Link className="link-text" to="/Cricket">
            CRICKET
          </Link>
        </div>
        <div className="link-text-two">
          <Link className="link-text" to="/Weather">
            WEATHER
          </Link>
        </div>
        <div className="link-text-two">
          <Link className="link-text" to="/Employee">
            EMPLOYEE
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
