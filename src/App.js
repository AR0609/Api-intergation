import logo from "./logo.svg";
import Covid from "./Covid";
import Cricket from "./cricket";
import Weather from "./Weather";
import Employee from "./Employee";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Covid />} />
            <Route path="Cricket" element={<Cricket />} />
            <Route path="Weather" element={<Weather />} />
            <Route path="Employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
