import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Footer from "./component/Footer";
import Help from "./pages/Help";
import { useState } from "react";
import NavbarReg from "./pages/navbarForReg";
import VaccineByAge from "./pages/vaccinesByAge";
import ChildHistory from "./pages/child/childHistory";
import ScheduleVaccination from "./pages/child/scheduleVaccination";
import ChildRegistration from "./pages/child/childRegistration";

function App() {
  return (
    <>
      {/* <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route
            path="/registration.js"
            element={
              <>
                <NavbarReg />
                <Registration />
              </>
            }
          />
          <Route
            path="/vaccinesByAge.js"
            element={
              <>
                <VaccineByAge />
              </>
            }
          ></Route>
          <Route path="/childHistory.js" element={<ChildHistory />}></Route>
          <Route
            path="/scheduleVaccine.js"
            element={<ScheduleVaccination />}
          ></Route>
          <Route
            path="/childRegistration.js"
            element={<ChildRegistration />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
