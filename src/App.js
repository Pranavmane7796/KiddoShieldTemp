import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Footer from "./component/Footer";
import NavbarReg from "./pages/navbarForReg";
import VaccineByAge from "./pages/vaccinesByAge";
import ChildHistory from "./pages/child/childHistory";
import ScheduleVaccination from "./pages/child/scheduleVaccine";
import ChildRegistration from "./pages/child/childRegistration";
import MonthlyCheckUp from "./pages/child/monthlyCheckUp";
import ChildDashboard from "./pages/childDashboard";
import HosspitalDashboard from "./pages/hospital/hospitalDashboard";

function App() {
  return (
    <>
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
          <Route path="/monthlyCheckUp.js" element={<MonthlyCheckUp />}></Route>
          <Route path="/childDashboard.js" element={<ChildDashboard />}></Route>
          <Route
            path="/hospitalDashboard.js"
            element={
              <>
                <HosspitalDashboard />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
