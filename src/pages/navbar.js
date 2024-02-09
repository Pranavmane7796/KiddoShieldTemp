import { useState } from "react";
import "../styles/Navbar.css";
import Login from "./login";
import Help from "./Help";
export default function Navbar() {
  const [open, close] = useState(false);
  const modalHandler = () => {
    close(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/images/kidLogo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="/childHistory.js">
              ChildHistory
            </a>
          </li>
          <li className="nav__item">
            {/* <a className="nav__link" href="#section--2">
              Operations
            </a> */}
            <div className="btn-group">
              <a
                id="dropdown-btn"
                className="btn  btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appoinment
              </a>
              <ul id="dropdown-menu" className="dropdown-menu">
                <li id="vaccination" style={{ marginLeft: "5%" }}>
                  Vaccination
                </li>

                <li id="monthlyCheckup" style={{ marginLeft: "5%" }}>
                  Monthly checkup
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--3">
              Help
            </a>
          </li>
          <li className="nav__item">
            {/* event listner to open modal */}
            <button
              data-toggle="modal"
              data-target="#modalopen"
              id="login__btn"
              type="button"
              className="btn btn-info rounded-pill px-4"
              onClick={modalHandler}
            >
              Click to login
            </button>
          </li>
        </ul>
      </nav>
      {open && <Login />}
    </>
  );
}
